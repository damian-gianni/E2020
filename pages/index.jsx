import styled, { css, keyframes } from "styled-components";
import Article from "components/Article";
import WithTemplate from "components/Template";
import Splash from "components/ui/Splash";
import Button from "components/ui/Button";
import { useState } from "react";

const HomeContent = styled.section`
  font-family: "Russo One", sans-serif;
  margin-top: 20px;
  text-align: center;
  min-height: 86vh;
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

const WhatsappIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  margin: -5px 0 0 -45px;
`;

const ButtonsHome = styled.div``;

const CustomSection = styled.section`
  padding-top: 70px;
  min-height: 100vh;
`;

const TitleCustomSection = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;

  &:after {
    content: " ";
    display: block;
    width: 26px;
    height: 2px;
    background-color: #000;
    margin: 20px auto;
  }
`;

const ContentSection = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 20px;
`;

const Epigrafe = styled.div`
  font-family: "Russo One", sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-top: -35px;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  color: white;
  padding: 5px;
  z-index: 1;
`;

const DescriptionContent = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 25px 20px;
  ${props =>
    props.visible &&
    css`
      opacity: 1;
    `}
`;

// ToDo: CAMBIAR DE LUGAR!
const PROJECT = {
  key: 1,
  title: "Que es, de donde venimos y hacia donde Vamos",
  description: () => (
    <div style={{ lineHeight: "28px", fontSize: "18px" }}>
      <p>
        Estudiantes 2020 es un proyecto unipersonal pero fundamentalmente
        integrador. Es la manera de comenzar a Hacer Política de manera
        constructiva y hacia adelante formado sobre las bases de los valores,
        los ideales, la ética y la innovación. 2020 es un objetivo temporal, es
        un proyecto de elaboración diaria a largo plazo donde se comiencen a
        sentar las bases de un Club desafiante y emprendedor de lo que podemos
        llamar a ¨Código Abierto¨, que se nutre del esfuerzo y el aporte
        intelectual de cualquier persona que quiera participar, siendo
        incluyente pero no excluyente, aprovechando lo logrado y mejorando su
        eficiencia.
      </p>
      <p>
        La propuesta no es ¨electoralista¨, justamente la posibilidad de no
        participar significa que los esfuerzos se concentren en un objetivo
        superador no siendo este un ¨trampolin¨ para ser dirigente sino un motor
        de desarrollo para una Institución que se adapte a lo que
        indefectiblemente esta viniendo, el cambio de los paradigmas del Futbol,
        Gestion, Conducción y Comunicación.
      </p>
      <p>
        El proyecto es Integral, contemplará absolutamente todas las áreas que
        componen una Institución Deportiva, Cultural y Social, todas las ideas o
        propuestas estarán clasificadas según su Area de Desarrollo pero siempre
        estarán enlazadas entre si a raíz de sus Valores, Ideales y Desafíos.
      </p>
      <p style={{ fontWeight: "bold" }}>Nota al margen:</p>
      <p>
        Por favor opinen y critiquen todo, comparen con el pasado o con otros
        Clubes, insulten, desafíen, alienten y CREAN, de todo eso vamos a sacar
        una Gran Idea.
      </p>
    </div>
  ),
  image: {
    url: "https://estudiantes2020.sfo2.digitaloceanspaces.com/portada_web.jpg",
    alt: "Tu propuesta electoral"
  }
};
const CustomWrapper = styled.div`
  @media (min-width: 1024px) {
    width: 80%;
    margin: 0 auto;
    padding: 20px 80px;
  }
`;

export default () => {
  const [visible, setVisible] = useState(false);
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
        <Button href={"https://chat.whatsapp.com/B7NTvCylQuABs7uvbadMLj"}>
          <WhatsappIcon
            src={
              "https://estudiantes2020.sfo2.digitaloceanspaces.com/logo-whatsapp_32x32.png"
            }
            alt={"whatsapp"}
          />
          UNITE
        </Button>
        <ButtonsHome>
          <Button customStyle={customStyleButton} href="/projects">
            VER PROYECTOS
          </Button>
          <Button customStyle={customStyleButton} href="#participaciones">
            E2020 EN ACCIÓN
          </Button>
        </ButtonsHome>
      </HomeContent>
      <CustomSection id="que-es-e2020">
        <TitleCustomSection>QUE ES E2020</TitleCustomSection>
        <CustomWrapper>
          <Article
            actionClick={({ event }) => {
              event.preventDefault();
            }}
            content={PROJECT}
          />
        </CustomWrapper>
      </CustomSection>
      <CustomSection id="participaciones">
        <TitleCustomSection>PARTICIPACIONES</TitleCustomSection>
        <ContentSection onClick={() => setVisible(!visible)}>
          <Epigrafe>Muestra histórica UNTREF</Epigrafe>
          <DescriptionContent visible={visible}>
            Estudiantes 2020 participará de una muestra historíca que se llevará
            a cabo en la UNTREF durante el mes de Julio
          </DescriptionContent>
          <img
            style={{ width: "100%" }}
            src="https://estudiantes2020.sfo2.digitaloceanspaces.com/mural-muestra-UNTREF.jpeg"
          />
        </ContentSection>
        <ContentSection onClick={() => setVisible(!visible)}>
          <Epigrafe>Nueva App al servicio del socio</Epigrafe>
          <DescriptionContent visible={visible}>
            Estamos desarrollando la primer App al servicio del socio de
            Estudiantes. La misma será una PWA que podrá instalarse desde un
            navegador web a su celular.
          </DescriptionContent>
          <img
            style={{ width: "100%" }}
            src="https://estudiantes2020.sfo2.digitaloceanspaces.com/app_800x417.jpg"
          />
        </ContentSection>
      </CustomSection>

      <Splash />
    </WithTemplate>
  );
};
