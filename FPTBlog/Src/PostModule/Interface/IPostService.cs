using System;
using System.Collections.Generic;
using FPTBlog.Src.CommentModule.Entity;
using FPTBlog.Src.PostModule.Entity;
using FPTBlog.Src.TagModule.Entity;
using FPTBlog.Src.UserModule.Entity;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace FPTBlog.Src.PostModule.Interface {
    public interface IPostService {
        #region Add, Update, Remove
        public void AddPost(Post post);
        public void UpdatePost(Post post);
        public void RemovePost(Post post);
        #endregion

        #region Add, Remove, Get a tag from a post
        public void AddTagToPost(Post post, Tag tag);
        public void RemoveTagFromPost(Post post, Tag tag);
        public (List<Post>, int) GetPostsAndCount(int pageIndex, int pageSize, string search, string categoryId);
        public List<Tag> GetTagsFromPost(Post post);
        #endregion

        public Post GetPostByPostId(string postId);
        public PostViewModel GetViewPostByPostId(string postId);
        public (List<PostViewModel>, int) GetPostsByTagWithCount(int pageSize, int pageIndex, string name);
        public (List<Post>, int) GetPostsOfStudentWithStatusForPage(int pageSize, int pageIndex, string studentId);

        public (List<Post>, int) GetPopularPosts(int quantity);
        public (List<Post>, int) GetHighestPointPosts(int quantity);
        public (List<Post>, int) GetNewestPosts(int quantity);
        public int CalculatePostPoint(Post post);
        public (List<Comment>, int) GetCommentOfPost(Post post);
        public List<string> GetPostSuggestion(string search, string categoryId);
        public (List<Post>, int) GetPostsForProfile(string userId, int pageSize, int pageIndex, string searchTitle, string searchCategoryId, PostStatus status);
        public (List<Post>, int) GetPostsOfStudentWithStatus(string userId, PostStatus status);
        public (List<Post>, int) GetPostsByStatus(int pageSize, int pageIndex, string search, PostStatus status);
        public (List<Post>, int) GetAllPosts(int pageSize, int pageIndex, string search);
        public List<SelectListItem> GetPostStatusDropList();
        public Report GetMonthlyReport();
        public Dictionary<string, DateTime> ConvertStringToViewSession(string input);
        public string ConvertViewSessionToString(Dictionary<string, DateTime> list);

        #region Like, Dislike
        public void LikePost(Post post, User user);
        public void DislikePost(Post post, User user);
        #endregion

        #region Chart
        public List<PostChart> GetPostChart(DateTime fromDate, DateTime toDate);
        #endregion
    }
}
