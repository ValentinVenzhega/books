import React from "react";
import { View, Text } from "react-native";
import { COLORS, SIZES } from "../../../../constants";
import { useAuth } from "../../../hooks/useAuth";
// import Button from "../../ui/Button";
import Layout from "../../ui/Layout";

const Profile = () => {
    const { isAuth, setIsAuth } = useAuth();

    const exitHandler = async () => {
        if (isAuth === "true") {
            await AsyncStorage.setItem("token", "");
        }
    };

    return (
        <Layout>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    marginLeft: 40,
                    marginRight: 40,
                }}>
                {isAuth ? (
                    <>
                        <Text
                            style={{
                                color: COLORS.white,
                                fontSize: SIZES.h2,
                                textAlign: "center",
                                paddingBottom: SIZES.padding,
                            }}>
                            Авторизован
                        </Text>
                        {/* <Text style={{ color: COLORS.white, fontSize: SIZES.h3, textAlign: "center" }}>test@text.ru</Text>
                        <Button onPress={exitHandler} title={`Exit`} /> */}
                    </>
                ) : (
                    <Text
                        style={{
                            color: COLORS.white,
                            fontSize: SIZES.h2,
                            textAlign: "center",
                            paddingBottom: SIZES.padding,
                        }}>
                        Profile
                    </Text>
                )}
            </View>
        </Layout>
    );
};

export default Profile;
