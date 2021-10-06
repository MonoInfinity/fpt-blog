
using System;
using Microsoft.AspNetCore.Mvc;
using FPTBlog.Src.CategoryModule.Interface;
using FPTBlog.Src.CategoryModule.DTO;
using FPTBlog.Src.CategoryModule.Entity;
using FPTBlog.Src.AuthModule;
using FPTBlog.Utils.Common;
using Microsoft.AspNetCore.Mvc.Rendering;


namespace FPTBlog.Src.CategoryModule {
    [Route("/admin/category")]
    [ServiceFilter(typeof(AuthGuard))]
    public class CategoryMvcController : Controller {
        private readonly ICategoryService CategoryService;


        public CategoryMvcController(ICategoryService categoryService) {
            this.CategoryService = categoryService;
        }

        [HttpGet("")]
        public IActionResult Category(string searchName, CategoryStatus searchStatus = CategoryStatus.ACTIVE, int pageSize = 12, int pageIndex = 0) {
            if (searchName == null) {
                searchName = "";
            }

            this.ViewData["status"] = new SelectList(this.CategoryService.GetCategoryStatusDropList(), CategoryStatus.ACTIVE);

            var statusList = this.CategoryService.GetCategoryStatusDropList();
            statusList.Add(new SelectListItem() { Text = "All", Value = "" });
            SelectList list = new SelectList(statusList, "");

            this.ViewData["statusSearch"] = list;



            var (categories, total) = this.CategoryService.GetCategoriesAndCount(pageIndex, pageSize, searchName, searchStatus);
            this.ViewData["categories"] = categories;
            this.ViewData["total"] = total;
            return View(RoutersAdmin.CategoryGetCategoryList.Page);
        }

        [HttpGet("create")]
        public IActionResult AddCategoryPage() {
            SelectList list = new SelectList(this.CategoryService.GetCategoryStatusDropList(), "1");
            this.ViewData["status"] = list;

            return View(RoutersAdmin.CategoryPost.Page);
        }

        [HttpGet("update")]
        public IActionResult UpdateCategory(string categoryId) {
            var category = this.CategoryService.GetCategoryByCategoryId(categoryId);
            SelectList list = new SelectList(this.CategoryService.GetCategoryStatusDropList(), "1");
            this.ViewData["status"] = list;
            this.ViewData["category"] = category;
            return View(RoutersAdmin.CategoryPutCategory.Page);
        }
    }
}
