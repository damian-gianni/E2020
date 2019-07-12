import Head from "next/head";
import { Typography, Box } from "@material-ui/core";
import WithTemplate from "../../components/Template";
import Article from "../../components/Article";
import PROJECTS from "../../resources/projects";
import { ContentFlex } from "./projects.styled";
import { Modal } from "../../components/ui/Modal";
import { useState } from "react";
import dynamic from "next/dynamic";

export default () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeProject, setActiveProject] = useState({
    pdf: null
  });

  const viewProject = ({ content }) => {
    setActiveProject(content);
    setOpenModal(true);
  };

  return (
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
        {PROJECTS.map(project => (
          <Article
            actionClick={viewProject}
            content={project}
            facebookConnect={true}
          />
        ))}
      </ContentFlex>
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        {activeProject.pdf !== null && (
          <iframe
            src={activeProject.pdf}
            width="100%"
            height="500"
            frameBorder="0"
          />
        )}
      </Modal>
    </WithTemplate>
  );
};
