using System.Collections.Generic;
using FPTBlog.Src.PostModule.Entity;
using FPTBlog.Src.TagModule.Entity;
using FPTBlog.Src.UserModule.Entity;
using FPTBlog.Utils.Repository.Interface;

namespace FPTBlog.Src.PostModule.Interface {
    public interface IPostRepository : IRepository<Post> {

        public void AddTagToPost(Post blog, Tag tag);
        public void RemoveTagFromPost(Post blog, Tag tag);
        public (List<Post>, int) GetPostsByCategoryWithCount(int pageSize, int pageIndex, string name);
        public List<Tag> GetTagsFromPost(Post blog);
        public (List<Post>, int) GetPostsByTagWithCount(int pageSize, int pageIndex, string name);

        public (List<Post>, int) GetPostsOfStudentWithStatus(int pageSize, int pageIndex, string studentId, PostStatus status);
        public (List<Post>, int) GetWaitPostsWithCount();


    }
}