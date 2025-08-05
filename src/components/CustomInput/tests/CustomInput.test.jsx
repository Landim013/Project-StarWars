import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import CustomInput from "../index";

jest.mock(
  "../../../assets/icons/eye-off-svgrepo-com.svg",
  () => "EyeIconClose"
);
jest.mock(
  "../../../assets/icons/eye-show-svgrepo-com.svg",
  () => "EyeIconOpen"
);

const mockTheme = {
  colors: {
    gray: "#ccc",
    error: "#ff0000",
    primaryDark: "#222",
  },
};

const renderWithTheme = (ui) =>
  render(<ThemeProvider theme={mockTheme}>{ui}</ThemeProvider>);

describe("CustomInput", () => {
  const register = jest.fn(() => ({
    onChange: jest.fn(),
    onBlur: jest.fn(),
    name: "password",
    ref: jest.fn(),
  }));

  test("renderiza com placeholder", () => {
    renderWithTheme(
      <CustomInput
        type="text"
        placeholder="Digite seu nome"
        name="name"
        register={register}
      />
    );
    expect(screen.getByPlaceholderText("Digite seu nome")).toBeInTheDocument();
  });

  test("renderiza ícone de senha se tipo for 'password'", () => {
    renderWithTheme(
      <CustomInput
        type="password"
        placeholder="Digite sua senha"
        name="password"
        register={register}
      />
    );
    expect(screen.getByAltText("Mostrar senha")).toBeInTheDocument();
  });

  test("alterna visibilidade da senha ao clicar no botão", () => {
    renderWithTheme(
      <CustomInput
        type="password"
        placeholder="Digite sua senha"
        name="password"
        register={register}
      />
    );

    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);

    expect(screen.getByAltText("Ocultar senha")).toBeInTheDocument();
  });

  test("exibe mensagens de erro separadas", () => {
    renderWithTheme(
      <CustomInput
        type="text"
        placeholder="Erro"
        name="erro"
        register={register}
        messageError="Erro 1,Erro 2"
      />
    );

    expect(screen.getByText("🚫 Erro 1")).toBeInTheDocument();
    expect(screen.getByText("🚫 Erro 2")).toBeInTheDocument();
  });
});
