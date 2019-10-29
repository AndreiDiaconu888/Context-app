import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({navigation}) => {
    const { state, deletePost } = useContext(Context);

    return (
        <View>
            <FlatList 
                data={state}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                            <View style={styles.row}>
                                <Text>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deletePost(item.id)}>
                                    <Feather name="trash" style={styles.image}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(blogPost) =>  blogPost.title}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
      headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />  
      </TouchableOpacity>
      )
    };
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'red'
    },
    title: {
        fontSize: 18
    },
    image: {
        fontSize: 24,
        marginRight: 5
    }
});

export default IndexScreen;
