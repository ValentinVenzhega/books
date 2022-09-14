import React, { FC } from "react";
import { TextInput } from "react-native";
import { COLORS, FONTS } from "../../../constants";

const Field = ({ placeholder, onKeyPress, onChange, value, isSecure }) => {
    return (
        <TextInput
            onKeyPress={onKeyPress}
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            secureTextEntry={isSecure}
            autoCapitalize="none"
            style={{
                backgroundColor: COLORS.lightGray3,
                borderRadius: 10,
                padding: 10,
                marginTop: 10,
                ...FONTS.body3,
            }}
        />
    );
};

export default Field;
