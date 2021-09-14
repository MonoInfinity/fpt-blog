using FluentValidation;
using FPTBlog.Utils.Validator;
using FPTBlog.CategoryModule.Entity;

namespace FPTBlog.CategoryModule.DTO
{
    public class CreateCategoryDTO
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public CategoryStatus Status { get; set; }
    }

    public class CreateCategoryDTOValidator : AbstractValidator<CreateCategoryDTO>
    {
        public CreateCategoryDTOValidator()
        {
            RuleFor(x => x.Name).NotEmpty().NotNull().Length(CategoryValidator.NAME_MIN, CategoryValidator.NAME_MAX);
            RuleFor(x => x.Description).NotEmpty().NotNull().Length(CategoryValidator.DECRIPTION_MIN, CategoryValidator.DECRIPTION_MAX);
            RuleFor(x => x.Status).NotEmpty().NotNull().IsInEnum();
        }
    }
}