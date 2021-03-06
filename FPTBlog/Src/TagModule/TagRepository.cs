using System.Collections.Generic;
using System.Linq;
using System;

using FPTBlog.Src.TagModule.Entity;
using FPTBlog.Src.TagModule.Interface;
using FPTBlog.Src.PostModule.Entity;

using FPTBlog.Utils;
using FPTBlog.Utils.Repository;

namespace FPTBlog.Src.TagModule {
    public class TagRepository : Repository<Tag>, ITagRepository {
        private readonly DB Db;
        public TagRepository(DB dB) : base(dB) {
            this.Db = dB;
        }

        public (List<Tag>, int) GetTagsWithCount(int pageIndex, int pageSize, string searchName, TagStatus searchStatus) {
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

        public (int, int) GetCreatedTag() {
            int createdTagThisMonth = 0;
            int createdTagLastMonth = 0;
            string thisMonth = DateTime.Now.AddMonths(-1).ToShortDateString();
            DateTime thisMonthDate = Convert.ToDateTime(thisMonth);
            string lastMonth = DateTime.Now.AddMonths(-2).ToShortDateString();
            DateTime lastMonthDate = Convert.ToDateTime(lastMonth);

            List<Tag> tags = this.Db.Tag.ToList();

            foreach (var tag in tags) {
                DateTime date = Convert.ToDateTime(tag.CreateDate);
                if (DateTime.Compare(date, thisMonthDate) > 0) {
                    createdTagThisMonth++;
                }
                if (DateTime.Compare(date, lastMonthDate) > 0 && (DateTime.Compare(date, thisMonthDate) < 0)) {
                    createdTagLastMonth++;
                }
            }
            return (createdTagLastMonth, createdTagThisMonth);
        }

        public (string, int) GetHotTrendingTag() {
            var listTagDescending = this.Db.PostTag.AsEnumerable()
                                        .GroupBy(p => p.TagId)
                                        .OrderByDescending(p => p.Count())
                                        .Select(p => new { TagId = p.Key, Count = p.Count() })
                                        .ToList();
            string hotTrendingTagId = listTagDescending[0].TagId;
            Tag hotTrendingTag = this.Db.Tag.FirstOrDefault(item => item.TagId == hotTrendingTagId);

            int count = listTagDescending[0].Count;

            return (hotTrendingTag.Name, count);
        }

        public List<string> GetUsedTagIds() => this.Db.PostTag.Select(item => item.TagId).ToList();
        public List<TagChart> GetTagChart() {
            List<TagChart> chart = new List<TagChart>();
            List<Tag> tags = new List<Tag>();
            List<Post> posts = this.Db.Post.ToList();
            List<PostTag> postTags;


            postTags = (from PostTag in this.Db.PostTag
                        join Post in this.Db.Post
                        on PostTag.PostId equals Post.PostId
                        where PostTag.PostId.Equals(Post.PostId)
                        select PostTag).ToList();

            var top10 = postTags.GroupBy(x => x).OrderByDescending(g => g.Count()).SelectMany(x => x.Take(1)).Take(10).ToList();

            foreach (var top in top10) {
                this.Db.Entry(top).Reference(item => item.Tag).Load();
                var count = 0;
                foreach (var tag in postTags) {
                    if (tag.TagId == top.TagId)
                        count++;
                }
                var tagChart = new TagChart();
                tagChart.name = top.Tag.Name;
                tagChart.total = count;
                chart.Add(tagChart);
            }
            return chart;
        }
    }
}
