import Header from "@widgets/Header/Header";
import "./HomePage.scss";
import Search from "@widgets/Search/Search";
import Banner from "@widgets/Banner/Banner";
import Choise from "@widgets/Choise/Choise";
import Cards from "@widgets/Cards/Cards";
import Dev from "@widgets/Dev/Dev";
import Nav from "@widgets/Nav/Nav";
import { useEffect, useState } from "react";
import Common from "@widgets/Common/Common";
import SearchCards from "@widgets/SearchCards/SearchCards";

import { fetchItems } from "@entities/getData/slice";
import { useAppDispatch } from "@app/store/store";

const HomePage = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <section className="home container">
      <Header
        setValue={setValue}
        setOpenSearch={setOpenSearch}
        openSearch={openSearch}
      />
      <Search value={value} setValue={setValue} setOpenSearch={setOpenSearch} />
      {!openSearch && (
        <>
          <Banner />
          <Choise />
          <Cards />
        </>
      )}
      {openSearch && value === "" && <Common setValue={setValue} />}
      {openSearch && value !== "" && <SearchCards value={value} />}
      <Dev />
      <Nav />
    </section>
  );
};

export default HomePage;
