import { Typography, Grid, Button } from "@mui/material";
import { colors, fontSizes } from "../../styles/theme";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";

export default function Header() {
  return (
    <Grid
      container
      justifyContent={"center"}
      position={"fixed"}
      sx={{ backdropFilter: "blur(10px)", padding: "10px" }}
    >
      <Grid item md={6} display={"flex"} alignItems={"center"}>
        <Grid item md={2}>
          <Typography sx={{ color: colors.titulos, fontSize: fontSizes.lg }}>
            Logo
          </Typography>
        </Grid>
        <Grid
          item
          md={10}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
          sx={{ gap: 2.5, textDecoration: "none" }}
        >
          <Typography
            alignItems={"center"}
            sx={{
              color: colors.subtitulos,
              fontSize: fontSizes["2xl"],
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
                  fontSize: fontSizes.xl,
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
              fontSize: fontSizes["2xl"],
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
                  fontSize: fontSizes.xl,
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
              fontSize: fontSizes["2xl"],
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
                  fontSize: fontSizes.xl,
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
              fontSize: fontSizes["2xl"],
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
                  fontSize: fontSizes.xl,
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
