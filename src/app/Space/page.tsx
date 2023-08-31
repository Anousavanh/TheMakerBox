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
          display: { xs: "none", sm: "none", md: "none", lg: "block" },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ p: "50px 200px" }}>
            {Description.map((Descriptions) => (
              <Box key={Descriptions.id}>
                <Typography sx={{ fontSize: "40px", color: "white" }}>
                  {Descriptions.title}
                </Typography>
                <Typography sx={{ fontSize: "20px", color: "white" }}>
                  {Descriptions.description}
                </Typography>
              </Box>
            ))}
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
                      image={card.image}
                      alt="img"
                    />
                    <Typography
                      sx={{
                        padding: "10px 15px",
                        fontSize: "20px",
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
                    width: "800px",
                  }}
                >
                  <Typography sx={{ fontSize: "30px", color: "white" }}>
                    {activeCard.title}
                  </Typography>
                  <Typography sx={{ fontSize: "20px", color: "white" }}>
                    {activeCard.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "block", lg: "none" },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ p: "50px 100px" }}>
            {Description.map((Descriptions) => (
              <Box key={Descriptions.id}>
                <Typography sx={{ fontSize: "30px", color: "white" }}>
                  {Descriptions.title}
                </Typography>
                <Typography sx={{ fontSize: "20px", color: "white" }}>
                  {Descriptions.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Box sx={{ margin: "auto", width: "100%" }}>
            <Box sx={{ display: "flex", gap: "20px", p: "50px" }}>
              {Card.map((card) => (
                <Box
                  key={card.id}
                  onClick={() => setActiveCard(card)}
                  sx={{
                    border: "5px solid #bbb",
                    borderRadius: "5px",
                    width: "300px",
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
                      image={card.image}
                      alt="img"
                    />
                    <Typography
                      sx={{
                        padding: "10px 15px",
                        fontSize: "17px",
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
                p: "100px 150px",
                xs: "block",
              }}
            >
              <Box
                sx={{
                  display: "block",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    margin: "0 auto",
                    width: "40%",
                  }}
                >
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
                  }}
                >
                  <Typography sx={{ fontSize: "25px", color: "white" }}>
                    {activeCard.title}
                  </Typography>
                  <Typography sx={{ fontSize: "15px", color: "white" }}>
                    {activeCard.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "none", sm: "block", md: "none", lg: "none" },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ p: "50px 50px" }}>
            {Description.map((Descriptions) => (
              <Box key={Descriptions.id}>
                <Typography sx={{ fontSize: "25px", color: "white" }}>
                  {Descriptions.title}
                </Typography>
                <Typography sx={{ fontSize: "15px", color: "white" }}>
                  {Descriptions.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Box>
            <Box sx={{ display: "flex", gap: "20px", p: "20px" }}>
              {Card.map((card) => (
                <Box
                  key={card.id}
                  onClick={() => setActiveCard(card)}
                  sx={{
                    border: "5px solid #bbb",
                    borderRadius: "5px",
                    width: "300px",
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
                      image={card.image}
                      alt="img"
                    />
                    <Typography
                      sx={{
                        padding: "10px 15px",
                        fontSize: "15px",
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
                p: "50px 50px",
                xs: "block",
              }}
            >
              <Box
                sx={{
                  display: "block",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    margin: "0 auto",
                    width: "40%",
                  }}
                >
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
                  }}
                >
                  <Typography sx={{ fontSize: "25px", color: "white" }}>
                    {activeCard.title}
                  </Typography>
                  <Typography sx={{ fontSize: "15px", color: "white" }}>
                    {activeCard.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "block", sm: "none", md: "none", lg: "none" },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ p: "50px 50px" }}>
            {Description.map((Descriptions) => (
              <Box key={Descriptions.id}>
                <Typography sx={{ fontSize: "25px", color: "white" }}>
                  {Descriptions.title}
                </Typography>
                <Typography sx={{ fontSize: "15px", color: "white" }}>
                  {Descriptions.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
            }}
          >
            <Box sx={{}}>
              {Card.map((card) => (
                <Box
                  key={card.id}
                  onClick={() => setActiveCard(card)}
                  sx={{
                    border: "5px solid #bbb",
                    borderRadius: "5px",
                    width: "200px",
                    height: "auto",
                    position: "relative",
                    cursor: "pointer",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        padding: "10px 15px",
                        fontSize: "15px",
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
                p: "20px 20px",
                xs: "block",
              }}
            >
              <Box
                sx={{
                  display: "block",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    margin: "0 auto",
                    width: "40%",
                  }}
                >
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
                  }}
                >
                  <Typography sx={{ fontSize: "25px", color: "white" }}>
                    {activeCard.title}
                  </Typography>
                  <Typography sx={{ fontSize: "15px", color: "white" }}>
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
