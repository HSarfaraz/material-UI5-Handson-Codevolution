import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
// import { DateRangePicker, DateRange } from "@mui/x-date-pickers";

//as it is paid version, so it ll not work in free version
export const MuiDataRangePicker = () => {
  //   const [value, setValue] = useState<DateRange<Date>>([null, null]);
  //   console.log(value);
  return (
    <Box width="500px">
      {/* <DateRangePicker
        startText="Check in"
        endText="Check-out"
        value={value}
        onChange={(newValue: any) => setValue(newValue)}
        renderInput={(startProps, endProps)=>(<>
        <TextField {...startProps}/>
        <Box sx={{max:@}}>to</Box>
        <TextField {...endProps}/>
        )}
      /> */}
    </Box>
  );
};
