import React, {useEffect, useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList.jsx'
import PostForm from'./components/PostForm.jsx'
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from './hooks/usePosts.js'
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [modal, setModal] = useState(false)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        console.log(123)
    })

    useEffect(() => {
        fetchPosts()
    },[])

    const CreateNewPost = (NewPost) => {
        setPosts([...posts, NewPost])
        setModal(false)

    };
    const DeletePost = (Post) => {

        setPosts(posts.filter(post => post.id !== Post.id))

    };
    return (
        <div className="App">
            <MyButton
            style={{marginTop: '15px'}}
            onClick={() => setModal(true)}>
                Добавить статью
            </MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm CreateNewPost={CreateNewPost}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '200px'}}>
                    <Loader/>
                  </div>
                : <PostList DeletePost={DeletePost} posts={sortedAndSearchedPosts} title={'Список публикаций'}/>
            }
        </div>
    );
}

export default App;
