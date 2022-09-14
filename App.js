import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";
import { useState } from "react";
import Navigate from "./app/navigate/Navigate";
import BookDetail from "./app/components/screens/home/bookDetail/BookDetail";
import { AuthContext } from "./app/hooks/authContext";
import Auth from "./app/components/screens/auth/Auth";
const Stack = createNativeStackNavigator();

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            <Provider store={store}>
                <StatusBar style="light" backgroundColor="black" />
                {!isAuth ? (
                    <Auth />
                ) : (
                    <NavigationContainer>
                        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"One"}>
                            <Stack.Screen name="One" component={Navigate} />
                            <Stack.Screen name="BookDetail" component={BookDetail} />
                        </Stack.Navigator>
                    </NavigationContainer>
                )}
            </Provider>
        </AuthContext.Provider>
    );
};

export default App;
