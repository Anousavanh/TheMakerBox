import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Logo from "public/logo.png";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

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
      <Container maxWidth="xl">
        <Box
          sx={{
            display:"flex" ,
            alignItems: "center",
            justifyContent: {xs:"center",sm:"center" ,md:"space-between"},
            height: {xs:"400px",md:"891px"},
            gap:{xs:"100px"}
          }}
        >
          <Box>
            {pages.map((page) => (
              <Typography sx={{ color: "#444", fontSize: {xs:"25px",sm:"30px",md:"75px"} }}>
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
                  p: {xs:"0px 5px",md:"0px 20px"},
                  border: "0.5px solid #0EEEC4",
                  fontSize:{xs:"14px"}
                }}
              >
                About us
              </Button>
            </Box>
          </Box>
          <Box sx={{ width: {xs:"150px",sm:"300px",md:"400px"}}}>
            <Image src={Logo} alt="logo" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default page;
