import "../styles/global.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Grid, Stack, Typography } from "@mui/material";
import "../styles/theme";
import { colors, fontSizes } from "../styles/theme";
import Header from "./components/header";
import Sobre from "./components/Sobre";

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
          <Grid item md={6}>
            <Typography
              sx={{ color: colors.subtitulos, fontSize: fontSizes["4xl"] }}
            >
              Saudações, meu nome é
            </Typography>
            <Typography
              sx={{
                color: colors.titulos,
                fontSize: fontSizes["6xl"],
                fontWeight: 700,
              }}
            >
              Ronald Joaquim Silveira.
            </Typography>
            <Typography
              sx={{
                color: colors.titulos,
                fontSize: fontSizes["4xl"],
                fontWeight: 600,
              }}
            >
              Sou um desenvolvedor web
              <Typography
                sx={{
                  color: colors.titulos,
                  fontSize: fontSizes["2xl"],
                  width: "50%",
                }}
              >
                No momento, estou dedicado a criar produtos acessíveis e
                orientado ao usuário na Alumisoft
              </Typography>
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
    </>
  );
}
