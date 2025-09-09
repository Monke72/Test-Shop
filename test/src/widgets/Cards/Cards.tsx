import Card from "@shared/ui/Card/Card";
import "./Cards.scss";
import { useAppSelector } from "@app/store/store";

const Cards = () => {
  const loading = useAppSelector((state) => state.search.loading);
  const cards = useAppSelector((state) => state.search.items).slice(0, 6);

  return (
    <div className="cards">
      <ul className="cards__list">
        {loading &&
          Array.from({ length: 6 }).map((el, idx) => (
            <li key={idx} className="fake__card"></li>
          ))}
        {!loading && cards.map((card, idx) => <Card key={idx} {...card} />)}
      </ul>
    </div>
  );
};

export default Cards;
