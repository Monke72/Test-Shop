import "./Card.scss";
import likeIcon from "@icons/like.svg";
import dissicon from "@icons/diss.svg";
import { useState } from "react";

export interface ICard {
  image: string;
  price: number;
  oldPrice?: number;
  name: string;
  sale?: number;
  isNew: boolean;
}

const Card = ({ image, price, oldPrice, name, sale, isNew }: ICard) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    setIsLiked((prev) => !prev);
  };
  return (
    <div className="card">
      {sale && <span className="card__sale">Sale</span>}
      <span className="card__like" onClick={handleLike}>
        {isLiked ? (
          <img className="card__image" src={likeIcon} alt="like" />
        ) : (
          <img className="card__image" src={dissicon} alt="diss" />
        )}
      </span>
      {isNew && <span className="card__new"></span>}
      <img className="card__iamge" src={image} alt="name" />
      <div className="card__price">
        {price}₽
        {oldPrice && <span className="card__price-old">{oldPrice}₽</span>}
        {sale && <span className="card__price-sale">{sale}%</span>}
      </div>
      <div className="card__info">{name}</div>
      <button className="card__btn">Выбрать</button>
    </div>
  );
};

export default Card;
