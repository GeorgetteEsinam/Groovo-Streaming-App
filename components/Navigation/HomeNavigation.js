import "react-native-gesture-handler"; // Must be at the top
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Search, LibraryBig } from "lucide-react-native";
//import { PlayerProvider } from "../MainHomeScreens/Mockdata/PlayerContext";
//import MiniPlayer from "../MainHomeScreens/MiniPlayer/MiniPlayer";
import SearchTab from "../MainHomeScreens/SearchScreens/GenrePlaylist"; // Ensure SearchScreen is imported
import LibraryTab from "../MainHomeScreens/LibraryTab/Library/Library";

// Dummy Screen Components
function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Home Screen</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={styles.screenContainer}>
      <SearchTab />
    </View>
  );
}

function LibraryScreen() {
  return (
    <View style={styles.screenContainer}>
      <LibraryTab />
    </View>
  );
}

// Navigators
const Tab = createBottomTabNavigator();

// App Root Component
export default function App() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let IconComponent

            if (route.name === "Home") {
              IconComponent = Home
            } else if (route.name === "Search") {
              IconComponent = Search
            } else if (route.name === "Your Library") {
              IconComponent = LibraryBig
            }

            return IconComponent
              ? React.createElement(IconComponent, {
                  size,
                  color,
                  strokeWidth: focused ? 3 : 1.5,
                  fill: focused ? color : "none",
                })
              : null
          },
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#A0A0A0",
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Your Library" component={LibraryScreen} />
      </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#000000",
    height: 80,
    paddingBottom: 10,
    paddingTop: 10,
  },
  tabBarLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  screenText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
})