import logo from "../../assets/images/zbra-brand.svg";
import * as S from "./styles";
function Loading() {
  return (
    <S.ContainerLoading>
      <S.Logo src={logo} alt="Carregando" />
      <S.Title>Enviando dados...</S.Title>
    </S.ContainerLoading>
  );
}

export default Loading;
