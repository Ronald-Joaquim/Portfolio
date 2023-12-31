import { Typography, Grid, Button } from "@mui/material";
import { colors, fontSizes } from "../../styles/theme";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";
import Typical from "react-typical";

export default function Header() {
  return (
    <Grid
      container
      justifyContent={"center"}
      position={"fixed"}
      sx={{ backdropFilter: "blur(10px)", padding: "10px" }}
    >
      <Grid item md={6} display={"flex"} alignItems={"center"}>
        <Grid item md={3}>
          <Nome
            sx={{
              color: colors.titulos,
              fontSize: fontSizes.lg,
              fontFamily: "Pixelify Sans",
            }}
          >
            <Typical
              steps={[
                "RONALD",
                1000,
                "RONALD JOAQUIM",
                1000,
                "RONALD JOAQUIM SILVEIRA",
                1000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </Nome>
        </Grid>
        <Grid
          item
          md={9}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
          sx={{ gap: 2, textDecoration: "none" }}
        >
          <Typography
            alignItems={"center"}
            sx={{
              color: colors.subtitulos,
              fontSize: fontSizes.xl,
              display: "flex",
              fontWeight: "900",
              gap: 0.5,
            }}
          >
            1.
            <AnchorCustom href="#sobre" offset={"300"}>
              <Typography
                sx={{
                  color: colors.titulos,
                  fontSize: fontSizes.lg,
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                SOBRE MIM
              </Typography>
            </AnchorCustom>
          </Typography>
          <Typography
            alignItems={"center"}
            sx={{
              color: colors.subtitulos,
              fontSize: fontSizes.xl,
              display: "flex",
              fontWeight: "900",
              gap: 0.5,
            }}
          >
            2.
            <AnchorCustom href="#experiencia" offset={"300"}>
              <Typography
                sx={{
                  color: colors.titulos,
                  fontSize: fontSizes.lg,
                  fontWeight: "600",
                }}
              >
                EXPERIÊNCIA
              </Typography>
            </AnchorCustom>
          </Typography>
          <Typography
            alignItems={"center"}
            sx={{
              color: colors.subtitulos,
              fontSize: fontSizes.xl,
              display: "flex",
              fontWeight: "900",
              gap: 0.5,
            }}
          >
            3.
            <AnchorCustom href="#projetos" offset={"50"}>
              <Typography
                sx={{
                  color: colors.titulos,
                  fontSize: fontSizes.lg,
                  fontWeight: "600",
                }}
              >
                PROJETOS
              </Typography>
            </AnchorCustom>
          </Typography>
          <Typography
            alignItems={"center"}
            sx={{
              color: colors.subtitulos,
              fontSize: fontSizes.xl,
              display: "flex",
              fontWeight: "900",
              gap: 0.5,
            }}
          >
            4.
            <AnchorCustom href="#contato" offset={"300"}>
              <Typography
                sx={{
                  color: colors.titulos,
                  fontSize: fontSizes.lg,
                  fontWeight: "600",
                }}
              >
                CONTATO
              </Typography>
            </AnchorCustom>
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: colors.subtitulos,
              fontSize: fontSizes.md,
            }}
          >
            Resumo
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

const AnchorCustom = styled(AnchorLink)`
  text-decoration: none;
`;

const Nome = styled(Typography)`
  text-shadow: 4px 3px 5px rgba(75, 0, 130, 1);
`;
