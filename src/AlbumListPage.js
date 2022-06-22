import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight,SafeAreaView,Button} from 'react-native';





export function AlbumListPage(props) {
  

    const apiURL = 'https://jsonplaceholder.typicode.com/albums?userId=' + props.route.params.userid;

    const [albumData, setalbumData] = useState([]);

    

    
    useEffect(() => {

        fetch(apiURL)
            .then((res) => res.json())
            .then((data) => {

                setalbumData(data);
                

            })

    }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
       <FlatList
                  data={albumData
                    }
                  renderItem={({ item }) => (
                    <>
                    <TouchableHighlight onPress={()=> props.navigation.navigate("PhotoListPage", {albumid:item.userId})}>
                      <View style={styles.row}>
                        <Text style={styles.font}>{item.title}</Text>
                      </View>
                      </TouchableHighlight>
                      
                    </>
                  )}
                  
                />
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
