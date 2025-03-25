import React, { useCallback } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
} from "react-native";
import images from "../components/requiredImage";
import CommentSection from "./CommentSection";
import { useManga } from "../context/MangaContext";

interface MangaImageLoaderProps {
  chapter: number;
}

const MangaImageLoader: React.FC<MangaImageLoaderProps> = ({ chapter }) => {
  const { isLoading, setIsLoading } = useManga();
  const chapterImages = images[chapter];

  const renderItem = useCallback(
    ({ item: key }: { item: string }) => {
      const intKey = parseInt(key, 10);
      return (
        <View style={styles.imageContainer}>
          <Image
            key={intKey}
            source={chapterImages[intKey]}
            style={styles.image}
            onLoadStart={() =>
              setIsLoading((prev) => ({ ...prev, [key]: true }))
            }
            onLoadEnd={() =>
              setIsLoading((prev) => ({ ...prev, [key]: false }))
            }
          />
          {isLoading[key] && (
            <ActivityIndicator
              style={styles.loader}
              size="large"
              color="#ffffff"
            />
          )}
        </View>
      );
    },
    [chapterImages, isLoading, setIsLoading]
  );

  return (
    <FlatList
      data={Object.keys(chapterImages)}
      renderItem={renderItem}
      keyExtractor={(key) => key}
      maxToRenderPerBatch={3}
      windowSize={5}
      initialNumToRender={2}
      ListFooterComponent={CommentSection}
      contentContainerStyle={styles.container}
    />
  );
};
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    position: "relative",
  },
  image: {
    width: screenWidth,
    height: screenWidth * 1.5,
    resizeMode: "cover",
    margin: 0,
    padding: 0,
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -15 }, { translateY: -15 }],
  },
});

export default MangaImageLoader;
