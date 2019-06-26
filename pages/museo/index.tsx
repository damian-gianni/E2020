import Head from "next/head";
import { Typography, Box } from "@material-ui/core";
import WithTemplate from "../../components/Template";
import dynamic from "next/dynamic";

const DynamicGaleria = dynamic(() => import("./galeria"), {
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
          Museo
        </Box>
      </Typography>
      <DynamicGaleria />
    </WithTemplate>
  );
};
