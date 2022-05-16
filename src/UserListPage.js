import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const UserListPage = ({ navigation }) => {

    const [Users, setUsers] = useState({});

    const api = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {

        fetch(api)
            .then(res => res.json())
            .then((data) => {
                setUsers(data);
            });
    });

    const goToUserDetails = (id) => {
        navigation.navigate('UserDetailPage', { userId: id });
    };

    const renderUsers = ({ item }) => {
        return <>
            <TouchableOpacity onPress={() => goToUserDetails(item.id)}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
            </TouchableOpacity>
        </>;
    };

    return (
        <View>
            <FlatList
                data={Users}
                renderItem={renderUsers}
            />
        </View>
    );
};



export default UserListPage;
