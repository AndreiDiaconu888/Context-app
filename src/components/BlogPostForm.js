import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.label}>Enter title:</Text>
            <TextInput value={title} onChangeText={(title) => setTitle(title)} style={styles.input}/>
            <Text style={styles.label}>Enter content:</Text>
            <TextInput value={content} onChangeText={(content) => setContent(content)} style={styles.input}/>
            <Button 
                title="Save Blog Post" 
                onPress={() => onSubmit(title, content)}
            />
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: "",
        content: ""
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginHorizontal: 5,
        fontSize: 18,
        marginBottom: 5
    },
    label: {
        marginBottom: 10,
        marginLeft: 5
    }
});

export default BlogPostForm;
