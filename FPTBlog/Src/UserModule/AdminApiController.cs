using FPTBlog.Utils.Common;
using Microsoft.AspNetCore.Mvc;
using FPTBlog.Src.UserModule.Interface;
using FPTBlog.Src.AuthModule;
using FPTBlog.Src.UserModule.DTO;
using FPTBlog.Utils.Locale;
using FPTBlog.Src.AuthModule.Interface;
using FPTBlog.Src.UserModule.Entity;
using FluentValidation.Results;
using System;

namespace FPTBlog.Src.UserModule {
    [Route("api/admin/user")]
    [ServiceFilter(typeof(AuthGuard))]
    public class AdminApiController : Controller {
        private readonly IAuthService AuthService;

        private readonly IUserService UserService;
        public AdminApiController(IUserService userService, IAuthService authService) {
            this.UserService = userService;
            this.AuthService = authService;
        }
        [HttpPut("status")]
        public IActionResult ToggleUserStatusHandler([FromBody] ToggleUserDto body) {
            var res = new ServerApiResponse<string>();

            ValidationResult result = new ToggleUserDtoValidator().Validate(body);
            if (!result.IsValid) {
                res.mapDetails(result);
                return new BadRequestObjectResult(res.getResponse());
            }
            User user = this.UserService.GetUserByUserId(body.UserId);
            if (user.Role == UserRole.LECTURER) {
                res.setErrorMessage(CustomLanguageValidator.ErrorMessageKey.ERROR_NOT_ALLOW);
                return new BadRequestObjectResult(res.getResponse());
            }
            this.UserService.ToggleUserStatusAdminHandler(user);

            res.setMessage(CustomLanguageValidator.MessageKey.MESSAGE_UPDATE_SUCCESS);
            return new ObjectResult(res.getResponse());
        }

        [HttpPut("role")]
        public IActionResult ToggleUserRoleHandler([FromBody] ToggleUserDto body) {
            var res = new ServerApiResponse<string>();

            ValidationResult result = new ToggleUserDtoValidator().Validate(body);
            if (!result.IsValid) {
                res.mapDetails(result);
                return new BadRequestObjectResult(res.getResponse());
            }
            User user = this.UserService.GetUserByUserId(body.UserId);
            if (user.Role == UserRole.LECTURER) {
                res.setErrorMessage(CustomLanguageValidator.ErrorMessageKey.ERROR_NOT_ALLOW);
                return new BadRequestObjectResult(res.getResponse());
            }
            this.UserService.ToggleUserRoleAdminHandler(user);

            res.setMessage(CustomLanguageValidator.MessageKey.MESSAGE_UPDATE_SUCCESS);
            return new ObjectResult(res.getResponse());
        }

        [HttpGet("chart")]
        public IActionResult GetChart() {
            var res = new ServerApiResponse<object>();
            var (totalStudent, totalLecturer) = this.UserService.GetUserChartInformation();

            res.data = Json(new {
                totalStudent = totalStudent,
                totalLecturer = totalLecturer
            });

            return new ObjectResult(res.getResponse());
        }
    }
}
