import { Text, SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import CadastroScreen from "./src/screens/CadastroScreen";
import ConsultaScreen from "./src/screens/ConsultaScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Consulta" component={ConsultaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
