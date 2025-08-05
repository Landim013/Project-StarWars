import api from "../services/axiosConfig";

export async function getSwapiCategory(category) {
  try {
    const response = await api.get(`/${category}/`);
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar dados da SWAPI:", error);
    return [];
  }
}
