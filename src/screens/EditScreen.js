import React, { useContext, useState } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from './../components/BlogPostForm';

const EditScreen = ({navigation}) => {

    const {state, editBlogPost} = useContext(Context);

    const id = navigation.getParam("id");
    const blogPost = state.find((blogPost) => blogPost.id === id);
    
    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return <BlogPostForm 
        onSubmit={(title, content) => {
            editBlogPost(id, title, content, () => {
                navigation.pop(); 
            })
        }}
        initialValues={{
            title: blogPost.title, 
            content: blogPost.content
        }}
    />;
}

export default EditScreen;
