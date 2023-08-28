import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Logo from "public/logo.png";
import Button from "@mui/material/Button";

const pages = [
  {
    title: "Think it",
  },
  {
    title: "Make it",
  },
  {
    title: "Break it",
  },
  {
    title: "Rethink it",
  },
  {
    title: "Rebuild it",
  },
];
function page() {
  return (
    <Box>
      <Box sx={{ p: "0px 300px", xs: "block" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "891px",
          }}
        >
          <Box sx={{ display: { xs: "block" } }}>
            {pages.map((page) => (
              <Typography sx={{ color: "#444", fontSize: "4vw" }}>
                {page.title}
              </Typography>
            ))}
            <Box sx={{ textAlign: "center" }}>
              <Button
                size="large"
                href="About_us"
                sx={{
                  my: 2,
                  color: " #0EEEC4",
                  p: "0px 20px",
                  border: "0.5px solid #0EEEC4",
                }}
              >
                About us
              </Button>
            </Box>
          </Box>
          <Box>
            <Image src={Logo} alt="logo" />
          </Box>
        </Box>
      </Box>

      <Box sx={{ background: "#444",p: "20px 300px", xs: "block",height:"955px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "891px",
          }}
        >
          <Box>
            <Image src={Logo} alt="logo" />
          </Box>
          <Box sx={{ display: { xs: "block" } }}>
            {pages.map((page) => (
              <Typography sx={{ color: "#111", fontSize: "4vw" }}>
                {page.title}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default page;
