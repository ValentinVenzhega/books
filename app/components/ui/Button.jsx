import React, { FC } from "react";
import { Text, TouchableHighlight } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const Button = ({ onPress, title, colors = ["bg-yellow-300", "#FBBF24"] }) => {
    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor={colors[1]}
            style={{
                backgroundColor: COLORS.orange,
                borderRadius: 10,
                paddingTop: 11,
                paddingBottom: 11,
                paddingLeft: 5,
                paddingRight: 5,
                marginTop: 10,
            }}>
            <Text style={{ textAlign: "center", fontSize: SIZES.body2 }}>{title}</Text>
        </TouchableHighlight>
    );
};

export default Button;
