import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./page.css";

const pages = [
  {
    id: 1,
    title: "MakerBox Lao Vision",
  },
  {
    id: 2,
    title: "MakerBox Lao Mission",
  },
];

function page() {
  return (
    <Box>
      <Box className="header">
        <Typography
          sx={{ fontSize: "4vw", textAlign: "center", color: "white" }}
        >
          About Us
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "30px ",
        }}
      >
        <Box sx={{ p: "0px 40px" }}>
          <Box
            sx={{
              width: "300px",
              height: "120px",
              overflow: "hidden",
              background: "white",
            }}
          >
            <Typography
              sx={{
                background: "#333",
                color: "aliceblue",
                textAlign: "center",
              }}
            >
              Sections
            </Typography>
            {pages.map((page) => (
              <Typography
                sx={{
                  padding: "10px 15px",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              >
                {page.title}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box sx={{ width: "1000px" }}>
          <Box sx={{ background: "white", p: "15px 20px" }}>
            <Typography sx={{ fontSize: "25px", p: "10px 0px" }}>
              MakerBox Lao Vision
            </Typography>
            <Typography sx={{ fontSize: "15px", p: "5px 0px" }}>
              One stop hub for creative individuals, technical experts and early
              explorers to generate ideas and turn their visions into practical
              innovative solutions
            </Typography>
            <Typography sx={{ fontSize: "25px", p: "10px 0px" }}>
              MakerBox Lao Mission
            </Typography>
            <Typography sx={{ fontSize: "15px", p: "5px 0px" }}>
              To provide a space where a community of like-minded people can
              share ideas and be inspired by others. To provide a space where
              anyone of any age and gender can learn and explore principles
              around science, technology, engineering, arts, and mathematics. To
              allow people to envision making just about anything (or at least a
              prototype of almost anything). To provide the resources necessary
              to inspire, ideate, and create. To provide facilitators and
              consultants to assist makers when they need inspiration to
              complete their ideas. To provide a learning materials library that
              can be accessed by the community to assist them in bringing their
              project or idea to fruition. To serve as a place where producers
              are created. To pioneer innovative prototypes and solutions. To
              pioneer new solutions for the improvement of the country’s
              agriculture sector
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default page;
