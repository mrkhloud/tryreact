import React, {useState} from 'react'

function App() {
    const [likes, setLikes] = useState(0)
    const [value, setValue] = useState('')

    function increment () {
        setLikes(likes + 1)
    }

    function decrement () {
        setLikes(likes - 1)
    }

    function clear () {
        setLikes(likes - likes)
    }

    return (
        <div className="App">
            <h2>{value}</h2>
            <input type='text'
                   value={value}
                   onChange={event => setValue(event.target.value)}/>
            <h1>Кол-во лайков - {likes}</h1>
            <button onClick={increment}>Инкрементирует</button>
            <button onClick={decrement}>Дикрементирует</button>
            <button onClick={clear}>Онулировать кол-во лайков</button>
        </div>
    );
}

export default App;
