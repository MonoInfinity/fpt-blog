using System;
using System.Collections.Generic;

using FluentValidation.Results;

using FPTBlog.Utils.Common;
using FPTBlog.Utils.Locale;

using Microsoft.AspNetCore.Mvc;

using FPTBlog.Src.UserModule.Entity;

using FPTBlog.Src.CommentModule.Entity;
using FPTBlog.Src.CommentModule.DTO;

using FPTBlog.Src.PostModule.Interface;
using FPTBlog.Src.PostModule.Entity;

using FPTBlog.Src.AuthModule;

namespace FPTBlog.Src.CommentModule.Interface {
    [ApiController]
    [Route("/api/comment")]
    [ServiceFilter(typeof(AuthGuard))]
    public class CommentApiController : Controller {
        private readonly ICommentService CommentService;
        private readonly IPostService PostService;
        public CommentApiController(ICommentService commentService, IPostService postService) {
            this.CommentService = commentService;
            this.PostService = postService;
        }

        #region Manage comment
        [HttpPost("")]
        public IActionResult AddCommentHandler([FromBody] AddCommentDto input) {
            var res = new ServerApiResponse<Comment>();

            ValidationResult result = new AddCommentDtoValidator().Validate(input);
            if (!result.IsValid) {
                res.mapDetails(result);
                return new BadRequestObjectResult(res.getResponse());
            }

            Post post = this.PostService.GetPostByPostId(input.PostId);
            if (post == null) {
                res.setErrorMessage(CustomLanguageValidator.ErrorMessageKey.ERROR_NOT_FOUND, "postId");
                return new BadRequestObjectResult(res.getResponse());
            }

            Comment comment = new Comment();
            comment.Content = input.Content;
            User user = (User) this.ViewData["user"];

            comment.UserId = user.UserId;
            comment.PostId = input.PostId;

            if (input.OriCommentId != null) {
                Comment oriComment = this.CommentService.GetCommentByCommentId(input.OriCommentId);
                if (oriComment == null) {
                    res.setErrorMessage(CustomLanguageValidator.ErrorMessageKey.ERROR_NOT_FOUND, "oriCommentId");
                    return new BadRequestObjectResult(res.getResponse());
                }
                comment.OriCommentId = oriComment.CommentId;
                comment.OriComment = oriComment;
            }
            this.CommentService.AddComment(comment);

            res.setMessage(CustomLanguageValidator.MessageKey.MESSAGE_ADD_SUCCESS);
            return new ObjectResult(res.getResponse());
        }

        [HttpPut("")]
        public IActionResult UpdateCommentHandler([FromBody] UpdateCommentDto input) {
            var res = new ServerApiResponse<Comment>();

            ValidationResult result = new UpdateCommentDtoValidator().Validate(input);
            if (!result.IsValid) {
                res.mapDetails(result);
                return new BadRequestObjectResult(res.getResponse());
            }

            Comment comment = this.CommentService.GetCommentByCommentId(input.CommentId);
            if (comment == null) {
                res.setErrorMessage(CustomLanguageValidator.ErrorMessageKey.ERROR_NOT_FOUND, "commentId");
                return new BadRequestObjectResult(res.getResponse());
            }

            comment.Content = input.Content;
            comment.CreateDate = DateTime.Now.ToShortDateString();
            this.CommentService.UpdateComment(comment);

            res.setMessage(CustomLanguageValidator.MessageKey.MESSAGE_UPDATE_SUCCESS);
            return new ObjectResult(res.getResponse());
        }

        [HttpPut("delete")]
        public IActionResult RemoveCommentHandler([FromBody] RemoveCommentDto input) {
            var res = new ServerApiResponse<Comment>();

            ValidationResult result = new RemoveCommentDtoValidator().Validate(input);
            if (!result.IsValid) {
                res.mapDetails(result);
                return new BadRequestObjectResult(res.getResponse());
            }

            Comment comment = this.CommentService.GetCommentByCommentId(input.CommentId);
            if (comment == null) {
                res.setErrorMessage(CustomLanguageValidator.ErrorMessageKey.ERROR_NOT_FOUND, "commentId");
                return new BadRequestObjectResult(res.getResponse());
            }

            this.CommentService.RemoveComment(comment);

            res.setMessage(CustomLanguageValidator.MessageKey.MESSAGE_DELETE_SUCCESS);
            return new ObjectResult(res.getResponse());
        }
        #endregion

        #region Get list ori comment
        [HttpGet("post")]
        public IActionResult GetListOriComment([FromQuery] GetCommentOfPostDto input) {
            var res = new ServerApiResponse<List<CommentViewModel>>();

            ValidationResult result = new GetCommentOfPostDtoValidator().Validate(input);
            if (!result.IsValid) {
                res.mapDetails(result);
                return new BadRequestObjectResult(res.getResponse());
            }

            Post post = this.PostService.GetPostByPostId(input.PostId);
            if (post == null) {
                res.setErrorMessage(CustomLanguageValidator.ErrorMessageKey.ERROR_NOT_FOUND, "postId");
                return new BadRequestObjectResult(res.getResponse());
            }

            List<Comment> listOriComment = this.CommentService.GetListOriCommentByPostId(input.PostId);

            List<CommentViewModel> listComment = new List<CommentViewModel>();

            foreach (var oriComment in listOriComment) {
                CommentViewModel commentViewModel = new CommentViewModel();
                commentViewModel.OriComment = oriComment;
                commentViewModel.SubComments = this.CommentService.GetListSubComment(oriComment);
                listComment.Add(commentViewModel);
            }

            res.data = listComment;
            return new ObjectResult(res.getResponse());
        }
        #endregion

        #region Like and Dislike comment
        [HttpPost("like")]
        public IActionResult LikeComment([FromBody] LikeCommentDto input) {
            var res = new ServerApiResponse<Comment>();
            ValidationResult result = new LikeCommentDtoValidator().Validate(input);
            if (!result.IsValid) {
                res.mapDetails(result);
                return new BadRequestObjectResult(res.getResponse());
            }
            Comment comment = this.CommentService.GetCommentByCommentId(input.CommentId);
            if (comment == null) {
                res.setErrorMessage(CustomLanguageValidator.ErrorMessageKey.ERROR_NOT_FOUND, "commentId");
                return new NotFoundObjectResult(res.getResponse());
            }
            User user = (User) this.ViewData["user"];

            this.CommentService.LikeComment(comment, user);
            res.setMessage(CustomLanguageValidator.MessageKey.MESSAGE_UPDATE_SUCCESS);
            return new ObjectResult(res.getResponse());
        }

        [HttpPost("dislike")]
        public IActionResult DislikeComment([FromBody] LikeCommentDto input) {
            var res = new ServerApiResponse<Comment>();
            ValidationResult result = new LikeCommentDtoValidator().Validate(input);
            if (!result.IsValid) {
                res.mapDetails(result);
                return new BadRequestObjectResult(res.getResponse());
            }
            Comment comment = this.CommentService.GetCommentByCommentId(input.CommentId);
            if (comment == null) {
                res.setErrorMessage(CustomLanguageValidator.ErrorMessageKey.ERROR_NOT_FOUND, "commentId");
                return new NotFoundObjectResult(res.getResponse());
            }
            User user = (User) this.ViewData["user"];

            this.CommentService.DislikeComment(comment, user);
            res.setMessage(CustomLanguageValidator.MessageKey.MESSAGE_UPDATE_SUCCESS);
            return new ObjectResult(res.getResponse());
        }
        #endregion
    }
}
