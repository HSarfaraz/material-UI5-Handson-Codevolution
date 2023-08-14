import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";
export const MuiAutocomplete = () => {
  type Skill = {
    id: number;
    label: string;
  };
  const skills = ["HTML", "CSS", "Javascript", "Typescript", "React"];
  const skillOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
  }));
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  const handleChange = (event: any, newValue: string | null) => {
    setValue(newValue);
    console.log(newValue);
  };
  const handleChangeOne = (event: any, newValue: Skill | null) => {
    setSkill(newValue);
  };
  console.log(skill);
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value}
        onChange={handleChange}
      />
      <Autocomplete
        options={skillOptions}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={skill}
        onChange={handleChangeOne}
      />
    </Stack>
  );
};
