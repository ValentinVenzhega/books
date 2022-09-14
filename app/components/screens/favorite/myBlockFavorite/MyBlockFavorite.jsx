import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../../../../constants";
import { FavoriteItem } from "../../../ui/FavoriteItem";

const MyBlockFavorite = ({ favorite, navigation }) => {
    const renderItem = ({ item, index }) => {
        return (
            <View
                style={{
                    flex: 1,
                    marginRight: SIZES.radius,
                    marginLeft: index === 0 ? SIZES.padding : 0,
                    paddingTop: 20,
                }}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("BookDetail", {
                            book: item,
                        })
                    }>
                    {/* Book Cover */}
                    <Image
                        source={{ uri: item.volumeInfo.imageLinks.smallThumbnail }}
                        resizeMode="cover"
                        style={{
                            width: 140,
                            height: 200,
                            borderRadius: 20,
                        }}
                    />

                    {/* Book Info */}
                    <View
                        style={{
                            marginTop: 10,
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
                showsHorizontalScrollIndicator={false}
                scrollEnabled={true}
                horizontal
            />
        </View>
    );
};

export default MyBlockFavorite;
