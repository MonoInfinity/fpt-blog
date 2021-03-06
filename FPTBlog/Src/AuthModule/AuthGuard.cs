using System.Collections.Generic;
using System;
using System.Linq;

using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;

using FPTBlog.Src.UserModule.Entity;
using FPTBlog.Src.UserModule.Interface;

using FPTBlog.Utils.Interface;
using FPTBlog.Utils.Locale;
using FPTBlog.Utils.Common;

namespace FPTBlog.Src.AuthModule {
    public class AuthGuard : IActionFilter {
        private readonly IJwtService JWTService;
        private readonly IUserRepository UserRepository;
        private readonly IUserService UserService;
        public AuthGuard(IJwtService jwtService, IUserRepository userRepository, IUserService userService) {
            this.JWTService = jwtService;
            this.UserRepository = userRepository;
            this.UserService = userService;
        }

        public void OnActionExecuted(ActionExecutedContext context) {
        }

        public void OnActionExecuting(ActionExecutingContext context) {
            bool isValid = this.GuardHandler(context);
            if (!isValid) {
                Controller controller = context.Controller as Controller;
                ServerMvcResponse.SetErrorMessage(CustomLanguageValidator.ErrorMessageKey.ERROR_NOT_ALLOW, controller.ViewData);
                context.Result = new ViewResult {
                    ViewName = Routers.AuthPostLogin.Page,
                };
                return;
            }
        }

        public bool GuardHandler(ActionExecutingContext context) {

            try {
                var cookies = new Dictionary<string, string>();
                var values = ((string) context.HttpContext.Request.Headers["Cookie"]).Split(',', ';');

                foreach (var parts in values) {
                    var cookieArray = parts.Trim().Split('=');
                    if (cookieArray.Length >= 2) {
                        cookies.Add(cookieArray[0], cookieArray[1]);
                    }
                }

                if (!cookies.TryGetValue("auth-token", out _)) {
                    return false;
                }
                var token = this.JWTService.VerifyToken(cookies["auth-token"]).Split(";");

                if (token[0] == null) {
                    return false;
                }
                var user = this.UserService.GetUserByUserId(token[0]);
                if (user == null || user.Status == UserStatus.DISABLE) {
                    return false;
                }
                Controller controller = context.Controller as Controller;
                controller.ViewData["user"] = user;

                // check user's role
                if (context.ActionArguments.TryGetValue("roles", out _)) {
                    UserRole[] roles = context.ActionArguments["roles"] as UserRole[];
                    if (!roles.Contains(user.Role)) {
                        return false;
                    }
                }

                // check user status
                if (user.Status == UserStatus.DISABLE) {
                    return false;
                }

                return true;

            }
            catch (Exception error) {
                Console.WriteLine(error);
                return false;
            }
        }
    }
}
