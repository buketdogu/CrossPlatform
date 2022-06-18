import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, FlatList, TouchableHighlight,SafeAreaView,Button} from 'react-native';





export function ToDoListPage(props) {
  

    const apiURL = 'https://jsonplaceholder.typicode.com/todos';

    const [listData, setlistData] = useState([]);

    

    
    useEffect(() => {

        fetch(apiURL)
            .then((res) => res.json())
            .then((data) => {

                setlistData(data);
                

            })

    }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
       <FlatList
                  data={listData
                    }
                  renderItem={({ item }) => (
                    <>
                    
                      <View style={styles.row}>
                        <Text style={styles.font}>{item.title}</Text>
                      </View>
                     
                      
                    </>
                    
                  )}
                  
                />
                
                </View>
                <View style={styles.footer}>
                <View style={styles.buttonContainer}>
                <Button onPress={()=> props.navigation.navigate("PostListPage")} title="Post List" color={"black"}></Button>
                </View>
                <View style={styles.buttonContainer}>
                <Button onPress={()=> props.navigation.navigate("AlbumListPage")} title="Album List" color={"black"}></Button>
                </View>
                <View style={styles.buttonContainer}>
                <Button onPress={()=> props.navigation.navigate("UserListPage")} title="User List" color={"black"}></Button>
                </View>
                </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#FCFBF5",
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  listContainer: {
    display:"flex",
    marginTop:30,
    height:500,
    width:300,
    
    
  },
  font:{
  fontWeight:'bold',
  margin:5,
  borderWidth:3,
  

  },
 buttonContainer:{
  justifyContent:"center",
   alignItems:"center",
   width:120,
  marginTop:10,
  borderRadius:10,
  
 },
 footer:{
  flex:1,
  flexDirection:"column",
  justifyContent:"flex-start",
  alignItems:'center',
  
 }
  
});
