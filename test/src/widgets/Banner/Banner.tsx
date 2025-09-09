import dotsIcon from "@icons/dots-navigation.svg";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <span className="banner__pagination">
        <img src={dotsIcon} alt="" />
      </span>
    </div>
  );
};

export default Banner;
