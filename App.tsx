import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const App: React.FC = () => {
  const [sisi, setSisi] = useState<string>("");
  const [hasil, setHasil] = useState<number | string | null>(null);

  const hitungLuas = () => {
    if (sisi !== "") {
      const nilai = parseFloat(sisi);
      if (!isNaN(nilai)) {
        setHasil(nilai * nilai);
      } else {
        setHasil("Input tidak valid!");
      }
    } else {
      setHasil("Masukkan angka dulu!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>📐 Hitung Luas Persegi</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan panjang sisi"
        keyboardType="numeric"
        value={sisi}
        onChangeText={setSisi}
      />
      <Button title="Hitung" onPress={hitungLuas} />
      {hasil !== null && <Text style={styles.hasil}>Luas Persegi: {hasil}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  judul: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: "white",
    textAlign: "center",
  },
  hasil: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "600",
  },
});

export default App;
