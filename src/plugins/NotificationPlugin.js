export default class NotificationPlugin {
  constructor() {
    this._hasPermission = false;

    this._requestPermission();

  }

  _requestPermission() {
    if (Notification.permission === "granted") {
      this._hasPermission = true;
      return;
    }
    // Otherwise, we need to ask the user for permission
    if (Notification.permission !== "denied") {
      Notification.requestPermission((permission) => {
        if (permission === "granted") {
          this._hasPermission = true;
        }
      });
    }
  }


  notify(text, title, opt) {
    opt = opt || {
      body: title,
      icon: '/static/img/launcher-icon.png'
    };
    new Notification(text, opt);

  }

  static install(_Vue, opt) {
    _Vue.prototype.$notification = new NotificationPlugin();
  }
}
