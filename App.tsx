import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Reader from "./components/Reader";
import { MangaProvider } from "./context/MangaContext";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <MangaProvider>
        <Header title="Manga Reader" chapter={30} />
        <Reader title="Kimi no Todoke" description="Manga Desc" />
      </MangaProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});

export default App;
