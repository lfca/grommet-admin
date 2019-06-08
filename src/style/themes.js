import { generate } from "grommet/themes/base";
import { deepMerge } from "grommet/utils";

const defaultTheme = generate(22);
const accentColors = ["#00E676", "#614767", "#ff8d6d"];
const colors = {
  brand: "#43A047",
  focus: accentColors[0],
  border: {
    // light: '#43A047',
    // dark: '#43A047',
  }
};
const customTheme = {
  global: {
    colors,
    font: {
      family: "'Metric', Arial, sans-serif",
      face: `
              @font-face {
                font-family: "Metric";
                src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Regular.woff") format('woff');
              }`
    },
    // colors: {
    //     brand: "#607D8B",
    //     border: {
    //         "dark": "rgba(255,255,255,0.33)",
    //         "light": "rgba(0,0,255,0.33)"
    //     }
    // },
    control: {
      border: {
        // color: "#FFEAEA"
      }
    },
    focus: {
      border: {
        // color: "#EAEAEA"
      }
    }
  },
  formField: {
    help: {
      color: {
        // "dark": "#FF00FF",
        // "light": "#00FF0F",
      }
    }
  },
  button: {
    border: {
      radius: "0px"
    },
    colors: {
      accent: "#ff8d6d",
      secondary: "rgba(51,51,51,0.6)"
    },
    extend: "letter-spacing: 0.04167em;"
  }
};
export const theme = deepMerge(defaultTheme, customTheme);
