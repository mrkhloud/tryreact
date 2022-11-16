import React, {useState, useMemo} from 'react';
import './styles/App.css';
import PostList from './components/PostList.jsx'
import PostForm from'./components/PostForm.jsx'
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "ogjsolg", descriptive: "sgsdhg"},
        {id: 2, title: "aaaaaaaaa", descriptive: "wwwwww"},
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        if(filter.sort) {
            return (
                [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
            )
        }
        return (
            posts
        )
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const CreateNewPost = (NewPost) => {
        setPosts([...posts, NewPost])
    };

    const DeletePost = (Post) => {
        setPosts(posts.filter(post => post.id !== Post.id))

    };

    return (
        <div className="App">
            <PostForm CreateNewPost={CreateNewPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList DeletePost={DeletePost} posts={sortedAndSearchedPosts} title={'Список публикаций'}/>
        </div>
    );
}

export default App;
