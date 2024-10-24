import React from "react";
import { Button, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Button
        title="Ir para Cadastro"
        onPress={() => navigation.navigate("Cadastro")}
      />

      <Button
        color={"green"}
        title="Ir para Consulta"
        onPress={() => navigation.navigate("Consulta")}
      />
    </View>
  );
}
