import React, { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../../ui/Layout";
import BlockData from "./blockData/BlockData";
import MyFavorite from "../favorite/MyFavorite";
import Loader from "../../ui/Loader";
import Field from "../../ui/Field";
import Button from "../../ui/Button";
import { View } from "react-native";

const Home = ({ navigation }) => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("react");
    const [isLoading, setIsLoading] = useState(true);

    const searchBook = (evt) => {
        console.log(evt.key);
    };

    useEffect(() => {
        const API_KEY = "AIzaSyDZZoGDjeIQ53XWmVusqU6_SrYFeMn4fs4";
        const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}&maxResults=6`;

        async function fetchData() {
            try {
                const itemsResponse = await axios.get(`${API_URL}`);
                setBooks(itemsResponse.data.items);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (
        <Layout>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                        <View style={{ width: "60%" }}>
                            <Field onKeyPress={searchBook} val={search} placeholder="Search" onChange={(value) => setSearch({ search: value })} />
                        </View>

                        <View style={{ marginLeft: 10, width: "30%" }}>
                            <Button onPress={searchBook} title={`Search`} />
                        </View>
                    </View>

                    <MyFavorite navigation={navigation} />
                    <BlockData books={books} navigation={navigation} />
                </>
            )}
        </Layout>
    );
};

export default Home;
