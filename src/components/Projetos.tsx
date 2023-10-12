import { Button, Grid, Typography } from "@mui/material";
import { colors, fontSizes } from "../../styles/theme";
import Divider from "@mui/material/Divider";
import styled from "styled-components";
import foto from "../assets/projeto.png";
import projeto from "../assets/projeto2.png";

export default function Projetos() {
  return (
    <Grid
      container
      sx={{ height: "100%" }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid item md={6}>
        <Grid container id={"projetos"}>
          <Grid md={12} display={"flex"} alignItems={"center"} sx={{ gap: 1 }}>
            <Grid item md={3} display={"flex"} sx={{ gap: 1 }}>
              <Typography
                sx={{
                  color: colors.subtitulos,
                  fontSize: fontSizes["4xl"],
                  fontWeight: 700,
                }}
              >
                03.
              </Typography>
              <Typography
                sx={{
                  color: colors.titulos,
                  fontSize: fontSizes["4xl"],
                  fontWeight: 700,
                }}
              >
                PROJETOS
              </Typography>
            </Grid>
            <Grid item md={9}>
              <Divider sx={{ background: colors.subtitulos, height: "2px" }} />
            </Grid>
          </Grid>
          <Grid
            mt={2}
            container
            flexDirection={"row-reverse"}
            justifyContent={"center"}
          >
            <Grid
              item
              md={5.5}
              mt={2}
              display={"flex"}
              alignContent={"space-around"}
              alignItems={"center"}
            >
              <Grid container>
                <Grid md={12} sx={{ height: "40px" }}>
                  <Typography
                    sx={{
                      color: colors.subtitulos,
                      fontSize: fontSizes.lg,
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    REACT.NEWS
                  </Typography>
                </Grid>
                <Grid md={12} display={"flex"} justifyContent={"center"}>
                  <Container>
                    <Typography
                      sx={{
                        color: colors.titulos,
                        fontSize: fontSizes.md,
                        fontWeight: 600,
                      }}
                    >
                      Blog pessoal com assinatura, sobre o mundo de React
                    </Typography>
                  </Container>
                </Grid>
                <Grid
                  container
                  display={"flex"}
                  justifyContent={"space-evenly"}
                >
                  <Grid
                    md={10}
                    sx={{
                      height: "40px",
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                    mt={2}
                  >
                    <Typography
                      sx={{
                        color: colors.subtitulos,
                        fontSize: fontSizes.md,
                        fontWeight: 600,
                      }}
                    >
                      NEXT.JS
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.subtitulos,
                        fontSize: fontSizes.md,
                        fontWeight: 600,
                      }}
                    >
                      STRIPE
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.subtitulos,
                        fontSize: fontSizes.md,
                        fontWeight: 600,
                      }}
                    >
                      FAUNA DB
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.subtitulos,
                        fontSize: fontSizes.md,
                        fontWeight: 600,
                      }}
                    >
                      NPM
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={5.5} mt={2}>
              <ImageContainer>
                <Overlay />
                <Image src={foto} alt="Descrição da imagem" />
              </ImageContainer>
            </Grid>
          </Grid>
          <Grid
            mt={2}
            container
            flexDirection={"row"}
            justifyContent={"center"}
          >
            <Grid
              item
              md={5.5}
              mt={2}
              display={"flex"}
              alignContent={"space-around"}
              alignItems={"center"}
            >
              <Grid container>
                <Grid md={12} sx={{ height: "40px" }}>
                  <Typography
                    sx={{
                      color: colors.subtitulos,
                      fontSize: fontSizes.lg,
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    IGNITE-SHOP
                  </Typography>
                </Grid>
                <Grid md={12} display={"flex"} justifyContent={"center"}>
                  <Container>
                    <Typography
                      sx={{
                        color: colors.titulos,
                        fontSize: fontSizes.md,
                        fontWeight: 600,
                      }}
                    >
                      Site pessoal para vendas de vestimentas online
                    </Typography>
                  </Container>
                </Grid>
                <Grid
                  container
                  display={"flex"}
                  justifyContent={"space-evenly"}
                >
                  <Grid
                    md={10}
                    sx={{
                      height: "40px",
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                    mt={2}
                  >
                    <Typography
                      sx={{
                        color: colors.subtitulos,
                        fontSize: fontSizes.md,
                        fontWeight: 600,
                      }}
                    >
                      REACT.JS
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.subtitulos,
                        fontSize: fontSizes.md,
                        fontWeight: 600,
                      }}
                    >
                      STRIPE
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.subtitulos,
                        fontSize: fontSizes.md,
                        fontWeight: 600,
                      }}
                    >
                      NPM
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={5.5} mt={2}>
              <ImageContainer>
                <Overlay />
                <Image src={projeto} alt="Descrição da imagem" />
              </ImageContainer>
            </Grid>
          </Grid>
          <Grid container display={"flex"} justifyContent={"center"} mt={4}>
            <ButtonStyled variant="outlined" sx={{ padding: "10px" }}>
              <Typography
                sx={{
                  color: colors.titulos,
                  fontSize: fontSizes.lg,
                  fontWeight: 700,
                }}
              >
                MAIS PROJETOS
              </Typography>
            </ButtonStyled>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const Container = styled.div`
  background-color: #212122;
  height: 100px;
  border-radius: 8px;
  align-items: center;
  width: 20rem;
  display: flex;
  justify-content: end;
  padding: 10px;
  text-align: center;
`;

const ButtonStyled = styled(Button)`
  height: 70px;
  width: 180px;
  padding: 10px;
  border: 2px solid rgb(75, 0, 130) !important;
  color: rgb(75, 0, 130) !important;
  background-color: transparent !important;

  :hover {
    color: rgb(75, 0, 130) !important;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(75, 0, 130, 0.7);
  transition: background-color 0.3s ease;
  border-radius: 8px;

  ${ImageContainer}:hover & {
    background-color: transparent;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
