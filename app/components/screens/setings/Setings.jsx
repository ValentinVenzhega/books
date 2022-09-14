import React from "react";
import { View, Text } from "react-native";
import { COLORS, SIZES } from "../../../../constants";
import Layout from "../../ui/Layout";
const Settings = () => {
    return (
        <Layout>
            <View>
                <Text
                    style={{
                        color: COLORS.white,
                        fontSize: SIZES.h2,
                        textAlign: "center",
                        paddingBottom: SIZES.padding,
                    }}>
                    Setting
                </Text>
            </View>
        </Layout>
    );
};

export default Settings;
