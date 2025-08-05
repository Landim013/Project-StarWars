import { useEffect, useState } from "react";
import { getSwapiCategory } from "../../api";
import DataTable from "../../components/CustomTable";
import * as S from "./styles";

// people, planets,starShips,vehicles,species,films
function Home() {
  const [data, setData] = useState([]);

  const columns = [
    { title: "Nome", size: "200px", render: (item) => item.name },
    { title: "Clima", size: "150px", render: (item) => item.climate },
    { title: "População", size: "150px", render: (item) => item.population },
    { title: "Terreno", size: "150px", render: (item) => item.terrain },
  ];

  useEffect(() => {
    async function loadData() {
      const results = await getSwapiCategory("planets");
      setData(results);
      console.log(results);
    }
    loadData();
  }, []);
  return (
    <S.Container>
      <S.CotentTable>
        <DataTable
          columns={columns}
          data={data}
          textColor={"gelo"}
          bordeColor={"red"}
        />
      </S.CotentTable>
    </S.Container>
  );
}

export default Home;
