import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ProgressCircle from "../ProgressCircle";
import styles from './statbox.module.css'

const StatBox = ({ title, subtitle, icon, progress, increase, }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className={styles.container} >
      <div className={styles.inner}>
        <div>
        {icon}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: colors.grey[100],
          }}
        >
          {title}
        </Typography>
      </div>
      
      <div>
        <ProgressCircle progress={progress} />
      </div>
      </div>
      <div className={styles.desc} >
        <Typography variant="h5" sx={{ color: '#176eb6' }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
         fontStyle='italic'
          sx={{
            color: "#176eb6",
          }}
        >
          {increase}
        </Typography>
      </div>
      
    </div>
  );
};

export default StatBox;
