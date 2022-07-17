import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View } from "react-native";

import React from "react";

const News = ({ imageUri, title, subText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.textBox}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.subText}>{subText}</Text>
        </View>
        <View style={styles.imageBox}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: imageUri }}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: "100%",
    borderColor: "lightblue",
    borderWidth: 1,
    flexDirection: "row",
  },
  textBox: {
    flex: 1,
    backgroundColor: "steelblue",
    padding: 16,
    justifyContent: "space-between",
  },
  imageBox: {
    width: 100,
    backgroundColor: "powderblue",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "red",
  },
});
