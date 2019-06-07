import { deepFreeze, deepMerge } from "grommet/utils/object";
const simplifiedPath = "https://hpincfonts.s3.amazonaws.com";

export const theme = deepFreeze({
  global: {
    colors: {
      background: "#ffffff",
      brand: "#b1d000",
      control: {
        dark: "#00A8F0",
        light: "#0096D6"
      },
      focus: "#99d5ef",
      "neutral-1": "#006996",
      "neutral-2": "#A65336",
      "neutral-3": "#A69136",
      "neutral-4": "#774677",
      "accent-1": "#E6734B",
      "accent-2": "#E6C84B",
      "accent-3": "#915591",
      "status-critical": "#F04B37",
      "status-warning": "#F0AA3C",
      "status-ok": "#509137",
      "status-unknown": "#848484",
      "status-disabled": "#848484",
      "dark-1": "#000001",
      "dark-2": "#676767",
      "light-1": "#F2F2F2",
      "light-2": "#E8E8E8",
      "light-3": "#CCCCCC"
    },
    font: {
      family: "'Roboto',sans-serif",
      face: `
        @font-face {
          font-family: 'Roboto';
          src:
            local('Roboto'),
            url("https://fonts.googleapis.com/css?family=Roboto&display=swap") format('truetrype');
        }
      `
    }
  },
  anchor: {
    color: {
      dark: "#00A8F0",
      light: "#2883d7"
    }
  }
});
