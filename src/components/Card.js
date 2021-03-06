export default class Card {
  constructor({
    data,
    selector,
    handleCardClick,
    handleClickToTrashIcon,
    toggleLike,
    userId,
  }) {
    this._cardData = data;
    this._likes = data.likes;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleClickToTrashIcon = handleClickToTrashIcon;
    this._toggleLike = toggleLike;
    this._userId = userId;
  }

  generate() {
    this._element = this._getElement();
    this._likeBtn = this._element.querySelector(".card__like");
    this._cardImage = this._element.querySelector(".card__image");
    this._cardTitle = this._element.querySelector(".card__title");
    this._deleteCardBtn = this._element.querySelector(".card__trash-icon");
    this._cardLikeCounter = this._element.querySelector(".card__like-counter");

    this._cardImage.src = this._cardData.link;
    this._cardImage.alt = this._cardData.name;
    this._cardTitle.textContent = this._cardData.name;

    this._showTrashIcon();
    this._updateLikesView();
    this._setEventListeners();

    return this._element;
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  updateLikes(likesData) {
    this._likes = likesData.likes;
    this._updateLikesView();
  }

  getCardId() {
    return this._cardData._id;
  }

  isLiked() {
    return this._likes.some((like) => {
      return Object.is(like._id, this._userId);
    });
  }

  _showTrashIcon() {
    if (this._isOurCard()) {
      this._deleteCardBtn.classList.add("card__trash-icon_visible");
    }
  }

  _isOurCard() {
    return Object.is(this._cardData.owner._id, this._userId);
  }

  _getElement() {
    const templateCard = document.querySelector(this._selector);
    return templateCard.content.querySelector(".card-element").cloneNode(true);
  }

  _updateLikesView() {
    this._cardLikeCounter.textContent = this._likes.length;

    if (this.isLiked()) {
      this._likeBtn.classList.add("card__like_active");
    } else {
      this._likeBtn.classList.remove("card__like_active");
    }
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick({
        image: this._cardImage.src,
        title: this._cardTitle.textContent,
      });
    });

    this._likeBtn.addEventListener("click", () => {
      this._toggleLike(this);
    });

    this._deleteCardBtn.addEventListener("click", () => {
      this._handleClickToTrashIcon(this);
    });
  }
}
