import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import OverlayModal from "../index";

jest.mock("../../../assets/images/star-wars-4.svg", () => "svg-mock");

describe("OverlayModal", () => {
  it("renderiza corretamente quando aberto", () => {
    const handleClose = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <OverlayModal
          isOpen={true}
          onClose={handleClose}
          title="Sucesso"
          description="Envio realizado"
          colorButton="green"
        />
      </ThemeProvider>
    );

    expect(screen.getByText("Sucesso")).toBeInTheDocument();
    expect(screen.getByText("Envio realizado")).toBeInTheDocument();
    expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument();
  });

  it("não renderiza quando está fechado", () => {
    render(
      <ThemeProvider theme={theme}>
        <OverlayModal
          isOpen={false}
          onClose={() => {}}
          title="Deveria estar invisível"
          description="Não deve aparecer"
          colorButton="green"
        />
      </ThemeProvider>
    );

    expect(
      screen.queryByText("Deveria estar invisível")
    ).not.toBeInTheDocument();
  });

  it("executa o onClose ao clicar no botão", () => {
    const handleClose = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <OverlayModal
          isOpen={true}
          onClose={handleClose}
          title="Teste Fechar"
          description="Clique no botão"
          colorButton="green"
        />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText("Fechar"));
    expect(handleClose).toHaveBeenCalled();
  });
});
