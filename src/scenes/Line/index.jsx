import { Box } from "@mui/material";
import AdminHeader from "../../adminComponents/AdminHeader";
import LineChart from "../../adminComponents/LineChart";

const Line = () => {
    return (
        <Box m='20px'>
            <AdminHeader title='Line Chart' subtitle='Line Chart of daily investments and deposits' />
            <Box height='75vh'>
                <LineChart />
            </Box>
        </Box>
    )
}

export default Line;