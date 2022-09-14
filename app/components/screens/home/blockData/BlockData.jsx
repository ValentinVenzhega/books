import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../../../../constants";
import { FavoriteItem } from "../../../ui/FavoriteItem";
const BlockData = ({ books, navigation }) => {
    const renderItem = ({ item }) => {
        return (
            <View style={{ marginBottom: 15 }}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("BookDetail", {
                            book: item,
                        })
                    }
                    style={{ flex: 1, flexDirection: "row" }}>
                    {/* Book Cover */}
                    <Image
                        source={{ uri: item.volumeInfo.imageLinks.smallThumbnail }}
                        resizeMode="cover"
                        style={{ width: 100, height: 150, borderRadius: 10 }}
                    />

                    <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                        {/* Book name and author */}
                        <View>
                            <Text
                                style={{
                                    paddingRight: SIZES.padding,
                                    ...FONTS.h2,
                                    color: COLORS.white,
                                }}>
                                {item.volumeInfo.title}
                            </Text>
                            <Text style={{ ...FONTS.h3, color: COLORS.white }}>{item.volumeInfo.authors}</Text>
                        </View>

                        {/* Book Info */}
                        <View style={{ flexDirection: "row", marginTop: SIZES.radius }}>
                            <Image
                                source={icons.page_filled_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.white,
                                }}
                            />
                            <Text
                                style={{
                                    ...FONTS.body4,
                                    color: COLORS.white,
                                    paddingHorizontal: SIZES.radius,
                                }}>
                                {item.volumeInfo.pageCount}
                            </Text>

                            <Image
                                source={icons.read_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.white,
                                }}
                            />
                            <Text
                                style={{
                                    ...FONTS.body4,
                                    color: COLORS.white,
                                    paddingHorizontal: SIZES.radius,
                                }}>
                                {/* {item.readed} */} 23k
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Bookmark Button */}
                <FavoriteItem item={item} />
            </View>
        );
    };
    return (
        <View style={{ flex: 1, marginTop: 15, paddingLeft: 10 }}>
            <View style={{ alignItems: "center" }}>
                <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: 20 }}>All Book</Text>
            </View>
            <FlatList
                data={books}
                renderItem={renderItem}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}
            />
        </View>
    );
};

export default BlockData;
