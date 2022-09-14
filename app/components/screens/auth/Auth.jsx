import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Pressable, Alert } from "react-native";
import { COLORS, FONTS } from "../../../../constants";

import { useAuth } from "../../../hooks/useAuth";

import Layout from "../../ui/Layout";
import Button from "../../ui/Button";
import Field from "../../ui/Field";
import Loader from "../../ui/Loader";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isReg, setIsReg] = useState(false);
    const [isLoading, setIsloading] = useState(false);

    const { setIsAuth } = useAuth();

    const authHandler = async () => {
        if (email && password) {
            if (email !== "test@test.ru") {
                return Alert.alert("Не верный E-mail");
            }

            if (password !== "12345") {
                return Alert.alert("Не верный пароль");
            }
            await AsyncStorage.setItem("token", "d55dtucyj776");
            setIsAuth(true);
        } else {
            Alert.alert("Поля не заполнены");
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
                <Text
                    style={{
                        textAlign: "center",
                        ...FONTS.body1,
                        color: COLORS.gray1,
                        fontWeight: "600",
                    }}>
                    {isReg ? "Sign Up" : "Sign in"}
                </Text>
                {isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <Field value={email} placeholder="Enter email: test@test.ru" onChange={setEmail} />
                        <Field value={password} placeholder="Enter password: 12345" onChange={setPassword} isSecure={true} />
                        <Button onPress={authHandler} title={`Let's go`} />

                        <Pressable onPress={() => setIsReg(!isReg)}>
                            <Text
                                style={{
                                    textAlign: "right",
                                    color: COLORS.gray1,
                                    ...FONTS.h4,
                                    marginRight: 10,
                                    marginTop: 10,
                                }}>
                                {isReg ? "Login" : "Register"}
                            </Text>
                        </Pressable>
                    </>
                )}
            </View>
        </Layout>
    );
};

export default Auth;
