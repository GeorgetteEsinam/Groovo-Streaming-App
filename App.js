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
import GenrePlaylist from './components/MainHomeScreens/SearchScreens/GenrePlaylist'
import PlaylistSongs from './components/MainHomeScreens/SearchScreens/PlaylistSong'
import { PlayerProvider } from './components/MainHomeScreens/Mockdata/PlayerContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeNavigation"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}