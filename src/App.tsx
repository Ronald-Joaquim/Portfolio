import "../styles/global.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Grid, Stack, Typography } from "@mui/material";
import "../styles/theme";
import { colors, fontSizes } from "../styles/theme";
import Sobre from "./components/Sobre";
import Experiencia from "./components/Experiencia";
import Header from "./components/Header";
import Projetos from "./components/Projetos";
import Contato from "./components/Contanto";

export default function Home() {
  return (
    <>
      <Stack
        sx={{
          backgroundColor: colors.fundo,
          width: "100%",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Header />
        <Grid
          container
          sx={{ height: "100%" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item md={6} textAlign={"center"}>
            <Typography
              sx={{
                color: colors.subtitulos,
                fontSize: fontSizes["4xl"],
                fontWeight: 700,
              }}
            >
              Opa pessoal, tudo Joia?
            </Typography>
            <Typography
              sx={{
                color: colors.titulos,
                fontSize: fontSizes["4xl"],
                fontWeight: 600,
              }}
            >
              Sou um desenvolvedor web
            </Typography>
            <Typography
              sx={{
                color: colors.titulos,
                fontSize: fontSizes["2xl"],
              }}
            >
              No momento, estou dedicado a criar produtos
              <br /> acessíveis e orientado ao usuário na Alumisoft
            </Typography>
          </Grid>
        </Grid>
      </Stack>
      <Stack
        sx={{
          backgroundColor: colors.fundo,
          width: "100%",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Grid mt={10} container>
          <Sobre />
        </Grid>
      </Stack>
      <Stack
        sx={{
          backgroundColor: colors.fundo,
          width: "100%",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Grid container>
          <Experiencia />
        </Grid>
      </Stack>
      <Stack
        sx={{
          backgroundColor: colors.fundo,
          width: "100%",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Grid container>
          <Projetos />
        </Grid>
      </Stack>
      <Stack
        sx={{
          backgroundColor: colors.fundo,
          width: "100%",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Grid container>
          <Contato />
        </Grid>
      </Stack>
    </>
  );
}
