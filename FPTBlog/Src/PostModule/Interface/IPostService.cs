using System.Collections.Generic;
using FPTBlog.Src.PostModule.Entity;
using FPTBlog.Src.TagModule.Entity;

namespace FPTBlog.Src.PostModule.Interface {
    public interface IPostService {
        public void AddPost(Post post);
        public Post GetPostByPostId(string postId);
        public void UpdatePost(Post post);
        public void RemovePost(Post post);
        public void AddTagToPost(Post post, Tag tag);
        public void RemoveTagFromPost(Post post, Tag tag);
        public (List<Post>, int) GetPostsAndCount(int pageIndex, int pageSize, PostStatus searchStatus);
        public (List<Post>, int) GetPostsByCategoryWithCount(int pageSize, int pageIndex, string name);
        public List<Tag> GetTagsFromPost(Post post);
        public (List<Post>, int) GetPostsByTagWithCount(int pageSize, int pageIndex, string name);
        public (List<Post>, int) GetPostsOfStudentWithStatus(int pageSize, int pageIndex, string studentId, PostStatus status);
        public (List<Post>, int) GetWaitPostsWithCount();
        public int CalculatePostPoint(Post post);
    }
}