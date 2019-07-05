import styled, { css } from "styled-components";
import WithTemplate from "../components/Template";
import Splash from "../components/ui/Splash";
import Button from "../components/ui/Button";

const HomeContent = styled.section`
  font-family: "Russo One", sans-serif;
  margin-top: 20px;
  text-align: center;
`;

const HomeTitle = styled.div`
  margin: 15px 0;
  font-size: 42px;
  line-height: 40px;
  color: #fff;
`;

const SubTitleHome = styled.span`
  color: #f5deb3;
`;

const customStyleButton = css`
  && {
    background-color: white;
  }
`;

const ButtonsHome = styled.div``;

export default () => {
  return (
    <WithTemplate isHome={true}>
      <HomeContent>
        <img
          src="https://estudiantes2020.sfo2.digitaloceanspaces.com/logo-app_128x128.png"
          alt="Logo E2020"
        />
        <HomeTitle>
          SE PARTE <br />
          <SubTitleHome>
            DEL NUEVO <br />
            ESTUDIANTES
          </SubTitleHome>
        </HomeTitle>
        <Button>UNITE</Button>
        <ButtonsHome>
          <Button customStyle={customStyleButton} href="/projects">
            VER PROYECTOS
          </Button>
          <Button customStyle={customStyleButton}>ESCRIBINOS</Button>
        </ButtonsHome>
      </HomeContent>
      <Splash />
    </WithTemplate>
  );
};
