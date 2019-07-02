import Head from "next/head";
import WithTemplate from "../../components/Template";
import Article from "../../components/Article";
import styled from "styled-components";
const PROJECT = {
  key: 1,
  title:
    "Proyecto integrador E2020. Que es, de donde venimos y hacia donde Vamos",
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
    url:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/projects/project_principal_600x450.jpg",
    alt: "Tu propuesta electoral"
  },
  pdf:
    "https://drive.google.com/file/d/1aIV66JYlW0OwgjSHx-MQ8AM_cRS0GX4E/preview"
};
const CustomWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px 80px;
`;

export default () => (
  <WithTemplate>
    <Head>
      <title>Estudiantes 2020 || Qué es E2020</title>
    </Head>
    <CustomWrapper>
      <Article
        actionClick={({ event }) => {
          event.preventDefault();
        }}
        content={PROJECT}
      />
    </CustomWrapper>
  </WithTemplate>
);
