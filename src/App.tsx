import React from "react";

import { Home } from "./pages/Home";

import { Header } from "./components/Header";

import "./App.scss";

const App: React.FC = () => {
  return (
    <>
      <Header
        title={"Сборник рецептов из разных стран мира"}
        hasBackBtn={false}
      />
      <div className="App">
        <Home />
      </div>
    </>
  );
};

export default App;
