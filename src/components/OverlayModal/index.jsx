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

        <S.Logo src={logo} alt="Logo Star Wars" />
      </S.ModalContainer>
    </S.ContainerOverlay>
  );
}

export default OverlayModal;
