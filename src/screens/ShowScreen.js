import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
    const id  = navigation.getParam("id");
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: (
            <TouchableOpacity  
                onPress={() => navigation.navigate('Edit',{id: navigation.getParam("id")})}
            >
                <Feather name="edit-2" style={styles.edit}/>
            </TouchableOpacity>
        )
    };
}

const styles = StyleSheet.create({
    edit: {
        fontSize: 30
    }
})

export default ShowScreen;