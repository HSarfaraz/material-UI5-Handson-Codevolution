import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";

export const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  console.log({ selectedDate, selectedTime, selectedDateTime });
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        // renderInput={(params: any) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newDate: any) => {
          setSelectedDate(newDate);
        }}
      />
      <TimePicker
        label="Time Picker"
        // renderInput={(params: any) => <TextField {...params} />}
        value={setSelectedTime}
        onChange={(newTime: any) => {
          setSelectedTime(newTime);
        }}
      />
      <DateTimePicker
        label="Time Picker"
        // renderInput={(params: any) => <TextField {...params} />}
        value={selectedDateTime}
        onChange={(newDateTime: any) => {
          setSelectedDateTime(newDateTime);
        }}
      />
    </Stack>
  );
};
