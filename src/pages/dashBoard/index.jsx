import { useEffect, useState } from "react";
import { getSwapiCategory } from "../../api";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import DataTable from "../../components/CustomTable";
import { columns } from "./conts";
import * as S from "./styles";

// people, planets,starShips,vehicles,species,films
function Home() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("people");
  const [colorHeader, setColorHeader] = useState("red");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function loadData() {
      const results = await getSwapiCategory(category);

      if (category === "people") {
        const updatedResults = await Promise.all(
          results.map(async (item) => {
            const speciesUrl = item.species?.[0];
            let speciesName = "Humano";
            if (speciesUrl) {
              try {
                const res = await fetch(speciesUrl);
                const json = await res.json();
                speciesName = json.name || "-";
              } catch {
                speciesName = "Erro";
              }
            }

            const homeworldUrl = item.homeworld;
            let homeworldName = "Desconhecido";
            if (homeworldUrl) {
              try {
                const res = await fetch(homeworldUrl);
                const json = await res.json();
                homeworldName = json.name || "-";
              } catch {
                homeworldName = "Erro";
              }
            }

            return {
              ...item,
              speciesName,
              homeworldName,
            };
          })
        );

        setData(updatedResults);
      }

      // 🌍 Novo bloco para category === "species"
      else if (category === "species") {
        const updatedResults = await Promise.all(
          results.map(async (item) => {
            const homeworldUrl = item.homeworld;
            let homeworldName = "-";

            if (homeworldUrl) {
              try {
                const res = await fetch(homeworldUrl);
                const json = await res.json();
                homeworldName = json.name || "-";
              } catch {
                homeworldName = "Erro";
              }
            }

            return {
              ...item,
              homeworld: homeworldName, // sobrescreve a URL pelo nome
            };
          })
        );

        setData(updatedResults);
      } else {
        setData(results);
      }
    }

    loadData();
  }, [category]);

  function handleClick(category, color) {
    setCategory(category);
    setColorHeader(color);
  }
  const filteredData = data.filter((item) => {
    return Object.values(item).some((value) =>
      String(value || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  });

  return (
    <S.Container>
      <S.CotentTable>
        <S.ButtonGroup>
          <CustomButton
            text="people"
            fontColor={"red"}
            background="none"
            width="100%"
            aria-label="Entrar"
            onClick={() => handleClick("people", "red")}
          />
          <CustomButton
            text="planets"
            fontColor={"orange"}
            background="none"
            width="100%"
            aria-label="Entrar"
            onClick={() => handleClick("planets", "orange")}
          />
          <CustomButton
            text="starShips"
            fontColor={"blue"}
            background="none"
            width="100%"
            aria-label="Entrar"
            onClick={() => handleClick("starships", "blue")}
          />
          <CustomButton
            text="species"
            fontColor={"green"}
            background="none"
            width="100%"
            aria-label="Entrar"
            onClick={() => handleClick("species", "green")}
          />
        </S.ButtonGroup>
        <CustomInput
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <DataTable
          columns={columns[category]}
          data={filteredData}
          textColor={colorHeader}
          bordeColor={"red"}
        />
      </S.CotentTable>
    </S.Container>
  );
}

export default Home;
