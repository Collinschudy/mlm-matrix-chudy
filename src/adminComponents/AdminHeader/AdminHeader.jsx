import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import styles  from './adminheader.module.css';
import useMediaQuery from "@mui/material/useMediaQuery";

const AdminHeader = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const isNotMobile = useMediaQuery("(min-width: 600px)");
  return (
    <div className={styles.container}>
      <Typography
        variant={isNotMobile ? "h2" : "h4"}
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant={isNotMobile ? "h5" : "h6"} color="grey">
        {subtitle}
      </Typography>
    </div>
  );
};

export default AdminHeader;
