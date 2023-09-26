import { Grid, Typography } from "@mui/material";
import { colors, fontSizes } from "../../styles/theme";
import Divider from "@mui/material/Divider";
import foto from "../assets/foto.jpeg";
import styled from "styled-components";

export default function Sobre() {
  return (
    <Grid
      container
      sx={{ height: "100%" }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid item md={4} display={"flex"} alignItems={"center"} sx={{ gap: 1 }}>
        <Grid container>
          <Grid md={12} display={"flex"} alignItems={"center"} sx={{ gap: 1 }}>
            <Grid>
              <Typography
                sx={{
                  color: colors.subtitulos,
                  fontSize: fontSizes["4xl"],
                  fontWeight: 700,
                }}
              >
                01.
              </Typography>
            </Grid>
            <Grid>
              <Typography
                sx={{
                  color: colors.titulos,
                  fontSize: fontSizes["4xl"],
                  fontWeight: 700,
                }}
              >
                SOBRE MIM
              </Typography>
            </Grid>
            <Grid item md={4.7}>
              <Divider sx={{ background: colors.subtitulos, height: "2px" }} />
            </Grid>
          </Grid>

          <Grid item md={12}>
            <Typography
              sx={{
                color: colors.titulos,
                fontSize: fontSizes["2xl"],
                width: "35rem",
              }}
            >
              Olá! Meu nome é Ronald e gosto de criar o que me vem na cabeça.
              Meu interesse na programação começou em 2021, meu primeiro contato
              com a programação foi em PHP!!! estranho né?! <br />
              Hoje sou FrontEnd 😂😂
            </Typography>
          </Grid>
          <Grid item md={12} mt={1}>
            <Typography
              sx={{
                color: colors.subtitulos,
                fontSize: fontSizes.xl,
                width: "35rem",
              }}
            >
              atualmente estou focado nos estudos de React, para que em um
              futuro muito próximo, eu comece a estudar mais a fundo sobre o
              backEnd e me tornando um desenvolvedor FullStack!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        md={2}
        sx={{ width: "100%", objectFit: "cover", objectPosition: "bottom" }}
      >
        <Imagem src={foto} height={"360"} />
      </Grid>
    </Grid>
  );
}

const Imagem = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: top;
  -webkit-box-shadow: -5px 5px 5px 0px #4b0082;
  -moz-box-shadow: -5px 5px 5px 0px #4b0082;
  box-shadow: -5px 5px 5px 0px #4b0082;
`;
