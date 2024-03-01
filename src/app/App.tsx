import React, { useState } from "react";
import { Login } from "../common/components/Login/Login";
import s from "../app/App.module.scss";
import { Home } from "../common/components/Page/Home/Home";
import { Menu } from "../common/components/Page/Menu/Menu";

function App() {
  const [visible, setVisible] = useState(true);

  const onChangeVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={s.app}>
      <div className={s.appWrapper}>
        <div className={s.content}>{visible ? <Home /> : <Menu />}</div>
        <Login onChangeVisible={onChangeVisible} />
      </div>
    </div>
  );
};

export default App;
