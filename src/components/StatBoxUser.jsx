import { Box, Typography, Button, IconButton } from "@mui/material";

const StatBox = ({ title, subtitle, icon, progress, increase, }) => {


  return (
    <Box width="100%" m="0 30px" >
      <Box display="flex" justifyContent="space-between" >
        <Box>
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            color: 'lightgray',
          }}
        >
          {title}
        </Typography>
        <Typography variant="h4" sx={{ color: 'lightgray' }}>
          {subtitle}
        </Typography>
        {/* <Button  sx={{ color: 'greenyellow' }}>
          Details
        </Button> */}
      </Box>
      <IconButton sx={{ color: 'rgba(0,0,50)' }} size='large'>
      {icon}
      </IconButton>
          
      </Box>
      
    </Box>
  );
};

export default StatBox;
