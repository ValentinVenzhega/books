export const COLORS = {
    // base colors
    colorBtn: "#F96D41",
    secondary: "#25282F",

    // colors
    black: "#1E1B26",
    white: "#FFFFFF",
    lightGray: "#64676D",
    lightGray2: "#EFEFF0",
    lightGray3: "#D4D5D6",
    lightGray4: "#7D7E84",
    gray: "#2D3038",
    gray1: "#282C35",
    orange: "orange",
    green: "green",
    myGray: "gray",
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
};

export const FONTS = {
    largeTitle: { fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontSize: SIZES.h1, lineHeight: 36, fontWeight: "900" },
    h2: { fontSize: SIZES.h2, lineHeight: 30, fontWeight: "bold" },
    h3: { fontSize: SIZES.h3, lineHeight: 22, fontWeight: "bold" },
    h4: { fontSize: SIZES.h4, lineHeight: 22, fontWeight: "bold" },
    body1: { fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
