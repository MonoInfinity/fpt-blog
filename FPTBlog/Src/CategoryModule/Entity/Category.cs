using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FPTBlog.Src.CategoryModule.Entity {

    public enum CategoryStatus {
        ACTIVE = 1,
        INACTIVE = 2
    }

    [Table("tblCategory")]
    public class Category {
        [Key]
        [Required]
        [StringLength(40)]
        public string CategoryId {
            set; get;
        }

        [Required]
        [StringLength(50)]
        public string Name {
            set; get;
        }

        [Required]
        [StringLength(500)]
        public string Description {
            set; get;
        }

        [Required]
        public CategoryStatus Status {
            get; set;
        }

        [Required]
        [StringLength(50)]
        public string CreateDate {
            set; get;
        }

        public Category() {
            this.CategoryId = Guid.NewGuid().ToString();
            this.Name = "";
            this.Description = "";
            this.Status = CategoryStatus.ACTIVE;
            this.CreateDate = DateTime.Now.ToString("dddd, dd MMMM yyyy");
        }
    }
}
