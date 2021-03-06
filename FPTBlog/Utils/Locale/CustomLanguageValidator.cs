namespace FPTBlog.Utils.Locale {
    public class CustomLanguageValidator : FluentValidation.Resources.LanguageManager {
        public static class ErrorMessageKey {
            public static readonly string ERROR_LOGIN_FAIL = "ERROR_LOGIN_FAIL";
            public static readonly string ERROR_EXISTED = "ERROR_EXISTED ";
            public static readonly string ERROR_FAIL_TO_SAVE = "ERROR_FAIL_TO_SAVE";
            public static readonly string ERROR_UPDATE_FAIL = "ERROR_UPDATE_FAIL";
            public static readonly string ERROR_DELETE_FAIL = "ERROR_DELETE_FAIL";
            public static readonly string ERROR_WRONG = "ERROR_WRONG";
            public static readonly string ERROR_DISSABLED_ACCOUNT = "ERROR_DISSABLED_ACCOUNT";
            public static readonly string ERROR_NOT_FOUND = "ERROR_NOT_FOUND";
            public static readonly string ERROR_NOT_ALLOW = "ERROR_NOT_ALLOW";
            public static readonly string ERROR_PASSWORD_CONTAIN_CHARACTER = "ERROR_PASSWORD_CONTAIN_CHARACTER";
            public static readonly string ERROR_PASSWORD_CONTAIN_WHITESPACE = "ERROR_PASSWORD_CONTAIN_WHITESPACE";
            public static readonly string ERROR_OLD_PASSWORD_IS_WRONG = "ERROR_OLD_PASSWORD_IS_WRONG";
            public static readonly string ERROR_REWARD_BELONG_USER = "ERROR_REWARD_BELONG_USER";
            public static readonly string FILE_TOO_LARGE = "FILE_TOO_LARGE";
            public static readonly string FILE_WRONG_EXTENSION = "FILE_WRONG_EXTENSION";
        }

        public static class MessageKey {
            public static readonly string MESSAGE_UNFOLLOW_SUCCESS = "MESSAGE_UNFOLLOW_SUCCESS";
            public static readonly string MESSAGE_FOLLOW_SUCCESS = "MESSAGE_FOLLOW_SUCCESS";
            public static readonly string MESSAGE_POSTED_SUCCESS = "MESSAGE_POSTED_SUCCESS";
            public static readonly string MESSAGE_LOGIN_SUCCESS = "MESSAGE_LOGIN_SUCCESS";
            public static readonly string MESSAGE_REGISTER_SUCCESS = "MESSAGE_REGISTER_SUCCESS";
            public static readonly string MESSAGE_LOGOUT_SUCCESS = "MESSAGE_LOGOUT_SUCCESS";
            public static readonly string MESSAGE_UPDATE_SUCCESS = "MESSAGE_UPDATE_SUCCESS";
            public static readonly string MESSAGE_ADD_SUCCESS = "MESSAGE_ADD_SUCCESS";
            public static readonly string MESSAGE_BLOCK_USER = "MESSAGE_BLOCK_USER";
            public static readonly string MESSAGE_DELETE_SUCCESS = "MESSAGE_DELETE_SUCCESS";
            public static readonly string MESSAGE_SAVE_SUCCESS = "MESSAGE_SAVE_SUCCESS";
            public static readonly string MESSAGE_UNSAVE_SUCCESS = "MESSAGE_UNSAVE_SUCCESS";
        }
        public CustomLanguageValidator() {

            // Success message
            // EN
            AddTranslation("en", MessageKey.MESSAGE_UNSAVE_SUCCESS, "unsave success");
            AddTranslation("en", MessageKey.MESSAGE_FOLLOW_SUCCESS, "follow success");
            AddTranslation("en", MessageKey.MESSAGE_UNFOLLOW_SUCCESS, "unfollow success");
            AddTranslation("en", MessageKey.MESSAGE_POSTED_SUCCESS, "post success");
            AddTranslation("en", MessageKey.MESSAGE_LOGIN_SUCCESS, "login success");
            AddTranslation("en", MessageKey.MESSAGE_REGISTER_SUCCESS, "register success");
            AddTranslation("en", MessageKey.MESSAGE_LOGOUT_SUCCESS, "logout success");
            AddTranslation("en", MessageKey.MESSAGE_UPDATE_SUCCESS, "update success");
            AddTranslation("en", MessageKey.MESSAGE_ADD_SUCCESS, "add success");
            AddTranslation("en", MessageKey.MESSAGE_DELETE_SUCCESS, "delete success");
            AddTranslation("en", MessageKey.MESSAGE_SAVE_SUCCESS, "save success");
            AddTranslation("en", MessageKey.MESSAGE_BLOCK_USER, "Thank you for your request, we will consider your case as soon as posbile and reply the result via your email");


            // Error message
            // EN
            AddTranslation("en", ErrorMessageKey.ERROR_REWARD_BELONG_USER, "This reward had belonged to a user");
            AddTranslation("en", ErrorMessageKey.ERROR_LOGIN_FAIL, "username or password is wrong");
            AddTranslation("en", ErrorMessageKey.ERROR_EXISTED, "is already exist");
            AddTranslation("en", ErrorMessageKey.ERROR_FAIL_TO_SAVE, "database error");
            AddTranslation("en", ErrorMessageKey.ERROR_UPDATE_FAIL, "update fail");
            AddTranslation("en", ErrorMessageKey.ERROR_DELETE_FAIL, "delete fail");
            AddTranslation("en", ErrorMessageKey.ERROR_WRONG, "is wrong");
            AddTranslation("en", ErrorMessageKey.ERROR_DISSABLED_ACCOUNT, "your account has been disabled by an administrator. \n Reason: {Reason} \n If you have a problem please contact us at support@fptblog.vinhnhan.com");
            AddTranslation("en", ErrorMessageKey.ERROR_NOT_FOUND, "is not found");
            AddTranslation("en", ErrorMessageKey.ERROR_NOT_ALLOW, "not allow");
            AddTranslation("en", ErrorMessageKey.ERROR_PASSWORD_CONTAIN_CHARACTER, "should contain at least 1 uppercase, 1 lowercase, 1 number");
            AddTranslation("en", ErrorMessageKey.ERROR_PASSWORD_CONTAIN_WHITESPACE, "should not contain white space");
            AddTranslation("en", ErrorMessageKey.ERROR_OLD_PASSWORD_IS_WRONG, "old password is wrong");
            AddTranslation("en", ErrorMessageKey.FILE_TOO_LARGE, "file is too large");
            AddTranslation("en", ErrorMessageKey.FILE_WRONG_EXTENSION, "file is wrong extension");

            // VI
            AddTranslation("vi", MessageKey.MESSAGE_LOGIN_SUCCESS, "????ng nh???p th??nh c??ng");
            AddTranslation("vi", MessageKey.MESSAGE_REGISTER_SUCCESS, "????ng k?? th??nh c??ng");
            AddTranslation("vi", MessageKey.MESSAGE_LOGOUT_SUCCESS, "????ng xu???t th??nh c??ng");
            AddTranslation("vi", MessageKey.MESSAGE_UPDATE_SUCCESS, "c???p nh???t th??nh c??ng");
            AddTranslation("vi", MessageKey.MESSAGE_ADD_SUCCESS, "th??m m???i th??nh c??ng");
            AddTranslation("vi", MessageKey.MESSAGE_DELETE_SUCCESS, "x??a th??nh c??ng");



            // VI
            AddTranslation("vi", ErrorMessageKey.ERROR_LOGIN_FAIL, "username ho???c password kh??ng ????ng");
            AddTranslation("vi", ErrorMessageKey.ERROR_EXISTED, "???? t???n t???i");
            AddTranslation("vi", ErrorMessageKey.ERROR_FAIL_TO_SAVE, "l???i c?? s??? d??? li???u");
            AddTranslation("vi", ErrorMessageKey.ERROR_UPDATE_FAIL, "c???p nh???t kh??ng th??nh c??ng");
            AddTranslation("vi", ErrorMessageKey.ERROR_DELETE_FAIL, "x??a kh??ng th??nh c??ng");
            AddTranslation("vi", ErrorMessageKey.ERROR_WRONG, "kh??ng ????ng");
            AddTranslation("vi", ErrorMessageKey.ERROR_DISSABLED_ACCOUNT, "t??i kho???n c???a b???n ???? b??? v?? hi???u h??a, n???u b???n c?? v???n ????? mu???n ph???n h???i, xin h??y li??n l???c");
            AddTranslation("vi", ErrorMessageKey.ERROR_NOT_FOUND, "kh??ng t??m th???y");
            AddTranslation("vi", ErrorMessageKey.ERROR_NOT_ALLOW, "kh??ng c?? quy???n");
            AddTranslation("vi", ErrorMessageKey.ERROR_PASSWORD_CONTAIN_CHARACTER, "ph???i c?? ??t nh???t 1 k?? t??? hoa, 1 k?? t??? th?????ng, 1 s???");
            AddTranslation("vi", ErrorMessageKey.ERROR_PASSWORD_CONTAIN_WHITESPACE, "kh??ng ???????c ch???a kho???ng tr???ng");
            AddTranslation("vi", ErrorMessageKey.ERROR_OLD_PASSWORD_IS_WRONG, "m???t kh???u c?? kh??ng ????ng");

            // Don't touch me please
            AddTranslation("en", "EmailValidator", "is not a valid email address");
            AddTranslation("en", "GreaterThanOrEqualValidator", "should be greater than or equal to {ComparisonValue}");
            AddTranslation("en", "GreaterThanValidator", "should be greater than {ComparisonValue}");
            AddTranslation("en", "LengthValidator", "should be between {MinLength} and {MaxLength} characters");
            AddTranslation("en", "MinimumLengthValidator", "should be at least {MinLength} characters");
            AddTranslation("en", "MaximumLengthValidator", "should be {MaxLength} characters or fewer");
            AddTranslation("en", "LessThanOrEqualValidator", "should be less than or equal to {ComparisonValue}");
            AddTranslation("en", "LessThanValidator", "should be less than {ComparisonValue}");
            AddTranslation("en", "NotEmptyValidator", "should not be empty");
            AddTranslation("en", "NotEqualValidator", "should not be equal to {ComparisonValue}");
            AddTranslation("en", "NotNullValidator", "should not be empty");
            AddTranslation("en", "RegularExpressionValidator", "is not in the correct format");
            AddTranslation("en", "EqualValidator", "should be equal to {ComparisonValue}");
            AddTranslation("en", "ExactLengthValidator", "should be equal to {ComparisonValue}");
            AddTranslation("en", "InclusiveBetweenValidator", "should be between {From} and {To}");
            AddTranslation("en", "ExclusiveBetweenValidator", "should be between {From} and {To} (exclusive)");
            AddTranslation("en", "NullValidator", "must be empty");
            AddTranslation("en", "EmptyValidator", "must be empty");
            AddTranslation("en", "EnumValidator", "has a range of values which does not include {PropertyValue}");


            AddTranslation("vi", "EmailValidator", "kh??ng h???p l???");
            AddTranslation("vi", "GreaterThanOrEqualValidator", "ph???i l???n h??n ho???c b???ng v???i {ComparisonValue}");
            AddTranslation("vi", "GreaterThanValidator", "ph???i l???n h??n {ComparisonValue}");
            AddTranslation("vi", "LengthValidator", "ph???i n???m trong kho???ng t??? {MinLength} ?????n {MaxLength} k?? t???");
            AddTranslation("vi", "MinimumLengthValidator", "t???i thi???u {MinLength} k?? t???");
            AddTranslation("vi", "MaximumLengthValidator", "t???i ??a  {MaxLength} k?? t???");
            AddTranslation("vi", "LessThanOrEqualValidator", "ph???i nh??? h??n ho???c b???ng {ComparisonValue}");
            AddTranslation("vi", "LessThanValidator", "ph???i nh??? h??n {ComparisonValue}");
            AddTranslation("vi", "NotEmptyValidator", "kh??ng ???????c r???ng");
            AddTranslation("vi", "NotEqualValidator", "kh??ng ???????c b???ng {ComparisonValue}");
            AddTranslation("vi", "NotNullValidator", "ph???i c?? gi?? tr???");
            AddTranslation("vi", "RegularExpressionValidator", "kh??ng ????ng ?????nh d???ng");
            AddTranslation("vi", "EqualValidator", "ph???i b???ng {ComparisonValue}");
            AddTranslation("vi", "ExactLengthValidator", "ph???i c?? ????? d??i ch??nh x??c {MaxLength} k?? t???");
            AddTranslation("vi", "InclusiveBetweenValidator", "ph???i c?? gi?? tr??? trong kho???ng t??? {From} ?????n {To}");
            AddTranslation("vi", "ExclusiveBetweenValidator", "ph???i c?? gi?? tr??? trong kho???ng gi???a {From} v?? {To}");
            AddTranslation("vi", "EmptyValidator", "ph???i l?? r???ng");
            AddTranslation("vi", "NullValidator", "kh??ng ???????c ch???a gi?? tr???");
            AddTranslation("vi", "EnumValidator", "n???m trong m???t t???p gi?? tr??? kh??ng bao g???m {PropertyValue}");
        }
    }
}
