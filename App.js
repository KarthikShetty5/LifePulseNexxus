import React from 'react';
import WelcomeScreen from './pages/WelcomeScreen';
import Login from './pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './pages/Home';
import HistoryPage from './pages/History';
import Description from './pages/description';
import Map from './pages/Map';
import Result from './pages/Result';
import SignUp from './pages/SignUp';
import Appointment from './pages/Appointment';
import ProfileScreen from './pages/ProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="History" component={HistoryPage} />
        <Stack.Screen name="Description" component={Description} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="Appoint" component={Appointment} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer >
  );
};

export default App;
