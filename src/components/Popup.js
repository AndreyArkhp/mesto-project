export default class Popup {
  static _POPUP_OPENED = "popup_opened";
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleClose = this._handleClose.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add(Popup._POPUP_OPENED);
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove(Popup._POPUP_OPENED);
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    this._popup.addEventListener("mousedown", this._handleClose);
  }

  _handleEscClose(event) {
    if (Object.is(event.key, "Escape")) {
      this.close();
    }
  }

  _handleClose(event) {
    if (event.target.classList.contains("popup_opened")) {
      this.close();
    }
    if (event.target.classList.contains("popup__close-button")) {
      this.close();
    }
  }
}
