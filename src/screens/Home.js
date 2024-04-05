import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, FlatList } from "react-native";
import MusicItem from "../components/MusicItem";

export default function Home({ navigation }) {
  const [currentPlaying, setCurrentPlaying] = useState(null);
 const [musicData, setMusicData] = useState([]);
  const item = {
    id: 1,
    title: "Young and beautiful",
    group: "AC/DC",
    album_image:
      "https://i.discogs.com/zjMkOcLUu2f3jJ0CzZrZa_5ZszuIajRbM8NhPm6ZWAg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc0Mjcw/OTUtMTQ0MTI5OTQ2/NC03NjUyLnBuZw.jpeg",
    album: "Lazy Sunday 3",
    year: 2013,
    genre: "Pop",
    }

  useEffect(()=> {
    fetch("http://10.0.2.2:3000/musics")
   .then((response)=>response.json())
    .then((data) =>setMusicData(data));
  },[])

 
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Text style={styles.title}>Minhas Músicas</Text>
      


         <FlatList
         data={musicData}
         keyExtractor={(item)=> item.id.toString()}
         renderItem={({item}) => (
          <MusicItem
          IsPlaying={() => currentPlaying == item.id}
          music={item}
          navigation={navigation}
          onPlayPause={() => { }}
         /> 
         )} 
         />



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddinTop: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    marginLeft: 20,



  },
})








