using System.Collections.Generic;
using FPTBlog.Src.NotificationModule.Entity;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace FPTBlog.Src.NotificationModule.Interface {
    public interface INotificationService {
        public void AddNotification(Notification notification);
        public void UpdateCategory(Notification notification);
        public void RemoveCategory(Notification notification);
        public Notification GetNotificationByNotificationId(string notificationId);
        public (List<Notification>, int) GetUserNotification(string userId);

        public (List<Notification>, int) GetUserNotificationTimeWithCount(string userId, int pageIndex, int pageSize, string search, string startDate, string endDate);

        public (List<Notification>, int) GetNotificationsLevelAndTimeWithCount(int pageIndex, int pageSize, string search, NotificationLevel searchLevel, string startDate, string endDate);
        public List<SelectListItem> GetNotificationLevelDropList();
        public List<SelectListItem> GetNotificationNegativeLevelDropList();

    }
}
