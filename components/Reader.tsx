import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MangaImageLoader from "./MangaImageLoader";

export interface MangaDesc {
  title: string | undefined;
  description: string | undefined;
}
const Reader: React.FC<MangaDesc> = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <MangaImageLoader chapter={33} />
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

export default Reader;
