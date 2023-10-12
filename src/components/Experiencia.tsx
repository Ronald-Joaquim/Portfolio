import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import { colors, fontSizes } from "../../styles/theme";
import Divider from "@mui/material/Divider";
import { SyntheticEvent, useState } from "react";
import { styled } from "@mui/material/styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: SyntheticEvent, newValue: number) => void;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Experiencia() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      sx={{ height: "100%" }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid item md={6} display={"flex"} alignItems={"center"} sx={{ gap: 1 }}>
        <Grid container id={"experiencia"}>
          <Grid md={12} display={"flex"} alignItems={"center"} sx={{ gap: 1 }}>
            <Grid item md={7} display={"flex"} sx={{ gap: 1 }}>
              <Typography
                sx={{
                  color: colors.subtitulos,
                  fontSize: fontSizes["4xl"],
                  fontWeight: 700,
                }}
              >
                02.
              </Typography>
              <Typography
                sx={{
                  color: colors.titulos,
                  fontSize: fontSizes["4xl"],
                  fontWeight: 700,
                }}
              >
                EXPERIÊNCIA DE TRABALHO
              </Typography>
            </Grid>
            <Grid item md={5.5}>
              <Divider sx={{ background: colors.subtitulos, height: "2px" }} />
            </Grid>
          </Grid>

          <Grid item md={12}>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "transparent",
                display: "flex",
                height: "auto",
              }}
            >
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                  borderRight: 1,
                  borderColor: "divider",
                  minWidth: "120px",
                }}
              >
                <Tab
                  label="Alumisoft"
                  {...a11yProps(0)}
                  sx={{
                    color: colors.titulos,
                    "&.Mui-selected": {
                      color: colors.subtitulos,
                    },
                    fontSize: fontSizes.lg,
                    fontWeight: 600,
                  }}
                />
                <Tab
                  label="Freelas"
                  {...a11yProps(1)}
                  sx={{
                    color: colors.titulos,
                    "&.Mui-selected": {
                      color: colors.subtitulos,
                    },
                    fontSize: fontSizes.lg,
                    fontWeight: 600,
                  }}
                />
              </StyledTabs>
              <TabPanel value={value} index={0}>
                <Typography
                  sx={{
                    fontSize: fontSizes["2xl"],
                    color: colors.titulos,
                    width: "100%",
                    paddingLeft: "10px",
                  }}
                >
                  Com vasta experiência como desenvolvedor FrontEnd, sou
                  especializado em criar interfaces responsivas e modernas
                  usando o framework MUI React.
                  <br />
                  <br />
                  Trabalho em colaboração com equipes dinâmicas, contribuindo
                  ativamente para o desenvolvimento de projetos.
                  <br />
                  <br />
                  Tenho habilidade em integrar APIs de forma eficiente,
                  garantindo a funcionalidade adequada em todas as interações
                  com o servidor.
                  <br />
                  <br />
                  Além disso, sou reconhecido por meu empenho em identificar e
                  solucionar bugs, mantendo a estabilidade e a qualidade dos
                  projetos.
                </Typography>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Typography
                  sx={{
                    fontSize: fontSizes["2xl"],
                    color: colors.titulos,
                    width: "100%",
                    paddingLeft: "10px",
                  }}
                >
                  Como freelancer, acumulei experiência valiosa trabalhando em
                  uma variedade de projetos no campo do desenvolvimento web.
                  <br />
                  <br /> Nos meus trabalhos anteriores, tive a oportunidade de
                  colaborar com clientes e implementar recursos de pagamento
                  utilizando a plataforma Stripe.
                  <br />
                  <br /> Além disso, desenvolvi projetos empregando MUI React,
                  uma biblioteca popular de componentes de interface para criar
                  interfaces atraentes e responsivas.
                  <br />
                  <br /> Também me especializei em criar websites responsivos,
                  garantindo que as páginas se adaptem a diferentes dispositivos
                  e tamanhos de tela.
                  <br />
                  <br />
                  Minhas experiências como freelancer me proporcionaram
                  conhecimento prático na aplicação dessas tecnologias e
                  habilidades para entregar soluções sob medida aos meus
                  clientes.
                </Typography>
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    orientation="vertical"
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 100,
    width: "100%",
    backgroundColor: "#4B0082",
  },
});
