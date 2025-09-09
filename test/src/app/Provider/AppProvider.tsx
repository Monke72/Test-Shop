import { store } from "@app/store/store";
import React from "react";
import { Provider } from "react-redux";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;
