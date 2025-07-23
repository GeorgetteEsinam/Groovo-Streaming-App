import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Authentication/Login/Login'
import Register from './components/Authentication/Register/Register'
import ForgotPassword from './components/Authentication/ForgotPassword/EnterDetails'
import EnterVerificationCode from './components/Authentication/ForgotPassword/EnterVerificationCode'
import ResetPassword from './components/Authentication/ForgotPassword/ResetPassword'
import Onboarding1 from './components/Onboarding/Info1'
import Onboarding2 from './components/Onboarding/Info2'
import HomeNavigation from './components/Navigation/HomeNavigation'
//import GenrePlaylist from './components/MainHomeScreens/SearchScreens/GenrePlaylist'
//import PlaylistSongs from './components/MainHomeScreens/SearchScreens/PlaylistSong'
import Library from './components/MainHomeScreens/LibraryTab/Library/Library.js';
import LibraryLikedSongs from './components/MainHomeScreens/LibraryTab/LibraryLikedSongs/LibraryLikedSongs.js'
import LibraryArtist from './components/MainHomeScreens/LibraryTab/LibraryArtist/LibraryArtist'
import LibraryPlaylist from './components/MainHomeScreens/LibraryTab/LibraryPlaylist/LibraryPlaylist.js'
import Download from './components/MainHomeScreens/LibraryTab/DownloadScreen/Download'
import ProfileScreen from "./components/MainHomeScreens/LibraryTab/ProfileScreen/ProfileScreen.js"
import SettingsScreen from "./components/MainHomeScreens/LibraryTab/SettingsScreen/SettingsScreen.js"
import LanguageSelection from "./components/MainHomeScreens/LibraryTab/LanguageSelection/LanguageSelection.js"
import StreamingQuality from "./components/MainHomeScreens/LibraryTab/StreamingQuality/StreamingQuality.js"
import LogoutConfirmation from "./components/MainHomeScreens/LibraryTab/LogoutConfirmation/LogoutConfirmation.js"
//import { PlayerProvider } from './components/MainHomeScreens/Mockdata/PlayerContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding1"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
         <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
         <Stack.Screen name="EnterVerificationCode" component={EnterVerificationCode} />
         <Stack.Screen name="ResetPassword" component={ResetPassword} />
         <Stack.Screen name="Onboarding1" component={Onboarding1} />
         <Stack.Screen name="Onboarding2" component={Onboarding2} />
         <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
         <Stack.Screen name="GenrePlaylist" component={GenrePlaylist} />
         <Stack.Screen name="PlaylistSongs" component={PlaylistSongs} />
         <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="LibraryLikedSongs" component={LibraryLikedSongs} />
        <Stack.Screen name="LibraryArtist" component={LibraryArtist} />
        <Stack.Screen name="LibraryPlaylist" component={LibraryPlaylist} />
        <Stack.Screen name="Download" component={Download} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="LanguageSelection" component={LanguageSelection} />
        <Stack.Screen name="StreamingQuality" component={StreamingQuality} />
        <Stack.Screen name="LogoutConfirmation" component={LogoutConfirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}