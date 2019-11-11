import React, { useContext, useState } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from './../components/BlogPostForm';

const EditScreen = ({navigation}) => {

    const {state, editBlogPost} = useContext(Context);

    const id = navigation.getParam("id");
    const blogPost = state.find((blogPost) => blogPost.id === id);

    return <BlogPostForm 
        onSubmit={(newTitle, newContent) => {
            editBlogPost(id, newTitle, newContent, () => {
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
