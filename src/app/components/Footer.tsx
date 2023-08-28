import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


function footer() {
  return (
    <Box
        sx={{
          background: "#111",
          color: "#fff",
          textAlign: "center",
          p: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {"Copyright © "}
        <Typography>The MakerBox.</Typography>
        {new Date().getFullYear()}.
      </Box>
  )
};

export default footer;