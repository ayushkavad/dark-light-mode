import { useContext } from "react";
import Button from "./component/button/button.componenet";
import { ModeContaxt } from "./contaxt/mode.contaxt";

import "./App.scss";

const App = () => {
  const { currentMode, setCurrentMode } = useContext(ModeContaxt);

  const onClickHandler = () => {
    setCurrentMode(!currentMode);
  };

  return (
    <div className={`app ${currentMode && "light"}`}>
      <div onClick={onClickHandler}>
        <Button clickBtn={currentMode} />
      </div>
      <h1 className="app__title">Hi I'm Ayush Kavad.</h1>
    </div>
  );
};

export default App;
