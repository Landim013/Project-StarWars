import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Footer from "../index";

// 🔧 Mock das imagens usadas no Footer
jest.mock("../../../assets/icons/IconFooter1.png", () => "IconFooter1");
jest.mock("../../../assets/icons/IconFooter2.png", () => "IconFooter2");
jest.mock("../../../assets/icons/IconFooter3.png", () => "IconFooter3");
jest.mock("../../../assets/icons/IconFooter4.png", () => "IconFooter4");
jest.mock("../../../assets/icons/IconFooter5.png", () => "IconFooter5");
jest.mock("../../../assets/icons/IconFooter6.png", () => "IconFooter6");
jest.mock("../../../assets/images/star-wars-4.svg", () => "StarWarsLogo");

const mockTheme = {
  colors: {
    gelo: "#ccc",
  },
};

const renderWithTheme = (ui) =>
  render(<ThemeProvider theme={mockTheme}>{ui}</ThemeProvider>);

describe("Footer", () => {
  test("renderiza todos os ícones no desktop", () => {
    // Força largura grande (desktop)
    window.innerWidth = 1024;
    window.dispatchEvent(new Event("resize"));

    renderWithTheme(<Footer />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(13); // todos os ícones
  });

  test("renderiza apenas 7 ícones no mobile", () => {
    // Força largura pequena (mobile)
    window.innerWidth = 500;
    window.dispatchEvent(new Event("resize"));

    renderWithTheme(<Footer />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(7); // apenas ícones do meio
  });
});
