"use client";
import getMPTheme from "@/theme/getMPTheme";
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme(getMPTheme("light"));
const darkTheme = createTheme(getMPTheme("dark"));

const theme = {
  light: lightTheme,
  dark: darkTheme,
};

export default theme;
