import Head from "next/head";
import { Typography, Box } from "@material-ui/core";
import WithTemplate from "../../components/Template";
import Article from "../../components/Article";
import PROJECTS from "../../resources/projects";
import { ContentFlex } from "./projects.styled";

import dynamic from "next/dynamic";

const DynamicProject = dynamic(() => import("./project"), {
  ssr: false,
  loading: () => <p>...</p>
});

export default () => (
  <WithTemplate>
    <Head>
      <title>Estudiantes 2020 || Proyectos</title>
    </Head>
    <Typography variant="overline" component="h1">
      <Box textAlign="center" fontSize={16}>
        Proyectos
      </Box>
    </Typography>
    <ContentFlex>
      {PROJECTS.map(project => {
        return <Article content={project} />;
      })}
      <DynamicProject />
    </ContentFlex>
  </WithTemplate>
);
