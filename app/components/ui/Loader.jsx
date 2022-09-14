import React from "react";
import { ActivityIndicator, View } from "react-native";
import { COLORS } from "../../../constants";

const Loader = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color={COLORS.orange} />
        </View>
    );
};

export default Loader;
