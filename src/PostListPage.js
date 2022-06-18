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
            return (<TouchableHighlight key={key} onPress={()=> props.navigation.navigate("PostDetailPage", {postid:item.id})}>
                <Text style={styles.font}>{item.title}</Text> 
            </TouchableHighlight>)
            
        }
        
     })}
    <View style={styles.footer}>
      <View style={styles.buttonContainer}>
      <Button onPress={()=> props.navigation.navigate("AlbumListPage")} title="Album List" color={"black"}></Button>
      </View>
      <View style={styles.buttonContainer}>
      <Button onPress={()=> props.navigation.navigate("UserListPage")} title="User List" color={"black"}></Button>
      </View>
      <View style={styles.buttonContainer}>
      <Button onPress={()=> props.navigation.navigate("ToDoListPage")} title="To Do List" color={"black"}></Button>
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor:"#FCFBF5",
  },

   buttonContainer:{
  justifyContent:"center",
   alignItems:"center",
   width:120,
  marginBottom:10,
  borderRadius:10,
  
 },

  listContainer: {
    display:"flex",
    marginTop:30,
    height:400,
    width:200,
    
    
  },
  font:{
  fontWeight:'bold',
  margin:1,
  borderWidth:3,
  

  },
   footer:{
    flex:1,
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:'center',
    
   }

  
});
