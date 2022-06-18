import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight,SafeAreaView, Dimensions, Button} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export function UserDetailPage(props) {
  

    const apiURL = `https://jsonplaceholder.typicode.com/users/${props.route.params.userid}`;

    const [userData, setuserData] = useState([]);
   
    
    
    
    
    useEffect(() => {

        fetch(apiURL)
            .then((res) => res.json())
            .then((data) => {

                setuserData(data);
                

            })

    }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        </View>
        <View style={styles.body}>
        <Text style={styles.title}>Credential Information</Text>
      <Text>ID:{userData.id}</Text>
      <Text>Name:{userData.name}</Text>
      <Text>Username:{userData.username}</Text>
     
      
        <Text style={styles.title}>Residence Information</Text>
      <Text>Street:{userData.address?.street}</Text>
      <Text>Suite:{userData.address?.suite}</Text>
      <Text>City:{userData.address?.city}</Text>
      <Text>Zipcode:{userData.address?.zipcode}</Text>
      
      
      <Text style={styles.title}>Geolocation</Text>
      <Text>Lat:{userData.address?.geo.lat}</Text>
      <Text>Lng:{userData.address?.geo.lng}</Text>
      
      
      <Text style={styles.title}>Contact Information</Text>
      <Text>Phone:{userData.phone}</Text>
      <Text>Website:{userData.website}</Text>
      <Text>Company Name:{userData.company?.name}</Text>
      <Text>Catch Phrase:{userData.company?.catchPhrase}</Text>
      <Text>BS:{userData.company?.bs}</Text>
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
    alignItems:"center",
    justifyContent:"center",
    
    
  },
  title:{
    fontWeight:"bold",
    fontSize: 20,
    
  },
  header:{
    height: (windowHeight * 10) / 100,
  },

  buttonContainer:{
  justifyContent:"center",
   alignItems:"center",
   width:120,
  borderRadius:10,
 },
  
  body:{
    height: (windowHeight * 65) / 100,
  },
  footer:{
    height: (windowHeight * 5) / 100,
  },
});
