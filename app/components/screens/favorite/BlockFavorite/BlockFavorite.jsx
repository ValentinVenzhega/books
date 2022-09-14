import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../../../../constants";
import { FavoriteItem } from "../../../ui/FavoriteItem";

const BlockFavorite = ({ favorite, navigation }) => {
    const renderItem = ({ item }) => {
        return (
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding2,
                    alignItems: "center",
                }}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("BookDetail", {
                            book: item,
                        })
                    }>
                    {/* Book Cover */}
                    <Image
                        source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
                        resizeMode="cover"
                        style={{
                            width: 180,
                            height: 250,
                            borderRadius: 20,
                        }}
                    />

                    {/* Book Info */}
                    <View
                        style={{
                            flex: 1,
                            marginTop: SIZES.radius,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                        <Image
                            source={icons.clock_icon}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.white,
                            }}
                        />
                        <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.white }}>3d 5h</Text>

                        <Image
                            source={icons.page_icon}
                            style={{
                                marginLeft: SIZES.radius,
                                width: 20,
                                height: 20,
                                tintColor: COLORS.white,
                            }}
                        />
                        <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.white }}>
                            {/* {item.completion} */}
                            75%
                        </Text>
                    </View>
                    <View
                        style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: 45,
                            height: 40,
                            backgroundColor: COLORS.lightGray4,
                            zIndex: 5,
                            borderRadius: SIZES.radius,
                        }}>
                        <FavoriteItem item={item} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <View>
            <FlatList
                data={favorite}
                renderItem={renderItem}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}
            />
        </View>
    );
};

export default BlockFavorite;
