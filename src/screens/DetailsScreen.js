import React from "react";
import { View, Text } from "react-native";

export default function DetailScreen({ route }) {
  // Recebendo o parâmetro "itemId"
  const { itemId } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tela de Detalhes</Text>
      <Text>Item ID: </Text>
    </View>
  );
}
