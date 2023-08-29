"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./page.css";
import Logo from "public/logo.png";
import Image from "next/image";

const Card = [
  {
    id: 1,
    title: "Co-working Space",
    description: "Description for Co-working Space...",
  },
  {
    id: 2,
    title: "Event Space",
    description: "Description for Event Space...",
  },
  {
    id: 3,
    title: "Maker Space",
    description: "Description for Maker Space...",
  },
  {
    id: 4,
    title: "Meeting Room",
    description: "Description for Meeting Room...",
  },
  {
    id: 5,
    title: "Office Space",
    description: "Description for Office Space...",
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
                  onClick={() => setActiveCard(card)} // Update active card on click
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
                  <Image src={Logo} alt="logo" />
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
