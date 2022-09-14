import React from "react";
import { useSelector } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "../../../../constants";
import MyBlockFavorite from "./myBlockFavorite/MyBlockFavorite";

const MyFavorite = ({ navigation }) => {
    const favorite = useSelector((state) => state.favorites.favorites);

    return (
        <>
            {favorite.length < 1 ? null : (
                <View style={{ paddingTop: 15, paddingHorizontal: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ ...FONTS.h2, color: COLORS.white }}>My Book</Text>
                        <TouchableOpacity>
                            <Text style={{ ...FONTS.body, color: COLORS.white }}> see more</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{}}>
                        <MyBlockFavorite favorite={favorite} navigation={navigation} />
                    </View>
                </View>
            )}
        </>
    );
};

export default MyFavorite;
