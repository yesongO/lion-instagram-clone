import React from 'react';
import { useNavigate } from 'react-router-dom';

function PostCard( { post }) {
    const { id, image_url, title, content} = post;
    const navigate = useNavigate();

    return(
        <div onClick={() => navigate(`/posts/${post.id}`)}  // 게시물 클릭 시
            style={{width: '100%', overflow: 'hidden'}}>
            <img src={post.image_url} alt='게시물 이미지'
            style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
        </div>
    );
}

export default PostCard;