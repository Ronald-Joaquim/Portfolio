import { Typography, Stack, Grid, Button } from "@mui/material";
import { colors, fontSizes } from "../../styles/theme";

export default function Header() {
  return (
    <Stack sx={{ minWidth: "1280px" }} display={"flex"}>
      <Grid container mt={2.5} justifyContent={"space-between"}>
        <Grid item>
          <Typography sx={{ color: colors.titulos, fontSize: fontSizes.lg }}>
            Logo
          </Typography>
        </Grid>
        <Grid
          item
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
          sx={{ gap: 2.5 }}
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
            <Typography
              sx={{
                color: colors.titulos,
                fontSize: fontSizes.xl,
                fontWeight: "600",
              }}
            >
              SOBRE MIM
            </Typography>
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
            <Typography
              sx={{
                color: colors.titulos,
                fontSize: fontSizes.xl,
                fontWeight: "600",
              }}
            >
              EXPERIÊNCIA
            </Typography>
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
            <Typography
              sx={{
                color: colors.titulos,
                fontSize: fontSizes.xl,
                fontWeight: "600",
              }}
            >
              PROJETOS
            </Typography>
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
            <Typography
              sx={{
                color: colors.titulos,
                fontSize: fontSizes.xl,
                fontWeight: "600",
              }}
            >
              CONTATO
            </Typography>
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: colors.subtitulos, fontSize: fontSizes.md }}
          >
            Resumo
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
}
