import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight,SafeAreaView,Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function PostDetailPAge(props) {
  

    const apiURL = `https://jsonplaceholder.typicode.com/posts/${props.route.params.postid}`;

    const [postData, setPostData] = useState([]);



    
    useEffect(() => {

        fetch(apiURL)
            .then((res) => res.json())
            .then((data) => {

                setPostData(data);
                

            })

    }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      </View>
      <View style={styles.body}>
        
        <Text style={styles.title}>Title:{postData.title}</Text>
        <Text>Body:{postData.body}</Text>
        <Text>User ID:{postData.userId}</Text>
        <Text>ID:{postData.id}</Text>
        </View>
        <View style={styles.footer}>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF597',
    width: windowWidth,
    height: windowHeight,
    
    
  },
  title:{
    fontWeight:"bold",
    fontSize: 20,
    marginBottom:30,
    
  },
  header:{
    height: (windowHeight * 5) / 100,
  },
  
  body:{
    height: (windowHeight * 90) / 100,
    alignItems:"center",
    justifyContent:"flex-start",
  },
  footer:{
    height: (windowHeight * 5) / 100,
  },
});
