let data = [];

function createNotificationHtml(notificationItem) {
  // ? ternary operator
  const unreadClassName = notificationItem.unread ? "unread" : "";

  if (notificationItem.type === "reaction") {
    return `<li class="${unreadClassName}">
      <strong>${notificationItem.user}</strong> ${notificationItem.notification}
      <strong>${notificationItem.details}</strong> - <em>${notificationItem.time}</em>
    </li>`;
  }

  if (notificationItem.type === "follow") {
    return `<li class="${unreadClassName}">
      <strong>${notificationItem.user}</strong> ${notificationItem.notification}
      - <em>${notificationItem.time}</em>
    </li>`;
  }

  if (notificationItem.type === "group") {
    return `<li class="${unreadClassName}">
      <strong>${notificationItem.user}</strong> ${notificationItem.notification}
      <strong>${notificationItem.details}</strong> - <em>${notificationItem.time}</em>
    </li>`;
  }

  if (notificationItem.type === "message") {
    return `<li class="${unreadClassName}">
      <strong>${notificationItem.user}</strong> ${notificationItem.notification} - <em>${notificationItem.time}</em>
      <div class="message">${notificationItem.details}</div>
    </li>`;
  }

  if (notificationItem.type === "comment") {
    return `<li class="${unreadClassName}">
      <strong>${notificationItem.user}</strong> ${notificationItem.notification} - <em>${notificationItem.time}</em>
    </li>`;
  }

  return `<li class="${unreadClassName}">
      <strong>${notificationItem.user}</strong> ${notificationItem.notification}
      <strong>${notificationItem.details}</strong> - <em>${notificationItem.time}</em>
    </li>`;
}

function renderNotifications() {
  notificationList.innerHTML = data.map((x) => createNotificationHtml(x)).join("");
}

fetch("https://dummyjson.czaylabs.com.tr/api/exam/notifications")
  .then((res) => res.json())
  .then((res) => {
    data = res;
    renderNotifications();
  });

function handleMarkBtn() {
  data.filter((x) => x.unread).forEach((x) => (x.unread = false));
  renderNotifications();
}

markBtn.addEventListener("click", handleMarkBtn);
