﻿using FPTBlog.Src.TagModule.Entity;
using FPTBlog.Src.UserModule.Entity;
using FPTBlog.Src.CategoryModule.Entity;
using FPTBlog.Utils.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;
using FPTBlog.Src.BlogModule.Entity;

namespace FPTBlog.Utils {
      public class DB : DbContext {
            private IConfig Config;
            public DB(IConfig config) {
                  this.Config = config;
            }
            public DbSet<User> User {
                  set; get;
            }
            public DbSet<Tag> Tag {
                  set; get;
            }
            public DbSet<Category> Category {
                  set; get;
            }
            public DbSet<Blog> Blog {
                  set; get;
            }
            public DbSet<BlogTag> BlogTag {
                  get; set;
            }

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
                  base.OnConfiguring(optionsBuilder);
                  optionsBuilder.UseSqlServer(this.Config.GetEnvByKey("DB_URL"));
            }

            protected override void OnModelCreating(ModelBuilder modelBuilder) {
                  modelBuilder.Entity<BlogTag>().HasKey(item => new { item.BlogId, item.TagId });

                  modelBuilder.Entity<BlogTag>()
                      .HasOne(x => x.Blog)
                      .WithMany(x => x.BlogTags)
                      .HasForeignKey(x => x.BlogId);

                  modelBuilder.Entity<BlogTag>()
                      .HasOne(x => x.Tag)
                      .WithMany(x => x.BlogTags)
                      .HasForeignKey(x => x.TagId);

                  base.OnModelCreating(modelBuilder);
            }
            public static async Task<Boolean> InitDatabase(IConfig config) {
                  var dbContext = new DB(config);
                  bool result = await dbContext.Database.EnsureCreatedAsync();
                  if (result) {
                        Console.WriteLine("Database created");
                  }

                  return true;
            }
      }
}
