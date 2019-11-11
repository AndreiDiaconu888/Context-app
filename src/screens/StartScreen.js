import React, { useContext } from 'react'
import { View, StyleSheet, Button, Text, FlatList } from 'react-native';
import { Context } from '../context/BlogContext'

const StartScreen = ({navigation}) => {
    const {state} = useContext(Context);
    const { users, blogPosts } = state; 



    return (
        <View>
            <Button style={styles.button} title="See blog posts" onPress={() => navigation.navigate('Index')}/>
            <Text>Posts:</Text>
            <FlatList 
                data={blogPosts}
                keyExtractor={(blog) => blog.title}
                renderItem={({item}) => {
                    return <Text style={styles.item}>{item.title}</Text>;
                }}
            />
            <Button style={styles.button} title="See users" onPress={() => navigation.navigate('Users')}/>
            <Text>Users:</Text>
            <FlatList 
                data={users}
                keyExtractor={(user) => user.firstName}
                renderItem={({item}) => {
                    return <Text style={styles.item}>{item.firstName} {item.lastName}</Text>;
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 10
    },
    item: {
        paddingVertical: 10,
        paddingHorizontal:5,
        borderBottomWidth: 2,
        borderColor: 'yellow'
    }
})

export default StartScreen;
