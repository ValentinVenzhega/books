import React, { useEffect, useState, createContext, useMemo } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { Alert } from "react-native";
import { auth, logout, login, db, register } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoadingInitial, setIsLoadingInitial] = useState(true);
    const [isLoading, setIsloading] = useState(false);

    const registerHandler = async (email, password) => {
        setIsloading(true);
        try {
            const { user } = await register(email, password);

            await addDoc(collection(db, "users"), {
                _id: user.uid,
                displayName: "no name",
                // displayName: user.displayName || "no name",
            });
        } catch (error) {
            Alert.alert("error reg:", error);
        } finally {
            setIsloading(false);
        }
    };

    const loginHandler = async (email, password) => {
        setIsloading(true);
        try {
            await login(email, password);
        } catch (error) {
            Alert.alert("error login:", error);
        } finally {
            setIsloading(false);
        }
    };

    const logoutHandler = async () => {
        setIsloading(true);
        try {
            await logout();
        } catch (error) {
            Alert.alert("error logout:", error);
        } finally {
            setIsloading(false);
        }
    };

    useEffect(
        () =>
            onAuthStateChanged(auth, (user) => {
                setUser(user || null);
                setIsLoadingInitial(false);
            }),
        [],
    );

    const value = useMemo(
        () => ({
            user,
            isLoading,
            login: loginHandler,
            logout: logoutHandler,
            register: registerHandler,
        }),
        [user, isLoading],
    );

    return (
        <AuthContext.Provider value={value}>{!isLoadingInitial && children}</AuthContext.Provider>
    );
};
