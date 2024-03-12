import { NavigationContainer } from "@react-navigation/native";
import SNavigation from "./src/components/smart/SNavigation";
import TemaContext from "./src/context/TemaContext";

export default function App() {
  return (
    <TemaContext>
      <NavigationContainer>
        <SNavigation />
      </NavigationContainer>
    </TemaContext>
  );
}
