import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = ({DeletePost, ...props}) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id} - {props.post.title}</strong>
                <div>
                    <p>{props.post.descriptive}</p>
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => DeletePost(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};
export default PostItem;