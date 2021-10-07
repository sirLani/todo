﻿import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.delete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginTop: 10,
  },
});

export default GoalItem;
