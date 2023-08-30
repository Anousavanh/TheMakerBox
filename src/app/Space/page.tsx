"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./page.css";
import ImageList from "@mui/material/ImageList";

const Card = [
  {
    id: 1,
    title: "Co-working Space",
    description: "Description for Co-working Space...",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  },
  {
    id: 2,
    title: "Event Space",
    description: "Description for Event Space...",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  },
  {
    id: 3,
    title: "Maker Space",
    description: "Description for Maker Space...",
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  },
  {
    id: 4,
    title: "Meeting Room",
    description: "Description for Meeting Room...",
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  },
  {
    id: 5,
    title: "Office Space",
    description: "Description for Office Space...",
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  },
];

function page() {
  const [activeCard, setActiveCard] = useState(Card[0]); // Initialize with the first card

  return (
    <Box>
      <Box className="header">
        <Typography
          sx={{ fontSize: "4vw", textAlign: "center", color: "white" }}
        >
          Space
        </Typography>
      </Box>

      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ p: "50px 200px" }}>
            <Typography sx={{ fontSize: "2vw", color: "white" }}>
              Description
            </Typography>
            <Typography sx={{ fontSize: "1vw", color: "white" }}>
              ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </Typography>
          </Box>
        </Box>

        <Box>
          <Box sx={{ margin: "auto", width: "88%" }}>
            <Box sx={{ display: "flex", gap: "50px", p: "70px" }}>
              {Card.map((card) => (
                <Box
                  key={card.id}
                  onClick={() => setActiveCard(card)}
                  sx={{
                    border: "5px solid #bbb",
                    borderRadius: "5px",
                    width: "300px",
                    height: "300px",
                    position: "relative",
                    cursor: "pointer",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "auto",
                    }}
                  >
                    <img
                      src={`${card.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${card.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={card.title}
                      loading="lazy"
                    />
                  </Box>
                  <Typography
                    sx={{
                      padding: "10px 15px",
                      fontSize: "20px",
                    }}
                  >
                    {card.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                background: "#444",
                p: "100px 150px",
                xs: "block",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ width: "300px" }}>
                  
                    <img
                      src={`${activeCard.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${activeCard.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={activeCard.title}
                      loading="lazy"
                    />
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography sx={{ fontSize: "2vw", color: "white" }}>
                    {activeCard.title} Description
                  </Typography>
                  <Box sx={{ p: "10px 100px", width: "1000px" }}>
                    <Typography sx={{ fontSize: "1vw", color: "white" }}>
                      {activeCard.description}{" "}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box></Box>
      </Box>
    </Box>
  );
}

export default page;
