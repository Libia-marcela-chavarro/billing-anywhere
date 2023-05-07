import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './scream/LoginStack/Login';
import HomeStack from './scream/HomeStack/Index';
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="Login" component={HomeStack} />
        <Stack.Screen name="Inventario" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

