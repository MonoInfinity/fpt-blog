using FluentValidation;

using FPTBlog.Utils.Validator;
using FPTBlog.Src.CategoryModule.Entity;

namespace FPTBlog.Src.CategoryModule.DTO {
    public class UpdateCategoryDTO {
        public string CategoryId {
            get; set;
        }
        public string Name {
            get; set;
        }
        public string Description {
            get; set;
        }
        public CategoryStatus Status {
            get; set;
        }
    }

    public class UpdateCategoryDTOValidator : AbstractValidator<UpdateCategoryDTO> {
        public UpdateCategoryDTOValidator() {
            RuleFor(x => x.CategoryId).NotEmpty().NotNull().Length(CategoryValidator.CATEGORY_ID_MIN, CategoryValidator.CATEGORY_ID_MAX);
            RuleFor(x => x.Name).NotEmpty().NotNull().Length(CategoryValidator.NAME_MIN, CategoryValidator.NAME_MAX);
            RuleFor(x => x.Description).NotEmpty().NotNull().Length(CategoryValidator.DESCRIPTION_MIN, CategoryValidator.DESCRIPTION_MAX);
            RuleFor(x => x.Status).NotEmpty().NotNull().IsInEnum();
        }
    }
}
