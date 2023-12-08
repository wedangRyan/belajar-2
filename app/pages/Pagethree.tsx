'use client'
import styles from "../Home.module.css"
import Image from 'next/image'
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const cards = [1, 2, 3];
function Pagethree() {
    return (
    <main>
        <Container sx={{pt: 2, borderRadius: 2}} className={styles.bg2}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="black"
          gutterBottom
          sx={{ textAlign: "center" }}
          className={styles.titles}
        >
          Heading
        </Typography>
        <Container sx={{ py: 1 }} maxWidth="md">
          <Grid container spacing={8} sx={{ pb: 40 }}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "140%",
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "#27262C",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Accordion>
                      <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography gutterBottom variant="h5" component="h2">
                          Heading
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </Container>
      </main>
    )
}
export default Pagethree;