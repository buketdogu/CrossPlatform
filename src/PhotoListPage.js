import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight,SafeAreaView,Dimensions,Image,Button} from 'react-native';


export function PhotoListPage(props) {
  

      const apiURL = `https://jsonplaceholder.typicode.com/photos?albumId=` + props.route.params.albumid;

    const [photoData, setphotoData] = useState([]);



    
    useEffect(() => {

        fetch(apiURL)
            .then((res) => res.json())
            .then((data) => {

                setphotoData(data);
                

            })

    })

  return (
    <SafeAreaView style={styles.container}><View style={styles.listContainer}>
       <FlatList
                  data={photoData
                    }
                  renderItem={({ item }) => (
                    <>
                    
                      <View style={styles.row}>
                        <Text style={styles.font}>{item.title}</Text>
                           
                      </View>
                       <View style={styles.row}>
                           <Image style={{ width: 200, height: 100}} 
                          source={{ uri: `${item.url}` }} /> 
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
    backgroundColor: '#FCFBF5',
    alignItems:"center",
    justifyContent:"center",
    
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
   marginTop: 100,
  borderRadius:10,
 },
  
 
  footer:{
    height: 65,
  },
});
