using System.Linq;
using System.Collections.Generic;

using FPTBlog.Src.CategoryModule.Entity;
using FPTBlog.Src.CategoryModule.Interface;

using FPTBlog.Utils;
using FPTBlog.Utils.Repository;

namespace FPTBlog.Src.CategoryModule {
    public class CategoryRepository : Repository<Category>, ICategoryRepository {
        private readonly DB DB;

        public CategoryRepository(DB dB) : base(dB) {
            this.DB = dB;
        }

        public (List<Category>, int) GetCategoriesAndCount(int pageIndex, int pageSize, string searchName, CategoryStatus searchStatus) {
            List<Category> list = new List<Category>();
            if ((int) searchStatus == 0) {
                list = (List<Category>) this.GetAll(item => item.Name.Contains(searchName));
            }
            else {
                list = (List<Category>) this.GetAll(item => item.Name.Contains(searchName) && item.Status == searchStatus);
            }
            var count = list.Count();


            var pagelist = list.Take((pageIndex + 1) * pageSize).Skip(pageIndex * pageSize).ToList();

            return (pagelist, count);
        }
    }
}
