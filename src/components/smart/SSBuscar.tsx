import { createStackNavigator } from "@react-navigation/stack";
import Buscar from "../../screens/Buscar";
import Seccion from "../../screens/Seccion";

const Stack = createStackNavigator();

export default function SSBuscar(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="buscar"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="buscar" component={Buscar} />
      <Stack.Screen name="seccion" component={Seccion} />
    </Stack.Navigator>
  );
}
