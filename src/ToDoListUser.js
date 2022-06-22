import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, FlatList, TouchableHighlight,SafeAreaView,Button} from 'react-native';





export function ToDoListUser(props) {
  

        const apiURL = 'https://jsonplaceholder.typicode.com/todos?userId=' + props.route.params.userid;
     
 
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
                      {item.completed.toString() == "true" ? <Text>☑ - {item.title}</Text> : '☐ - ' + item.title  }
                      </View>
                    
                    </>
                  )}
                  
                />
              <View style={styles.footer}>
                <View style={styles.buttonContainer}>
                <Button onPress={()=> props.navigation.navigate("UserListPage")} title="Return Home" color={"black"}></Button>
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
    backgroundColor:"#FCFBF5",
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  listContainer: {
    display:"flex",
    marginTop:30,
    height:400,
    width:200,
    
    
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
