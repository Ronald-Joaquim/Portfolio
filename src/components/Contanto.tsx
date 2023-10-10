import { Button, Grid, Typography } from "@mui/material";
import { colors, fontSizes } from "../../styles/theme";
import styled from "styled-components";

export default function Contato() {
  return (
    <Grid
      mt={25}
      container
      sx={{ height: "100%" }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid item md={6}>
        <Grid container>
          <Grid item md={12}>
            <Grid
              item
              md={12}
              display={"flex"}
              sx={{ gap: 1 }}
              justifyContent={"center"}
            >
              <Typography
                sx={{
                  color: colors.subtitulos,
                  fontSize: fontSizes["4xl"],
                  fontWeight: 700,
                }}
              >
                04.
              </Typography>
              <Typography
                sx={{
                  color: colors.titulos,
                  fontSize: fontSizes["4xl"],
                  fontWeight: 700,
                }}
              >
                CONTATO
              </Typography>
            </Grid>
          </Grid>
          <Grid item md={12} mt={4}>
            <Grid item md={12} display={"flex"} justifyContent={"center"}>
              <Typography
                sx={{
                  color: colors.titulos,
                  fontSize: fontSizes["4xl"],
                  fontWeight: 700,
                }}
              >
                Entrar em contato
              </Typography>
            </Grid>
          </Grid>
          <Grid item md={12}>
            <Grid item md={12} display={"flex"} justifyContent={"center"}>
              <Typography
                sx={{
                  color: colors.titulos,
                  fontSize: fontSizes.md,
                  textAlign: "center",
                  width: "35rem",
                }}
              >
                Embora eu não esteja procurando novas oportunidades no momento,
                pode me enviar uma mensagem a vontade! Se você tem alguma
                pergunta ou apenas quer dizer um oi, entrarei em contato com
                você assim que ver sua mensagem
              </Typography>
            </Grid>
          </Grid>
          <Grid container display={"flex"} justifyContent={"center"} mt={4}>
            <ButtonStyled variant="outlined" sx={{ padding: "10px" }}>
              <Typography
                sx={{
                  color: colors.titulos,
                  fontSize: fontSizes.md,
                }}
              >
                Say Hello!
              </Typography>
            </ButtonStyled>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const ButtonStyled = styled(Button)`
  height: 60px;
  width: 140px;
  padding: 10px;
  border: 2px solid rgb(75, 0, 130) !important;
  color: rgb(75, 0, 130) !important;
  background-color: transparent !important;

  :hover {
    color: rgb(75, 0, 130) !important;
  }
`;
