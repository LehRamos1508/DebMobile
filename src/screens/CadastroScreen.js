import React from "react";
import { Button, Text, View, TextInput, StyleSheet } from "react-native";

export default function CadastroScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
        Cadastro de Usuário
      </Text>

      <View style={{ marginBottom: 20 }}>
        <TextInput style={styles.input} placeholder="Nome" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Senha" />
      </View>

      <Button title="Cadastrar" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 60,
    marginTop: 3,
    marginBottom: 5,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 3,
  },
});
