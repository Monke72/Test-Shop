import closeIcon from "@icons/exit-icon.svg";
import tgIcon from "@icons/icon_tg.png";
import openIcon from "@icons/open-icon.svg";
import moreIcon from "@icons/more-icon.svg";

import "./Header.scss";

interface IHeaderProps {
  openSearch: boolean;
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ openSearch, setOpenSearch, setValue }: IHeaderProps) => {
  const handleClose = () => {
    setOpenSearch(false);
    setValue("");
  };

  return (
    <header className="header">
      {!openSearch && (
        <button className="header__close">
          <span>
            <img src={closeIcon} alt="close" />
          </span>
          Закрыть
        </button>
      )}
      {openSearch && (
        <button className="header__close" onClick={handleClose}>
          <span>
            <img src={closeIcon} alt="close" />
          </span>
          Выход
        </button>
      )}
      <a className="header__link" href="">
        <span>
          <img src={tgIcon} alt="tg open" />
        </span>
        наш тг канал
      </a>
      <div className="header__more">
        <button className="header__more-open">
          <img src={openIcon} alt="open more info" />
        </button>
        <button className="header__more-info">
          <img src={moreIcon} alt="info" />
        </button>
      </div>
    </header>
  );
};

export default Header;
