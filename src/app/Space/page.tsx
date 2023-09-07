"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./page.css";
import CardMedia from "@mui/material/CardMedia";

const Description = [
  {
    id: 1,
    title: "Description",
    description:
      "In mathematics, space is defined as a boundless, three-dimensional continuum where objects can have relative positions, directions and size. In mathematics, space is defined as a boundless In mathematics, space is defined as a boundless, three-dimensional continuum where objects can have relative positions, directions and size. In mathematics, space is defined as a boundless In mathematics, space is defined as a boundless, three-dimensional continuum where objects can have relative positions, directions and size. In mathematics, space is defined as a boundless",
  },
];

const Card = [
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
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  },
  {
    id: 3,
    title: "Maker Space",
    description: "Description for Maker Space...",
    image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  },
  {
    id: 4,
    title: "Meeting Room",
    description: "Description for Meeting Room...",
    image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  },
  {
    id: 5,
    title: "Office Space",
    description: "Description for Office Space...",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  },
];

function page() {
  const [activeCard, setActiveCard] = useState(Card[0]);

  return (
    <Box>
      <Box className="header">
        <Typography
          sx={{ fontSize: "4vw", textAlign: "center", color: "white" }}
        >
          Space
        </Typography>
      </Box>

      <Box
        sx={{
          display: "block",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ p: {xs:"50px 50px",sm: "50px 50px",md:"50px 100px",lg:"50px 200px"} }}>
            {Description.map((Descriptions) => (
              <Box key={Descriptions.id}>
                <Typography sx={{ fontSize: {xs:"25px",sm: "25px",md:"30px",lg:"40px"}, color: "white" }}>
                  {Descriptions.title}
                </Typography>
                <Typography sx={{ fontSize: {xs:"15px", sm: "15px",lg:"20px"}, color: "white" }}>
                  {Descriptions.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Box sx={{ margin: {xs:"0 auto",sm:"auto",md:"auto",lg:"auto"}, width: {xs:"200px",sm:"90%",md:"100%",lg:"88%"} }}>
            <Box sx={{ display: {xs:"block",sm:"flex",md:"flex",lg:"flex"}, gap: {sm:"20px",md:"20px",lg:"50px"}, p: {sm:"20px",md:"50px",lg:"70px"} }}>
              {Card.map((card) => (
                <Box
                  key={card.id}
                  onClick={() => setActiveCard(card)}
                  sx={{
                    border: "5px solid #bbb",
                    borderRadius: "5px",
                    width: {xs:"200px",sm:"300px",md:"300px",lg:"300px"},
                    height: "auto",
                    position: "relative",
                    cursor: "pointer",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <Box>
                    <CardMedia
                    sx={{display: {xs:"none",sm:"block",md:"block",lg:"block"},}}
                      component="img"
                      height="140"
                      image={card.image}
                      alt="img"
                    />
                    <Typography
                      sx={{
                        padding: "10px 15px",
                        fontSize: {xs:"15px",sm: "15px",md:"17px",lg:"20px"},
                      }}
                    >
                      {card.title}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                background: "#444",
                p: {xs:"20px 20px",sm:"50px 50px",md:"50px 50px",lg:"100px 150px"},
                xs: "block",
              }}
            >
              <Box
                sx={{
                  display: {xs:"block",sm: "block",md:"flex",lg:"flex"},
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ width: {xs:"40%",sm: "40%",md:"200%",lg:"40%"},margin:{xs:"0 auto",sm: "0 auto",} }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={activeCard.image}
                    alt="img"
                  />
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    width: {lg:"800px"},
                  }}
                >
                  <Typography sx={{ fontSize: {xs:"25px",sm: "25px",md:"25px",lg:"30px"}, color: "white" }}>
                    {activeCard.title}
                  </Typography>
                  <Typography sx={{ fontSize: {xs:"15px",sm: "15px",md:"15px",lg:"20px"}, color: "white" }}>
                    {activeCard.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      

     

      
    </Box>
  );
}

export default page;
