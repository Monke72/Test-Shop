import tgIcon from "@icons/little-tg.svg";
import "./Dev.scss";
const Dev = () => {
  return (
    <div className="dev">
      <p className="dev__text">Разработано на платформе Noxer</p>
      <a href="https://t.me/noxerai_bot" className="dev__link">
        <img src={tgIcon} alt="tg link" />
        <p>noxerai_bot</p>
      </a>
    </div>
  );
};

export default Dev;
