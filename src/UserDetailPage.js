import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

function UserDetailPage({ route }) {
    const [UserDetails, setUserDetails] = useState(0);

    const [loading, setLoading] = useState(true);

    const { userId } = route.params;


    const api = 'https://jsonplaceholder.typicode.com/users/' + userId;


    useEffect(() => {

        fetch(api)
            .then(res => res.json())
            .then((data) => {

                setUserDetails(data);
                setLoading(false);

            });
    });

    return (
        <>
            {
                loading == true ? <ActivityIndicator size="large" /> : <>
                    <Text>ID: {UserDetails.id}</Text>
                    <Text>Name: {UserDetails.name}</Text>
                    <Text>Username: {UserDetails.username}</Text>
                    <Text>Email: {UserDetails.email}</Text>
                    <Text>Street: {UserDetails.address.street}</Text>
                </>
            }
        </>
    );
}

export default UserDetailPage;
