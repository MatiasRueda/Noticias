import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SFBusqueda() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      busqueda: "",
    },
  });

  const navigate = useNavigation();
  const onSubmit = (data: any) => {
    navigate.navigate("section" as never);
  };

  return (
    <View style={estilos.formulario}>
      <View style={estilos.contFormulario}>
        <View style={estilos.contInput}>
          <Controller
            control={control}
            rules={{
              required: true,
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
          {errors.busqueda && <Text>This is required.</Text>}
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
    flex: 1,
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
});
