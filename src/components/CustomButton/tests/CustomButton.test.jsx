import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import "@testing-library/jest-dom";
import CustomButton from "../index";
const theme = {
  colors: {
    primary: "#29b329",
  },
};
describe("CustomButton", () => {
  test("renderiza com o texto passado", () => {
    render(
      <ThemeProvider theme={theme}>
        <CustomButton text="Clique aqui" />
      </ThemeProvider>
    );

    expect(screen.getByText("Clique aqui")).toBeInTheDocument();
  });

  test("chama a função onClick ao clicar", () => {
    const handleClick = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <CustomButton text="Enviar" onClick={handleClick} />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText("Enviar"));
    expect(handleClick).toHaveBeenCalled();
  });

  test("fica desabilitado quando prop `disabled` é true", () => {
    render(
      <ThemeProvider theme={theme}>
        <CustomButton text="Desabilitado" disabled />
      </ThemeProvider>
    );

    expect(screen.getByText("Desabilitado")).toBeDisabled();
  });
});
