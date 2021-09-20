﻿using FPTBlog.Src.UserModule.DTO;
using FPTBlog.Src.UserModule.Entity;
using Microsoft.AspNetCore.Mvc.ViewFeatures;

namespace FPTBlog.Src.UserModule.Interface
{
    public interface IUserService
    {
        public User GetUserByUsername(string username);
        public bool SaveUser(User user);
        public bool UpdateUserHandler(UpdateUserDto input, ViewDataDictionary dataView);
        public User GetUserByUserId(string id);
        public User GetUserByGoogleId(string googleId);
        public void ChangePasswordHandler(ChangePassDto input, ViewDataDictionary dataView);

    }
}