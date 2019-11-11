import React, { useContext, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'

const UsersScreen = ({navigation}) => {
    const {state, getUsers} = useContext(Context);
    const { users } = state;

    useEffect(() => {
        getUsers();

        const listener = navigation.addListener('didFocus', () => {
            getUsers()
        });
        return () => {
            listener.remove();
        };
    }, [])

    return (
        <View>
            <FlatList 
                data={users}
                keyExtractor={(user) => user.firstName}
                renderItem={({item}) => {
                    return <Text style={styles.item}>{item.firstName} {item.lastName}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 5,
        borderBottomWidth: 4,
        borderColor: 'green',
        paddingVertical: 10
    }
})

export default UsersScreen;
