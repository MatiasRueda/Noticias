import { createStackNavigator } from "@react-navigation/stack";
import Buscar from "../../screens/Buscar";

const Stack = createStackNavigator();

export default function SSBuscar(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="buscar"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="buscar" component={Buscar} />
    </Stack.Navigator>
  );
}
