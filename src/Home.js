import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer } from '@react-navigation/native';




function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: "#555555" }}>
            <Button
              color
                title="User List Page"
                onPress={() => navigation.navigate('UserListPage')}
            />
            <Button
            color
                title="Post List Page"
                onPress={() => navigation.navigate('PostListPage')}
            />

        </View>
    );
}


export default Home;
