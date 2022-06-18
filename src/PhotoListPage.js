import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight,SafeAreaView,Dimensions,Image,Button} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function PhotoListPage(props) {
  

    const apiURL = `https://jsonplaceholder.typicode.com/photos/${props.route.params.photoid}`;

    const [photoData, setPhotoData] = useState([]);



    
    useEffect(() => {

        fetch(apiURL)
            .then((res) => res.json())
            .then((data) => {

                setPhotoData(data);
                

            })

    }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        
      </View>
      <View style={styles.body}>
      <Text style={styles.title}>Title: {photoData.title}</Text>
        <Text>ID: {photoData.id}</Text>
        <Text>Album ID: {photoData.albumId}</Text>
        <View>
        <Image style={{ width: 200, height: 200 }} 
        source={{ uri: `${photoData.url}` }} />
        </View>
        </View>
        <View style={styles.footer}>
        <View style={styles.buttonContainer}>
                <Button onPress={()=> props.navigation.navigate("UserListPage")} title="Return Home" color={"black"}></Button>
      </View>
      </View>

        
        
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBF5',
    width: windowWidth,
    height: windowHeight,
    
    
  },
  title:{
    fontWeight:"bold",
    fontSize: 15,
    marginBottom:30,
    
  },
  header:{
    height: (windowHeight * 5) / 100,
  },

  buttonContainer:{
  justifyContent:"center",
   alignItems:"center",
   width:120,
  borderRadius:10,
 },
  
  body:{
    height: (windowHeight * 75) / 100,
    alignItems:"center",
    justifyContent:"flex-start",
  },
  footer:{
    height: (windowHeight * 5) / 100,
  },
});