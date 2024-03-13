import { NavigationContainer } from "@react-navigation/native";
import SNavigation from "./src/components/smart/SNavigation";
import TemaContext from "./src/context/TemaContext";
import EstadoContext from "./src/context/EstadoContext";
import SectionContext from "./src/context/SectionContext";

export default function App() {
  return (
    <TemaContext>
      <EstadoContext>
        <SectionContext>
          <NavigationContainer>
            <SNavigation />
          </NavigationContainer>
        </SectionContext>
      </EstadoContext>
    </TemaContext>
  );
}
