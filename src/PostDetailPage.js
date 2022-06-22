import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight,SafeAreaView,Dimensions,Button} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function PostDetailPage(props) {
  

    const apiURL = `https://jsonplaceholder.typicode.com/posts/${props.route.params.postid}`;

    const [postData, setPostData] = useState([]);



    
    useEffect(() => {

        fetch(apiURL)
            .then((res) => res.json())
            .then((data) => {

                setPostData(data);
                

            })

    }, )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      </View>
      <View style={styles.body}>
        
        <Text style={styles.title}>Title: {postData.title}</Text>
        <Text>{postData.body}</Text>
        </View>
        <View style={styles.footer}>
          
          <View style={styles.buttonContainer}>
                  <Button onPress={()=> props.navigation.navigate("CommentListPage", {postsid:postData.id})} title="Comments For This Post" color={"black"}></Button>   
      </View>
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
    alignItems:"center",
    justifyContent:"center",
    
  },
  title:{
    fontWeight:"bold",
    fontSize: 15,
    marginBottom: 15,
    
  },
  
  header:{
    height: (windowHeight * 5) / 100,
  },
  buttonContainer:{
  justifyContent:"center",
   alignItems:"center",
   width:120,
  borderRadius:10,
  marginBottom: 10,
  
 },
  body:{
    height: (windowHeight * 65) / 100,
    justifyContent:"center",
  },
  footer:{
    height: (windowHeight * 5) / 100,
  },
});
