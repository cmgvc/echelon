import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import WelcomeScreen from './screens/WelcomeScreen.js';
import AuthScreen from './screens/AuthScreen.js';
import DashboardScreen from './screens/DashboardScreen.js';

const Stack = createNativeStackNavigator();

export function useFontsLoader() {
  const [fontsLoaded] = useFonts({
    'EchelonFont': require('./assets/fonts/Jost/static/Jost-Light.ttf'),
  });

  return fontsLoaded;
}

export default function App() {
  const fontsLoaded = useFontsLoader();

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{
            animation: 'fade', 
            animationDuration: 1000,
          }} 
        />
        <Stack.Screen 
          name="Auth" 
          component={AuthScreen} 
          options={{
            animation: 'fade', 
            animationDuration: 100,
          }} 
        />
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{
            animation: 'slide_from_bottom', 
          }} 
        />
        {/*
        <Stack.Screen 
          name="CycleSetup" 
          component={CycleSetupScreen} 
          options={{ title: 'Cycle Setup', animation: 'fade' }} 
        />
        <Stack.Screen 
          name="WorkoutInput" 
          component={WorkoutInputScreen} 
          options={{ title: 'Your Workouts', animation: 'slide_from_right' }} 
        />
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
