import { Typography, Box, useTheme } from "@mui/material";

const AdminHeader = ({ title, subtitle }) => {

  return (
    <Box mt="20px" ml='40px' mr='40px'>
      <Typography
        variant="h3"
        // color='rgba(0,0,50)'
        color='white'
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h6" color='white'>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default AdminHeader;
