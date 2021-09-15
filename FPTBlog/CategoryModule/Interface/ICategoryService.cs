using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using FPTBlog.CategoryModule.DTO;
using FPTBlog.CategoryModule.Entity;


namespace FPTBlog.CategoryModule.Interface
{
    public interface ICategoryService
    {
        public List<Category> GetCategories();
        public bool SaveCategory(Category category);
        public Category GetCategoryByCategoryName(string name);
        public Category GetCategoryByCategoryId(string categoryId);
        public bool UpdateCategory(Category category);
    }
}