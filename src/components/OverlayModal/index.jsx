import logo from "../../assets/images/star-wars-4.svg";
import CustomButton from "../CustomButton";
import * as S from "./styles";

function OverlayModal({
  isOpen,
  onClose,
  title,
  description,
  colorButton,
  border,
  fontColor,
  onClick,
}) {
  if (!isOpen) return null;

  return (
    <S.ContainerOverlay>
      <S.ModalContainer>
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.ContainerButton>
            <CustomButton
              text={"Fechar"}
              background={colorButton || "transparent"}
              fontColor={fontColor}
              width="150px"
              onClick={onClick ? onClick : onClose}
              border={border}
            />
          </S.ContainerButton>
        </S.Content>
        <a
          href="https://zbra.dev/"
          target="_blank"
          aria-label="Ir para o site da ZBRA, abre em nova aba"
        >
          <S.Logo src={logo} alt="Logo ZBRA" />
        </a>
      </S.ModalContainer>
    </S.ContainerOverlay>
  );
}

export default OverlayModal;
