import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import saberBlue from "../../assets/images/saberBlue.png";
import imageStar from "../../assets/images/star-wars-4.svg";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import OverlayModal from "../../components/OverlayModal";
import * as S from "./styles";
function Login() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: "",
    description: "",
    colorButton: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: "onChange",
    defaultValues: { email: "" },
  });

  const onSubmit = (data) => {
    console.log("Dados enviados:", data);
    setModalOpen(true);
    setModalInfo({
      title: "Error",
      description: "E-mail ou senha incorreto!",
      colorButton: "red",
    });
    console.log(isValid, isDirty);
  };
  return (
    <S.Container>
      <S.LoginCard>
        <S.FormContent>
          <S.Logo
            src={imageStar}
            alt="Logo star wars"
            aria-label="Logo star wars"
          />
          <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              name="email"
              type="text"
              placeholder="Digite seu e-mail"
              register={register}
              disabled={false}
              messageError={errors.email?.message}
              registerOptions={{ required: "Nome obrigatório" }}
              aria-label="Nome do usuário"
            />
            <CustomInput
              name="password"
              type="password"
              placeholder="Digite sua senha"
              disabled={false}
              register={register}
              registerOptions={{
                required: "Senha é obrigatória",
              }}
              messageError={errors.password?.message}
              aria-label="Senha do usuário"
            />

            <S.ButtonGroup>
              <Link to="/register" aria-label="Ir para cadstro">
                <S.HelpText>
                  É seu primeiro acesso ou esqueceu sua senha?
                </S.HelpText>
              </Link>

              <CustomButton
                text="Entrar"
                type="submit"
                // disabled={!isDirty || !isValid}
                fontColor={"red"}
                background="none"
                width="100%"
                aria-label="Entrar"
              />
            </S.ButtonGroup>
          </S.StyledForm>
        </S.FormContent>

        <S.Saber
          src={saberBlue}
          alt="Imagem saber de luz azul"
          aria-label="Imagem saber de luz azul"
        />
      </S.LoginCard>
      <OverlayModal
        isOpen={modalOpen}
        title={modalInfo.title}
        description={modalInfo.description}
        colorButton={modalInfo.colorButton}
        onClose={() => setModalOpen(false)}
        aria-label="Modal de resultado"
      />
    </S.Container>
  );
}

export default Login;
