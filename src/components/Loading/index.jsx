import logo from "../../assets/images/star-wars-4.svg";
import * as S from "./styles";
function Loading() {
  return (
    <S.ContainerLoading>
      <S.Logo src={logo} alt="Carregando" />
      <S.Title>Carregando...</S.Title>
    </S.ContainerLoading>
  );
}

export default Loading;
