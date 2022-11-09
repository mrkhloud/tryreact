import React, {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList.jsx'
import PostForm from'./components/PostForm.jsx'

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "ogjsolg", content: "sgsdhg"}]);

    const CreateNewPost = (NewPost) => {
        setPosts([...posts, NewPost])
    };

    const DeletePost = (Post) => {
        setPosts(posts.filter(post => post.id !== Post.id))
    };

    return (
        <div className="App">
            <PostForm CreateNewPost={CreateNewPost}/>
            {posts.length !== 0
                ? <PostList DeletePost={DeletePost} posts={posts} title={'Список публикаций'}/>
                : <h1 style={{textAlign: "center"}}>Нет публикаций</h1>

            }

        </div>
    );
}

export default App;
