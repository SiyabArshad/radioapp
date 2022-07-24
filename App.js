import * as React from 'react';
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold, Montserrat_600SemiBold, useFonts } from "@expo-google-fonts/montserrat";
import { RFPercentage } from 'react-native-responsive-fontsize';

//screens
import LoginScreen from './app/screens/LoginScreen';
import SignupScreen from './app/screens/SignupScreen';
import HomeScreen from './app/screens/HomeScreen';
import Forgot from './app/screens/Forgot';
//config
import Colors from './app/config/Colors';
import {Authcontext} from "./Authentication"
const Stack = createStackNavigator();

export default function App() {
  const  { user } = Authcontext();
  const[load,setload]=React.useState(false)
  React.useEffect(()=>{
    setload(true)
    setTimeout(() => {
      setload(false)
    }, 2000);
  },[])
  
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_600SemiBold
  })

  if (!fontsLoaded||load)
  {
    return(    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
    <ActivityIndicator size={RFPercentage(6)} color={Colors.primary} />
    </View>
    )  
}

  return (
    user?<Protected></Protected>:<Base></Base>
  )
}


const Base=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="ForgotScreen" component={Forgot} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Protected=()=>{
  return(
 <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
// Happy Coding :)


