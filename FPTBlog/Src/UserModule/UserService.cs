using FPTBlog.Src.UserModule.Entity;
using FPTBlog.Src.UserModule.Interface;
using FPTBlog.Src.PostModule.Entity;

using System.Collections.Generic;

using Microsoft.AspNetCore.Mvc.Rendering;

namespace FPTBlog.Src.UserModule {
    public class UserService : IUserService {
        private readonly IUserRepository UserRepository;
        public UserService(IUserRepository userRepository) {
            this.UserRepository = userRepository;
        }

        #region  OK

        public void AddUser(User user) => this.UserRepository.Add(user);
        public User GetUserByUserId(string id) => this.UserRepository.Get(id);
        public User GetUserByGoogleId(string googleId) => this.UserRepository.GetFirstOrDefault(item => item.GoogleId.Equals(googleId));
        public User GetUserByUsername(string username) => this.UserRepository.GetFirstOrDefault(item => item.Username.Equals(username));
        public void UpdateUser(User user) => this.UserRepository.Update(user);
        public void RemoveUser(User user) => this.UserRepository.Remove(user);
        public void ToggleUserStatusAdminHandler(User user) {
            if (user.Status == UserStatus.ENABLE)
                user.Status = UserStatus.DISABLE;
            else
                user.Status = UserStatus.ENABLE;
            this.UserRepository.Update(user);
        }
        public void ToggleUserRoleAdminHandler(User user) {
            if (user.Role == UserRole.STUDENT)
                user.Role = UserRole.LECTURER;
            else
                user.Role = UserRole.STUDENT;
            this.UserRepository.Update(user);
        }
        public (List<User>, int) GetUsersStatusAndRoleWithCount(int pageIndex, int pageSize, string searchName, UserStatus searchStatus, UserRole searchRole) => this.UserRepository.GetUsersStatusAndRoleWithCount(pageIndex, pageSize, searchName, searchStatus, searchRole);
        public (List<User>, int) GetUsersNameWithCount(int pageSize, int pageIndex, string searchName) => this.UserRepository.GetUsersNameWithCount(pageSize, pageIndex, searchName);
        public void FollowUser(User followingUser, User follower) => this.UserRepository.FollowUser(followingUser, follower);
        public void UnfollowUser(User followingUser, User follower) => this.UserRepository.UnfollowUser(followingUser, follower);
        public (List<User>, int) CalculateFollower(string userId) => this.UserRepository.CalculateFollower(userId);
        public (List<User>, int) CalculateFollowing(string userId) => this.UserRepository.CalculateFollowing(userId);
        public bool IsFollow(string userId, string followerId) => this.UserRepository.IsFollow(userId, followerId);
        public bool IsSave(string userId, string postId) => this.UserRepository.IsSave(userId, postId);
        public List<SelectListItem> GetUserStatusDropList() {
            var status = new List<SelectListItem>(){
                new SelectListItem(){ Value = UserStatus.ENABLE.ToString(), Text = "Enable"},
                new SelectListItem(){  Value =  UserStatus.DISABLE.ToString(), Text = "Disable"}
            };

            return status;
        }
        public List<SelectListItem> GetUserRoleDropList() {
            var role = new List<SelectListItem>(){
                new SelectListItem(){ Value = UserRole.STUDENT.ToString(), Text = "Student"},
                new SelectListItem(){  Value =  UserRole.LECTURER.ToString(), Text = "Lecturer"}
            };

            return role;
        }
        public int CountUserByRole(UserRole role) {
            List<User> users = (List<User>) this.UserRepository.GetAll();
            var count = 0;
            foreach (var user in users) {
                if (user.Role == role) {
                    count++;
                }
            }
            return count;
        }
        public ReportUser GetMonthlyReport() => this.UserRepository.GetMonthlyReport();
        public void SavePost(User user, Post post) => this.UserRepository.SavePost(user, post);
        public void UnsavePost(User user, Post post) => this.UserRepository.UnsavePost(user, post);
        public (List<Post>, int) GetSavePost(string userId, int pageIndex, int pageSize, string searchTitle, string searchCategoryId) => this.UserRepository.GetSavePost(userId, pageIndex, pageSize, searchTitle, searchCategoryId);

        public (List<User>, int) GetFollowerForPage(string userId, int pageIndex, int pageSize, string searchName) => this.UserRepository.GetFollowerForPage(userId, pageIndex, pageSize, searchName);

        public (List<User>, int) GetFollowingForPage(string userId, int pageIndex, int pageSize, string searchName) => this.UserRepository.GetFollowingForPage(userId, pageIndex, pageSize, searchName);

        #endregion
        public List<User> GetUsersHave_N_Posts(int N) => this.UserRepository.GetUsersHave_N_Posts(N);

        public List<User> GetUsersHave_N_Followers(int N) => this.UserRepository.GetUsersHave_N_Followers(N);

        public List<User> GetUsersHave_N_View_For_A_Post(int N) => this.UserRepository.GetUsersHave_N_View_For_A_Post(N);

        public List<User> GetUsersHave_N_Interaction_For_A_Post(int N) => this.UserRepository.GetUsersHave_N_Interaction_For_A_Post(N);

        public User GetUserHave_Most_View_For_A_Post_In_N_Month_FromNow(int N)=> this.UserRepository.GetUserHave_Most_View_For_A_Post_In_N_Month_FromNow(N);

        public User GetUserHave_Most_Interaction_For_A_Post_In_N_Month_FromNow(int N) => this.UserRepository.GetUserHave_Most_Interaction_For_A_Post_In_N_Month_FromNow(N);

        public User GetUserHave_Most_Post_In_N_Month_FromNow(int N) => this.UserRepository.GetUserHave_Most_Post_In_N_Month_FromNow(N);
        public (int, int) GetUserChartInformation() {
            List<User> users = (List<User>) this.UserRepository.GetAll();
            int totalStudent = 0;
            int totalLecturer = 0;
            foreach (User user in users) {
                if (user.Role == UserRole.STUDENT) {
                    totalStudent++;
                }
                if (user.Role == UserRole.LECTURER) {
                    totalLecturer++;
                }
            }

            return (totalStudent, totalLecturer);
        }
    }
}
