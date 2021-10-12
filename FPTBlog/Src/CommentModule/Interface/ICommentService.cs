using System.Collections.Generic;
using FPTBlog.Src.CommentModule.Entity;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace FPTBlog.Src.CommentModule.Interface {
    public interface ICommentService {
        public void AddComment(Comment comment);
        public Comment GetCommentByCommentId(string commentId);
        public void UpdateComment(Comment comment);
        public void RemoveComment(Comment comment);
        public List<Comment> GetListOriCommentByPostId(string postId);
        public List<Comment> GetListSubComment(Comment comment);
    }
}
