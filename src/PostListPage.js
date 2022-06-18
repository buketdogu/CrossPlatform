import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight,SafeAreaView,Button} from 'react-native';



export function PostListPage(props) {
  

    const apiURL = 'https://jsonplaceholder.typicode.com/posts';

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
        <View style={styles.listContainer}>
     {postData.map((item, key)=>{
        if (key < 20) {
            return (<TouchableHighlight key={key} onPress={()=> props.navigation.navigate("PostDetail", {postid:item.id})}>
                <Text style={styles.font}>{item.title}</Text> 
            </TouchableHighlight>)
            
        }
        
     })}
    <View style={styles.footer}>
      <View style={styles.buttonContainer}>
      <Button onPress={()=> props.navigation.navigate("AlbumList")} title="See Album List" color={"black"}></Button>
      </View>
      <View style={styles.buttonContainer}>
      <Button onPress={()=> props.navigation.navigate("Home")} title="See User List" color={"black"}></Button>
      </View>
      <View style={styles.buttonContainer}>
      <Button onPress={()=> props.navigation.navigate("ToDoList")} title="See ToDo List" color={"black"}></Button>
      </View>
      
      </View>
      </View>
        
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor:"#FAF597",
  },
  buttonContainer:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#2B84F0",
    width:120,
   marginLeft:13,
   borderRadius:10,
   
  },
  listContainer: {
    display:"flex",
    marginTop:30,
    height:600,
    width:415,
    
    
  },
  font:{
  fontWeight:'bold',
  margin:1,
  borderWidth:3,
  

  },
   footer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:'center',
    
   }
});
