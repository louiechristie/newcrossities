const colors = require("tailwindcss/colors")
const rem = (px) => px / 16 + "rem"

const { slate, red, teal, purple } = colors
//palette
const light = slate[100],
  ultraLight = slate[50],
  dark = slate[800],
  ultraDark = slate[900],
  primary = teal[400],
  secondary = purple[500],
  highlight = red[500],
  mutted = slate[200],
  bg = ultraLight,
  text = ultraDark
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      debugScreens: {
        position: ["top", "left"],
        style: {
          backgroundColor: "black",
          color: "#fff",
        },
      },
      maxWidth: {
        xl: rem(1280),
        lg: rem(1024),
        md: rem(768),
        sm: rem(640),
      },
      fontWeight: {
        body: 400,
        heading: "bold",
        bold: 700,
      },
      lineHeight: {
        body: 1.8,
        heading: 1.4,
        loose: 2,
      },
      boxShadow: {
        input: "currentcolor 0px 0px 0px inset",
        inputFocus: "currentcolor 0px -3px 0px inset",
      },

      colors: {
        /* header */
        ...colors,
        light,
        dark,
        ultraLight,
        ultraDark,
        primary,
        secondary,
        highlight,
        mutted,
        bg,
        text,
        accentColor: primary,
        /* header */
        headerBg: "white",
        headerColor: ultraDark,
        /* footer */
        footerBg: "white",
        footerColor: ultraDark,
        /* search */
        searchBg: "white",
        searchResultsHeaderBg: ultraDark,
        searchResultsHeaderColor: primary,
        searchResultsBg: bg,
        searchResultsColor: text,
        /* menu */
        mobileMenuBg: "black",
        mobileMenuColor: light,
        subMenuBg: "black",
        subMenuColor: "white",
        subMenuHoverColor: primary,
        menuHoverColor: primary,
        /* newsletter */
        nlButtonBg: "black",
        nlButtonColor: "white",
        nlButtonHoverBg: primary,
        nlInputBg: light,
        nlColor: text,
        /* post */
        infoBg: light,
        infoColor: teal[900],
        archiveTitleBg: slate[100],
        archiveTitleColor: text,
        cardBg: "white",

        dark: {
          /* basic colors*/

          bg: dark,
          text: ultraLight,
          text2: teal[900],
          accentColor: primary,
          /* header*/
          headerBg: ultraDark,
          headerColor: ultraLight,
          /* footer*/
          footerBg: ultraDark,
          footerColor: ultraLight,
          /* search */
          searchBg: ultraDark,
          searchResultsHeaderBg: primary,
          searchResultsHeaderColor: light,
          searchResultsBg: bg,
          searchResultsColor: text,
          /* menu*/
          mobileMenuBg: "black",
          mobileMenuColor: light,
          subMenuBg: primary,
          subMenuColor: teal[900],
          subMenuHoverColor: teal[800],
          menuHoverColor: teal[100],
          /* newsletter */
          nlButtonBg: primary,
          nlButtonColor: teal[900],
          nlButtonHoverBg: teal[300],
          nlInputBg: slate[700],
          nlColor: light,
          /* post*/
          archiveTitleBg: primary,
          archiveTitleColor: teal[900],
          infoBg: primary,
          cardBg: ultraDark,
        },
      },
    },
    triangles: {
      up: {
        direction: "up",
        size: "18px",
        height: "10px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-debug-screens"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-triangles")({
      componentPrefix: "c-", // defaults to 'c-'
      defaultSize: "1em", // defaults to '1em'
      defaultColor: "currentColor", // defaults to 'currentColor'
    }),
  ],
  corePlugins: {
    preflight: true,
  },
}
