import { Text, View, TextInput, StyleSheet, TextStyle } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSectionContext } from "../../context/SectionContext";
import { seccionValida } from "../../auxiliar/seccionValida";

export default function SFBusqueda(props: { color: string }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      busqueda: "",
    },
  });

  const section = useSectionContext();
  const navigate = useNavigation();

  const error: TextStyle = {
    color: props.color,
  };

  const onSubmit = (data: { busqueda: string }) => {
    section.agregarSection(data.busqueda.toLowerCase());
    navigate.navigate("seccion" as never);
    reset();
  };

  return (
    <View style={estilos.formulario}>
      <View style={estilos.contFormulario}>
        <View style={estilos.contInput}>
          <Controller
            control={control}
            rules={{
              required: true,
              validate: seccionValida,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Search"
                style={estilos.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="busqueda"
          />
          {errors.busqueda?.type === "required" && (
            <Text style={[error, estilos.error]}>This is required.</Text>
          )}
          {errors.busqueda && (
            <Text style={[error, estilos.error]}>Invalid section.</Text>
          )}
        </View>
        <Feather
          name="search"
          style={{ backgroundColor: "white" }}
          size={40}
          color="black"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  formulario: {
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },

  contFormulario: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  contInput: {
    height: 70,
  },

  input: {
    height: 40,
    width: 225,
    paddingLeft: 10,
    backgroundColor: "#ffffff",
  },

  error: {
    textAlign: "center",
  },
});
