import React from 'react';
import PostItem from './PostItem.jsx';

const PostList = ({DeletePost, posts, title}) => {
    if (!posts.length) {
        return(
            <h1 style={{textAlign: "center"}}>Нет публикаций!</h1>
        )
    };

    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts.map((post) => <PostItem DeletePost={DeletePost} post={post} key={post.id}/>)}
        </div>
    );
};

export default PostList;