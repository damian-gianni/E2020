import Head from "next/head";
import { Typography, Box } from "@material-ui/core";
import WithTemplate from "../../components/Template";
import {
  MICELANEOS,
  PLANTELES,
  ESTADIOS,
  PERSONAJES,
  LOGROS
} from "./constants";
import dynamic from "next/dynamic";

const DynamicGaleria = dynamic(async () => await import("./galeria"), {
  ssr: false,
  loading: () => <p>...</p>
});

export default () => {
  return (
    <WithTemplate>
      <Head>
        <title>Estudiantes 2020 || Museo digital</title>
      </Head>
      <Typography variant="overline" component="h1">
        <Box textAlign="center" fontSize={16}>
          Micelaneos
        </Box>
      </Typography>
      <DynamicGaleria section={"micelaneos"} resources={MICELANEOS} />

      <Typography variant="overline" component="h1">
        <Box textAlign="center" fontSize={16}>
          Planteles
        </Box>
      </Typography>
      <DynamicGaleria section={"planteles"} resources={PLANTELES} />
      <Typography variant="overline" component="h1">
        <Box textAlign="center" fontSize={16}>
          Estadios
        </Box>
      </Typography>
      <DynamicGaleria section={"estadios"} resources={ESTADIOS} />
      <Typography variant="overline" component="h1">
        <Box textAlign="center" fontSize={16}>
          Personajes
        </Box>
      </Typography>
      <DynamicGaleria section={"personajes"} resources={PERSONAJES} />
      <Typography variant="overline" component="h1">
        <Box textAlign="center" fontSize={16}>
          Campeonatos y ascensos
        </Box>
      </Typography>
      <DynamicGaleria section={"campeonatos"} resources={LOGROS} />
    </WithTemplate>
  );
};
