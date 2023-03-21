import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function EmailSent() {
  return (
    <Box
      sx={{
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img src="/email-sent.jpg" alt="" />
        <h3>Email Has Been Sent Successfully</h3>
        <h3>Please Verify Your Email Before Logging In</h3>
        <div>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#2196f3", // Set background color
              color: "#fff", // Set text color
              "&:hover": {
                bgcolor: "#1976d2", // Set background color on hover
              },
            }}
          >
            <Link href="/login" color="inherit" underline="none">
              Login
            </Link>
          </Button>
        </div>
      </Box>
    </Box>
  );
}

export default EmailSent;
