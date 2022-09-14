import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addFavorite, deleteFavorite } from "../../redux/favorites/favoriteSlice";

import { Image, TouchableOpacity } from "react-native";
import { COLORS, icons } from "../../../constants";

export const FavoriteItem = ({ item }) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.favorites.favorites);

    const isItemsInFavorite = items.some((favorite) => favorite.id === item.id);

    const onClickFavorite = (e) => {
        if (isItemsInFavorite) {
            dispatch(deleteFavorite(item.id));
        } else {
            dispatch(addFavorite(item));
        }
    };

    return (
        <TouchableOpacity
            style={{ position: "absolute", top: 5, right: 10 }}
            onPress={onClickFavorite}>
            <Image
                source={isItemsInFavorite ? icons.bookmark_fill_icon : icons.bookmark_icon}
                resizeMode="contain"
                style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.white,
                }}
            />
        </TouchableOpacity>
    );
};
