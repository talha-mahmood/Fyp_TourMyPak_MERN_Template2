/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": "Montserrat",
        "tradegothic": "'TradeGothic LT Extended'",
        "manrope": "Manrope",
      },
      colors:{
        mediumaquamarine: "rgba(141, 211, 187, 0.4)",
        lightcyan: "#cdeae1",
        black: "#000",
        lavender: "#d7e2ee",
        neutrals: "#fff",
        "mint-green": "#8dd3bb",
        paleturquoise: "#9be0c8",
        "orange-range-orange-90": "#ff7900",
        "blackish-green": "#112211",
        "primarycolor":"#ffffff",
        "primarycolor3":"#003d2b",
        "primarycolor2":"#0f766e",
        "secondarycolor":"#00401A",
        "secondarycolor3":"#ade6b9",
        "secondarycolor2":"#199171",
        "tertiarycolor":"#612c1f",
      },
    },
  },
  plugins: [],
}

