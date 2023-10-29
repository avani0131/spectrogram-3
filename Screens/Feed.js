import React, { useState } from 'react';
import { Text } from 'nativereact-';
import (PostCard)

function App() {
  const [text, setText] = useState('This is a simple feed text.');

  return (
    <Text>{text}</Text>
  );
}

const RenderItem = ({ post }) => {
  return (
    <PostCard
      post={post}
    />
  );
};

export default App;


return (
  <View style={styles.container}>
  <SafeAreaView style={styles.droidSafeArea} />
  <View style={styles.appTitle}>
  <View style={styles.appIcon}>
  <Image
  source={require("../assets/logo.png")}
  style={styles.iconImage}
  ></Image>
  </View>
  <View style={styles.appTitleTextContainer}>
  <Text style={styles.appTitleText}>Spectagram</Text>
  </View>
  </View>
  <View style={styles.cardContainer}>
  <FlatList
  keyExtractor={this.keyExtractor}
  data={stories}
  renderItem={this.renderItem}
  />

</View>
</View>
);

const renderItem = ({ item }) => {
  return (
    <PostCard post={item} />
  );
};

import React, { useState } from "react";
import { FlatList } from "react-native";

const PostCard = ({ post }) => {
  return (
    <View>
      <Image
        source={post.image}
        style={{ width: 100, height: 100 }}
      />
      <Text>{post.title}</Text>
      <Text>{post.description}</Text>
    </View>
  );
};

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: require("./assets/image1.jpg"),
      title: "Post 1",
      description: "This is the first post."
    },
    {
      id: 2,
      image: require("./assets/image2.jpg"),
      title: "Post 2",
      description: "This is the second post."
    },
    {
      id: 3,
      image: require("./assets/image3.jpg"),
      title: "Post 3",
      description: "This is the third post."
    }
  ]);

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostCard post={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default App;



const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "black”
},
droidSafeArea: {
marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
},
appTitle: {
flex: 0.07,
flexDirection: "row"
},
appIcon: {
flex: 0.3,
justifyContent: "center",
alignItems: "center"
},
iconImage: {
width: "100%",
height: "100%",
resizeMode: "contain"
},
