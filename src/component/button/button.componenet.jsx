import { useContext } from "react";

import Moon from "../../assets/moon.svg";
import Sun from "../../assets/sun.svg";
import Logo from "../logo/logo.component";

import { ToggleButton } from "./button.styles.jsx";
import { ModeContaxt } from "../../contaxt/mode.contaxt";

import "./button.styles.jsx";

const Button = () => {
  const { currentMode } = useContext(ModeContaxt);

  return (
    <ToggleButton currentMode={currentMode}>
      {currentMode ? <Logo logo={Sun} /> : <Logo logo={Moon} />}
    </ToggleButton>
  );
};

export default Button;
