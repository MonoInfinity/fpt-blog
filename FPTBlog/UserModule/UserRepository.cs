﻿using FPTBlog.UserModule.Entity;
using FPTBlog.UserModule.Interface;
using FPTBlog.Utils;
using System.Linq;


namespace FPTBlog.UserModule
{
    public class UserRepository: IUserRepository
    {
        private readonly DB Db;
        public UserRepository(DB db)
        {
            this.Db = db;
        }


        public User GetUserByUsername(string username)
        {
            var user = this.Db.user.FirstOrDefault(item => item.Username == username);
            return user;
        }

        public bool SaveUser(User user)
        {
            this.Db.user.Add(user);
            return this.Db.SaveChanges() > 0;
        }
    }
}
