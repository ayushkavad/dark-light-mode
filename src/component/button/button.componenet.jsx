import { useSelector } from "react-redux";

import Moon from "../../assets/moon.svg";
import Sun from "../../assets/sun.svg";
import Logo from "../logo/logo.component";

import { ToggleButton } from "./button.styles.jsx";
import { modeSelector } from "../../store/mode/mode.selector";

import "./button.styles.jsx";

const Button = () => {
  const currentMode = useSelector(modeSelector);

  return (
    <ToggleButton currentMode={currentMode}>
      {currentMode ? <Logo logo={Sun} /> : <Logo logo={Moon} />}
    </ToggleButton>
  );
};

export default Button;
