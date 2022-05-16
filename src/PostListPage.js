import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const PostListPage = ({ navigation }) => {

    const [Posts, setPosts] = useState({});

    const limit = '?_limit=20';

    const api = 'https://jsonplaceholder.typicode.com/posts' + limit;

    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then((data) => {
                setPosts(data);
            });
    });

    const goToPostDetails = (id) => {
        navigation.navigate('PostDetailPage', { postId: id });
    };

    const renderUsers = ({ item }) => {
        return <>
            <TouchableOpacity onPress={() => goToPostDetails(item.id)}>
                <Text style={{ fontSize: 25, fontWeight: 'medium' }}>{item.title}</Text>
            </TouchableOpacity>
        </>;
    };

    return (
        <View>
            <FlatList
                data={Posts}
                renderItem={renderUsers}
            />
        </View>
    );
};



export default PostListPage;
