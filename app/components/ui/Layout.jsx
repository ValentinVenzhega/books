import React from "react";
import { SafeAreaView } from "react-native";
import { COLORS } from "../../../constants";
const Layout = ({ children }) => {
    return <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.green, paddingTop: 50, paddingHorizontal: 10 }}>{children}</SafeAreaView>;
};

export default Layout;
