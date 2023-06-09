import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>React Native</Text>
       <Image
  source={{ uri: 'https://cdn.pixabay.com/photo/2012/02/28/10/23/bee-18192_1280.jpg' }}
  style={{ width: 200, height: 200 }}
/>
<Image
  source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/bee-1850116_1280.jpg' }}
  style={{ width: 200, height: 200 }}
/>
<Image
  source={{ uri: 'https://cdn.pixabay.com/photo/2018/04/29/18/01/bee-3360682_1280.jpg' }}
  style={{ width: 200, height: 200 }}
/>

  </View>  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});