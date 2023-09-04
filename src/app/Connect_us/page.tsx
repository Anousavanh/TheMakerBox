import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./page.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const pages = [
  {
    id: 1,
    title: "Address",
    body: "Laos",
  },
  {
    id: 2,
    title: "Phone",
    body: "02011111111",
  },
  {
    id: 3,
    title: "Email",
    body: "Admin@gmail.com",
  },
];

function page() {
  return (
    <Box>
      <Box className="header">
        <Typography
          sx={{ fontSize: "4vw", textAlign: "center", color: "white" }}
        >
          Connect Us
        </Typography>
      </Box>

      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "block",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "30px ",
          }}
        >
          <Box sx={{ display: "flex", color: "white" }}>
            {pages.map((page) => (
              <Box key={page.id}>
                <Box sx={{ p: "0px 180px" }}>
                  <Typography
                    sx={{
                      fontSize: "30px",
                    }}
                  >
                    {page.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                    }}
                  >
                    {page.body}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box sx={{ textAlign: "center", p: "20px 100px", color: "white" }}>
            <Box
              sx={{
                display: "grid",
                "& .MuiTextField-root": { m: 1, width: "55ch" },
              }}
            >
              <Typography sx={{ textAlign: "center", fontSize: "30px" }}>
                Message
              </Typography>
              <TextField label="Email" variant="outlined" />
              <TextField label="Message" variant="outlined" />
            </Box>
            <Button
              size="large"
              href="About_us"
              sx={{
                my: 2,
                color: " #0EEEC4",
                p: "0px 5px",
                border: "0.5px solid #0EEEC4",
              }}
            >
              About us
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "30px ",
            color: "white",
          }}
        >
          <Box sx={{ display: "flex" }}>
            {pages.map((page) => (
              <Box key={page.id}>
                <Box sx={{ p: "0px 130px" }}>
                  <Typography
                    sx={{
                      fontSize: "30px",
                    }}
                  >
                    {page.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                    }}
                  >
                    {page.body}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box sx={{ textAlign: "center", p: "20px 100px", color: "white" }}>
            <Box
              sx={{
                display: "grid",
                "& .MuiTextField-root": { m: 1, width: "40ch" },
              }}
            >
              <Typography sx={{ textAlign: "center", fontSize: "30px" }}>
                Message
              </Typography>
              <TextField label="Email" variant="outlined" />
              <TextField label="Message" variant="outlined" />
            </Box>
            <Button
              size="large"
              href="About_us"
              sx={{
                my: 2,
                color: " #0EEEC4",
                p: "0px 5px",
                border: "0.5px solid #0EEEC4",
              }}
            >
              About us
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "30px ",
            color: "white",
          }}
        >
          <Box sx={{ display: "flex" }}>
            {pages.map((page) => (
              <Box key={page.id}>
                <Box sx={{ p: "0px 80px" }}>
                  <Typography
                    sx={{
                      fontSize: "30px",
                    }}
                  >
                    {page.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                    }}
                  >
                    {page.body}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box sx={{ textAlign: "center", p: "20px 70px", color: "white" }}>
            <Box
              sx={{
                display: "grid",
                "& .MuiTextField-root": { m: 1, width: "30ch" },
              }}
            >
              <Typography sx={{ textAlign: "center", fontSize: "30px" }}>
                Message
              </Typography>
              <TextField label="Email" variant="outlined" />
              <TextField label="Message" variant="outlined" />
            </Box>
            <Button
              size="large"
              href="About_us"
              sx={{
                my: 2,
                color: " #0EEEC4",
                p: "0px 5px",
                border: "0.5px solid #0EEEC4",
              }}
            >
              About us
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: {
            xs: "none",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "30px ",
            color: "white",
          }}
        >
          <Box sx={{ display: "flex" }}>
            {pages.map((page) => (
              <Box key={page.id}>
                <Box sx={{ p: "0px 30px" }}>
                  <Typography
                    sx={{
                      fontSize: "30px",
                    }}
                  >
                    {page.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                    }}
                  >
                    {page.body}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: "block" }}>
          <Box sx={{ textAlign: "center", p: "20px 40px", color: "white" }}>
            <Box
              sx={{
                display: "grid",
                "& .MuiTextField-root": { m: 1, width: "auto" },
              }}
            >
              <Typography sx={{ textAlign: "center", fontSize: "30px" }}>
                Message
              </Typography>
              <TextField label="Email" variant="outlined" />
              <TextField label="Message" variant="outlined" />
            </Box>
            <Button
              size="large"
              href="About_us"
              sx={{
                my: 2,
                color: " #0EEEC4",
                p: "0px 5px",
                border: "0.5px solid #0EEEC4",
              }}
            >
              About us
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "block",
            justifyContent: "center",
            padding: "30px ",
            color: "white",
          }}
        >
          <Box sx={{ display: "block", textAlign: "center" }}>
            {pages.map((page) => (
              <Box key={page.id}>
                <Box sx={{ p: "20px 30px" }}>
                  <Typography
                    sx={{
                      fontSize: "30px",
                    }}
                  >
                    {page.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                    }}
                  >
                    {page.body}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: "block" }}>
          <Box sx={{ textAlign: "center", p: "20px 40px", color: "white" }}>
            <Box
              sx={{
                display: "grid",
                "& .MuiTextField-root": { m: 1, width: "auto" },
              }}
            >
              <Typography sx={{ textAlign: "center", fontSize: "30px" }}>
                Message
              </Typography>
              <TextField label="Email" variant="outlined" />
              <TextField label="Message" variant="outlined" />
            </Box>
            <Button
              size="large"
              href="About_us"
              sx={{
                my: 2,
                color: " #0EEEC4",
                p: "0px 5px",
                border: "0.5px solid #0EEEC4",
              }}
            >
              About us
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default page;
