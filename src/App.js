import React, {useState, useRef} from 'react';
import './styles/App.css';
import PostList from './components/PostList.jsx'
import MyButton from './components/UI/button/MyButton.jsx'
import MyInput from './components/UI/input/MyInput.jsx'

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "ogjsolg", content: "sgsdhg"}
    ])

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const setNewTitle = (event) => {
        event.preventDefault() // для того чтобы браузер работал не поумолчанию (отправлял на сервер запрос)
        const newPost = {
            id: posts[posts.length-1]['id']+1,
            title,
            content
        }
        setPosts([...posts, newPost])
        setTitle('')
        setContent('')
    }

    return (
        <div className="App">
            <form>
                <MyInput  value={title} type='text' placeholder='Название' onChange={event => setTitle(event.target.value)}/>
                <MyInput value={content} type='text' placeholder='Содержимое' onChange={event => setContent(event.target.value)}/>
                <MyButton onClick={setNewTitle}>Создать</MyButton>
            </form>
            <PostList posts={posts} title={'Список публикаций'}/>
        </div>
    );
}

export default App;
