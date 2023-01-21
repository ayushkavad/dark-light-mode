import { useSelector, useDispatch } from "react-redux";

import Button from "./component/button/button.componenet";

import { setCurrentMode } from "./store/mode/mode.action";
import { modeSelector } from "./store/mode/mode.selector";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  const currentMode = useSelector(modeSelector);

  const onClickHandler = () => {
    dispatch(setCurrentMode(!currentMode));
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
