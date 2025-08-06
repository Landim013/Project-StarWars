import { useEffect, useState } from "react";
import { getSwapiCategory } from "../../api";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import DataTable from "../../components/CustomTable";
import Loading from "../../components/Loading";
import { columns } from "./conts";
import * as S from "./styles";

function Home() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("people");
  const [colorHeader, setColorHeader] = useState("red");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function loadData() {
      setLoading(true);
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
      } else if (category === "species") {
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
              homeworld: homeworldName,
            };
          })
        );

        setData(updatedResults);
      } else {
        setData(results);
      }
      setLoading(false);
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
  if (loading) return <Loading />;
  return (
    <S.Container>
      <S.CotentTable>
        <S.ButtonGroup>
          <CustomButton
            text="Pessoas"
            fontColor={"red"}
            background="none"
            width="100%"
            onClick={() => handleClick("people", "red")}
            active={category === "people"}
          />
          <CustomButton
            text="Planetas"
            fontColor={"orange"}
            background="none"
            width="100%"
            aria-label="Entrar"
            onClick={() => handleClick("planets", "orange")}
            active={category === "planets"}
          />
          <CustomButton
            text="Naves estelares"
            fontColor={"purple"}
            background="none"
            width="100%"
            aria-label="Entrar"
            onClick={() => handleClick("starships", "purple")}
            active={category === "starships"}
          />
          <CustomButton
            text="Especies"
            fontColor={"green"}
            background="none"
            width="100%"
            aria-label="Entrar"
            onClick={() => handleClick("species", "green")}
            active={category === "species"}
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
