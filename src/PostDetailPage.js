import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

function PostDetailPage({ route }) {
    const [PostDetails, setPostDetails] = useState(0);

    const [loading, setLoading] = useState(true);

    const { postId } = route.params;



    const api = 'https://jsonplaceholder.typicode.com/posts/' + postId;

    useEffect(() => {

        fetch(api)
            .then(res => res.json())
            .then((data) => {

                setPostDetails(data);
                setLoading(false);

            });
    });

    return (
        <>
            {
                loading == true ? <ActivityIndicator size="large" /> : <>
                    <Text>User ID: {PostDetails.userId}</Text>
                    <Text>Title: {PostDetails.title}</Text>
                    <Text>Body: {PostDetails.body}</Text>
                </>
            }
        </>
    );
}

export default PostDetailPage;
