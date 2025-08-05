import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Loading from ".";
import { theme } from "../../styles/theme";
jest.mock("../../assets/images/zbra-brand.svg", () => "svg-mock");

describe("Loading", () => {
  it("renderiza corretamente", () => {
    render(
      <ThemeProvider theme={theme}>
        <Loading />
      </ThemeProvider>
    );
    expect(screen.getByText("Enviando dados...")).toBeInTheDocument();
    expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument();
  });
});
