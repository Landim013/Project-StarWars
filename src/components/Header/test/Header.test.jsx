/* eslint-disable no-undef */

import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Header from "..";

jest.mock("../../../assets/icons/user.svg", () => "userIcon");
jest.mock("../../../assets/images/star-wars-4.svg", () => "logoImage");

jest.mock("../../../contexts/authContext", () => ({
  useAuth: () => ({
    logout: jest.fn(),
    deleteAccount: jest.fn(),
  }),
}));

const theme = {
  colors: {
    yellow: "#ffd700",
  },
};

const renderWithTheme = (component) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

describe("Header", () => {
  test("renderiza logo e texto", () => {
    renderWithTheme(<Header />);

    expect(screen.getByAltText("Star Wars")).toBeInTheDocument();
    expect(
      screen.getByText("Que a força esteja com você...")
    ).toBeInTheDocument();
  });

  test("abre menu ao clicar no ícone do usuário", () => {
    renderWithTheme(<Header />);

    const iconButton = screen.getByRole("button");
    fireEvent.click(iconButton);

    expect(screen.getByText("Sair")).toBeInTheDocument();
    expect(screen.getByText("Excluir conta")).toBeInTheDocument();
  });

  test("executa logout ao clicar em 'Sair'", () => {
    const mockLogout = jest.fn();
    const mockDelete = jest.fn();

    jest
      .spyOn(require("../../../contexts/authContext"), "useAuth")
      .mockReturnValue({
        logout: mockLogout,
        deleteAccount: mockDelete,
      });

    renderWithTheme(<Header />);
    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("Sair"));

    expect(mockLogout).toHaveBeenCalled();
  });

  test("executa deleteAccount ao clicar em 'Excluir conta'", () => {
    const mockLogout = jest.fn();
    const mockDelete = jest.fn();

    jest
      .spyOn(require("../../../contexts/authContext"), "useAuth")
      .mockReturnValue({
        logout: mockLogout,
        deleteAccount: mockDelete,
      });

    renderWithTheme(<Header />);
    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("Excluir conta"));

    expect(mockDelete).toHaveBeenCalled();
  });
});
