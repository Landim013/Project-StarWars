import * as S from "./styles";

function CustomButton({
  text,
  onClick,
  disabled = false,
  background,
  fontColor,
  width,
  height,
  border,
}) {
  return (
    <S.ContainerButton
      $width={width}
      $height={height}
      disabled={disabled}
      $background={background}
      $fontColor={fontColor}
      onClick={onClick}
      $border={border}
    >
      {text}
    </S.ContainerButton>
  );
}

export default CustomButton;
