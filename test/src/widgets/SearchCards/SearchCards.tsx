import { useAppSelector } from "@app/store/store";
import "./SearchCards.scss";
import { useEffect, useState } from "react";

interface SearchCardsProps {
  value: string;
}

const SearchCards = ({ value }: SearchCardsProps) => {
  const cards = useAppSelector((state) => state.search.items);

  const [debouncedValue, setDebouncedValue] = useState("");

  // Дебаунс: обновляем значение через 300 мс после последнего ввода
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value.toLowerCase());
    }, 300); // здесь нормальная задержка

    return () => clearTimeout(handler);
  }, [value]);

  const filteredCards = cards.filter((el) =>
    el.name.toLowerCase().includes(debouncedValue)
  );

  return (
    <div className="searchs">
      <ul className="searchs__list">
        {filteredCards.map((card, idx) => (
          <li key={idx} className="searchs__item">
            <img className="searchs__image" src={card.image} alt={card.name} />
            <div className="searchs__info">
              <p className="searchs__name">{card.name}</p>
              <div className="searchs__price card__price">
                {card.price}₽
                {card.oldPrice && (
                  <span className="card__price-old card__price-old__searchs">
                    {card.oldPrice}₽
                  </span>
                )}
                {card.sale && (
                  <span className="card__price-sale card__price-sale__searchs">
                    {card.sale}%
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchCards;
