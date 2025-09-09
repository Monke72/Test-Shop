import { arrayCommon } from "@shared/arrays/common";
import "./Common.scss";

interface CommonProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Common = ({ setValue }: CommonProps) => {
  return (
    <div className="common">
      <h4 className="common__title">Часто ищут</h4>
      <ul className="common__list">
        {arrayCommon.map((el, idx) => (
          <li
            onClick={(e) => setValue(e.currentTarget.textContent)}
            className="common__item"
            key={idx}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Common;
