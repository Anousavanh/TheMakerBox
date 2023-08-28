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
    </Box>
  );
}

export default page;
