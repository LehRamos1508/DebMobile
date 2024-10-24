import React from "react";
import { Text, View, Button, Alert } from "react-native";

export default function ConsultaScreen() {
  const handlePress = () => {
    Alert.alert("Atenção", "Não há dados para serem consultados.");
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        gap: 2,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
        Consulta de Usuário
      </Text>

      <Button title="Consultar" color={"green"} onPress={handlePress} />
    </View>
  );
}
