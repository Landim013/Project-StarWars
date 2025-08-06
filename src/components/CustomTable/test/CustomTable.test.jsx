import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import DataTable from "../index";
jest.mock("../../../assets/icons/lightsaberGreen.svg", () => "saberGreen");
jest.mock("../../../assets/icons/lightsaberRed.svg", () => "saberRed");
const mockTheme = {
  colors: {
    primary: "#000",
  },
};

const renderWithTheme = (ui) => {
  return render(<ThemeProvider theme={mockTheme}>{ui}</ThemeProvider>);
};

const columns = [
  {
    title: "Nome",
    sortKey: "name",
    render: (item) => item.name,
  },
  {
    title: "Idade",
    sortKey: "age",
    render: (item) => item.age,
  },
];

const data = [
  { name: "Luke", age: 23 },
  { name: "Anakin", age: 33 },
  { name: "Leia", age: 29 },
];

describe("DataTable", () => {
  test("renderiza corretamente os títulos e valores", () => {
    renderWithTheme(<DataTable columns={columns} data={data} />);

    expect(screen.getByText("Nome")).toBeInTheDocument();
    expect(screen.getByText("Idade")).toBeInTheDocument();
    expect(screen.getByText("Luke")).toBeInTheDocument();
    expect(screen.getByText("Anakin")).toBeInTheDocument();
    expect(screen.getByText("Leia")).toBeInTheDocument();
  });

  test("alterna a ordenação ao clicar no cabeçalho da coluna", () => {
    renderWithTheme(<DataTable columns={columns} data={data} />);

    const headerNome = screen.getByText("Nome");

    const firstOrder = screen
      .getAllByRole("cell")
      .map((cell) => cell.textContent);

    fireEvent.click(headerNome);
    const secondOrder = screen
      .getAllByRole("cell")
      .map((cell) => cell.textContent);

    expect(secondOrder).not.toEqual(firstOrder);
  });
});
