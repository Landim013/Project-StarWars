export const columns = {
  people: [
    {
      title: "Nome",

      sortKey: "name",
      render: (item) => item.name,
    },
    { title: "Especies", render: (item) => item.speciesName },
    { title: "Altura", render: (item) => item.height },
    { title: "Gênero", render: (item) => item.gender },
  ],
  planets: [
    {
      title: "Nome",

      sortKey: "name",
      render: (item) => item.name,
    },
    { title: "Clima", render: (item) => item.climate },
    { title: "População", render: (item) => item.population },
    { title: "Terreno", render: (item) => item.terrain },
  ],
  starships: [
    {
      title: "Nome",

      sortKey: "name",
      render: (item) => item.name,
    },
    {
      title: "Modelo",
      size: "200px",
      render: (item) => item.model,
    },
    {
      title: "Passageiros",
      size: "10px",
      render: (item) => item.passengers,
    },
    {
      title: "Classe de nave estelar",

      render: (item) => item.starship_class,
    },
  ],
  species: [
    {
      title: "Nome",

      sortKey: "name",
      render: (item) => item.name,
    },
    {
      title: "Classificação",

      render: (item) => item.classification,
    },
    { title: "Designação", render: (item) => item.designation },
    { title: "Planeta", render: (item) => item.homeworld },
  ],
};
