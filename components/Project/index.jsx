import Head from "next/head";
import { Typography, Box } from "@material-ui/core";
import PROJECTS from "../../resources/projects";
import { ProjectWrapper } from "./project.styled";

export default () => {
  const slug = window.params.get("slug");
  const project = PROJECTS.find(p => p.slug === slug);
  return (
    <>
      <Head>
        <title>Estudiantes 2020 || {project.title}</title>
      </Head>
      <Typography variant="overline" component="h1">
        <Box textAlign="center" fontSize={16}>
          {project.title}
        </Box>
      </Typography>
      <ProjectWrapper src={project.pdf} frameBorder="0" />
    </>
  );
};
