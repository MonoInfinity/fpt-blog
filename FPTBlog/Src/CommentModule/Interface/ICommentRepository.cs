using System;
using System.Collections.Generic;
using System.Linq;
using FPTBlog.Src.CommentModule.Entity;
using System.Threading.Tasks;
using FPTBlog.Utils.Repository.Interface;

namespace FPTBlog.Src.CommentModule.Interface {
    public interface ICommentRepository : IRepository<Comment> {
        public List<Comment> GetListOriCommentByPostId(string postId);
        public void RemoveAndItsChildComment(Comment comment);
    }
}
