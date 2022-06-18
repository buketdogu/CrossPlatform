import React, { useState, useEffect, Component } from 'react';
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {UserListPage} from "./src/UserListPage.js";
import {UserDetailPage} from "./src/UserDetailPage.js";
import {PostListPage} from "./src/PostListPage.js";
import {PostDetailPage} from "./src/PostDetailPage.js";
import {AlbumListPage} from "./src/AlbumListPage";
import {PhotoListPage} from "./src/PhotoListPage";
import {ToDoListPage} from "./src/ToDoListPage";
const Stack = createStackNavigator();

export default function App(props) {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          headerMode={{
            headerShown: false,
          }}
        >
          
            <>
              <Stack.Screen name="UserListPage" component={UserListPage} />
              <Stack.Screen name="UserDetailPage" component={UserDetailPage} />
              <Stack.Screen name="PostListPage" component={PostListPage} />
              <Stack.Screen name="PostDetailPage" component={PostDetailPage} />
              <Stack.Screen name="AlbumListPage" component={AlbumListPage} />
              <Stack.Screen name="PhotoListPage" component={PhotoListPage} />
              <Stack.Screen name="ToDoListPage" component={ToDoListPage} />
            </>
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
