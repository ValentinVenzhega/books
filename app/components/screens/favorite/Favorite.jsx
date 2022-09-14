import React from "react";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import Layout from "../../ui/Layout";
import { COLORS, SIZES } from "../../../../constants";
import BlockFavorite from "./BlockFavorite/BlockFavorite";

const Favorite = ({ navigation }) => {
    const favorite = useSelector((state) => state.favorites.favorites);
    return (
        <Layout>
            <Text
                style={{
                    color: COLORS.white,
                    fontSize: SIZES.h2,
                    textAlign: "center",
                    paddingBottom: SIZES.padding,
                }}>
                My Favorite
            </Text>
            <View>
                <BlockFavorite favorite={favorite} navigation={navigation} />
            </View>
        </Layout>
    );
};

export default Favorite;
