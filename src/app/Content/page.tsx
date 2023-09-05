import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Unstable_Grid2";
import "./page.css";

const pages = [
  {
    id: 1,
    title: "Co-working Space",
    description:
      "In mathematics, space is defined as a boundless, three-dimensional continuum where objects can have relative positions, directions and size. In mathematics, space is defined as a boundless In mathematics, space is defined as a boundless, three-dimensional continuum where objects can have relative positions, directions and size. In mathematics, space is defined as a boundless In mathematics, space is defined as a boundless, three-dimensional continuum where objects can have relative positions, directions and size. In mathematics, space is defined as a boundless",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  },
  {
    id: 2,
    title: "Event Space",
    description: "Description for Event Space...",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  },
  {
    id: 3,
    title: "3",
    description: "Description for Event Space...",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  },
  {
    id: 4,
    title: "4",
    description: "Description for Event Space...",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  },
  {
    id: 5,
    title: "5",
    description: "Description for Event Space...",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  },
  {
    id: 6,
    title: "4",
    description: "Description for Event Space...",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  },
  {
    id: 7,
    title: "5",
    description: "Description for Event Space...",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  },
  {
    id: 7,
    title: "5",
    description: "Description for Event Space...",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  },
  {
    id: 7,
    title: "5",
    description: "Description for Event Space...",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  },
  {
    id: 7,
    title: "5",
    description: "Description for Event Space...",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  },
  {
    id: 7,
    title: "5",
    description: "Description for Event Space...",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  },
  {
    id: 7,
    title: "5",
    description: "Description for Event Space...",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  },
  {
    id: 7,
    title: "5",
    description: "Description for Event Space...",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  },
];

function page() {
  return (
    <Box>
      <Box className="header">
        <Typography
          sx={{ fontSize: "4vw", textAlign: "center", color: "white" }}
        >
          Content
        </Typography>
      </Box>

      <Container maxWidth="xl" sx={{ background: "#111" }}>
        <Box sx={{ p: "70px ", margin: "0 auto", width: "90%" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 10 }}
            columns={{ xs: 1, sm: 2, md: 8, lg: 10, xl: 12 }}
          >
            {pages.map((page) => (
              <Grid xs={2} sm={4} md={3}>
                <Box
                  key={page.id}
                  sx={{
                    border: "5px solid #bbb",
                    borderRadius: "5px",
                    width: "250px",
                    height: "auto",
                    position: "relative",
                    cursor: "pointer",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <Box>
                    <CardMedia
                      component="img"
                      height="140"
                      image={page.image}
                      alt="img"
                    />
                    <Typography
                      sx={{
                        padding: "10px 15px",
                        fontSize: "20px",
                      }}
                    >
                      {page.title}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default page;
