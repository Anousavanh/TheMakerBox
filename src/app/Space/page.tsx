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
          Space
        </Typography>
      </Box>

      <Box>
        <Box sx={{ background: "#777", textAlign: "center" }}>
          <Box sx={{p:"50px 200px"}}>
            <Typography sx={{ fontSize: "2vw", color: "white" }}>
              Description
            </Typography>
            <Typography sx={{ fontSize: "1vw", color: "white" }}>
              ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default page;
