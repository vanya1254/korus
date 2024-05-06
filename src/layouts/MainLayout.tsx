import React from "react";

type MainLayoutPropsT = {
  children?: JSX.Element[] | JSX.Element | React.ReactNode | React.ReactNode[];
};

export const MainLayout: React.FC<MainLayoutPropsT> = ({ children }) => {
  return <main>{children}</main>;
};
