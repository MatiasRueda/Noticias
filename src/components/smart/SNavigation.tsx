import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Inicio from "../../screens/Inicio";
import MasVistos from "../../screens/MasVistos";
import Opciones from "../../screens/Opciones";
import SSBuscar from "./SSBuscar";

const Tab = createBottomTabNavigator();

export default function SNavigation(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 75 },
        tabBarItemStyle: { justifyContent: "center", alignItems: "center" },
        tabBarShowLabel: false,
      }}
      initialRouteName="Inicio"
    >
      <Tab.Screen
        name="inicio"
        component={Inicio}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={24}
              color={focused ? "red" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="masVistos"
        component={MasVistos}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="star"
              size={24}
              color={focused ? "red" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="sSBuscar"
        component={SSBuscar}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="search1"
              size={24}
              color={focused ? "red" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="opciones"
        component={Opciones}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="menu" size={24} color={focused ? "red" : "black"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
