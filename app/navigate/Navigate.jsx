import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import Profile from "../components/screens/profile/Profile";
import Favorite from "../components/screens/favorite/Favorite";
import Home from "../components/screens/home/Home";
import Settings from "../components/screens/setings/Setings";

import { COLORS } from "../../constants";

const Navigate = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ size, color }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = "home";
                    } else if (route.name === "Favorite") {
                        iconName = "bookmark";
                    } else if (route.name === "Settings") {
                        iconName = "settings";
                    } else if (route.name === "Profile") {
                        iconName = "person";
                    }
                    return <Ionicons name={iconName} color={color} size={size} />;
                },
                tabBarShowLabel: false,
                tabBarStyle: [
                    {
                        height: "6%",
                        backgroundColor: COLORS.black,
                    },
                ],
                tabBarActiveTintColor: COLORS.orange,
                tabBarInactiveTintColor: COLORS.myGray,
            })}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Favorite" component={Favorite} options={{ headerShown: false }} />
            <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default Navigate;
