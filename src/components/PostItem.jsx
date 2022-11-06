import React from 'react';

const PostItem = (props) => {

    return (
        <div className="post">
            <div className="post__content">
                {props.post.number}
                <strong>{props.post.id} - {props.post.title}</strong>
                <div>
                    <p>{props.post.content}</p>
                </div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    );
};
export default PostItem;