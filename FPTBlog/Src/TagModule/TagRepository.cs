
using System.Collections.Generic;
using System.Linq;
using FPTBlog.Src.TagModule.Entity;
using FPTBlog.Src.TagModule.Interface;
using FPTBlog.Utils;
using FPTBlog.Src.PostModule.Entity;
using FPTBlog.Utils.Repository;
namespace FPTBlog.Src.TagModule {
    public class TagRepository : Repository<Tag>, ITagRepository {
        private readonly DB Db;
        public TagRepository(DB dB) : base(dB) {
            this.Db = dB;
        }

        public (List<Tag>, int) GetTagsWithCount(int pageIndex, int pageSize, string searchName, TagStatus searchStatus   ) {
            var list = (IEnumerable<Tag>) this.GetAll(item => item.Name.Contains(searchName) && item.Status == searchStatus);
            var count = list.Count();
            var pagelist = list.Take((pageIndex + 1) * pageSize).Skip(pageIndex * pageSize).ToList();

            return (pagelist, count);
        }

        public int NumberOfPostBelongToTag(string tagId) {
            List<PostTag> listBlogByTag = (from PostTag in this.Db.PostTag
                                           where tagId.CompareTo(PostTag.TagId) == 0
                                           select PostTag).ToList();
            return listBlogByTag.Count();
        }
    }
}
