import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({CreateNewPost, ...props}) => {
    const [post, setPost] = useState({title: '', content: ''})

    const AddNewPost = (event) => {
        event.preventDefault()
        const NewPost = {
            id: Date.now(),
            ...post
        }
        CreateNewPost(NewPost)
        setPost({title: '', content: ''})
    };

    return (
        <form>
            <MyInput  value={post.title} type='text' placeholder='Название' onChange={event => setPost({...post, title: event.target.value})}/>
            <MyInput value={post.content} type='text' placeholder='Содержимое' onChange={event => setPost({...post, content: event.target.value})}/>
            <MyButton onClick={AddNewPost}>Создать</MyButton>
        </form>
    );
};

export default PostForm;