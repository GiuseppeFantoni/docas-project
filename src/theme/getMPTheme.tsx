import { PaletteMode, ThemeOptions } from "@mui/material/styles";
import {
  dataDisplayCustomizations,
  feedbackCustomizations,
  inputsCustomizations,
  navigationCustomizations,
} from "./customizations";
import { getDesignTokens } from "./themePrimitives";

export default function getMPTheme(mode: PaletteMode): ThemeOptions {
  return {
    ...getDesignTokens(mode),
    components: {
      ...inputsCustomizations,
      ...dataDisplayCustomizations,
      ...feedbackCustomizations,
      ...navigationCustomizations,
    },
  };
}
