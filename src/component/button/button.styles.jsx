import styled from "styled-components";

export const ToggleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border: 4px solid #333;
  cursor: pointer;
  border: ${({ currentMode }) =>
    !currentMode && "4px solid rgb(219, 219, 219)"};
`;
