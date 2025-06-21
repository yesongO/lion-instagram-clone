import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from './PostCard';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://rxlahlpuscpdneaxdrrk.functions.supabase.co/posts', {
            headers: {
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bGFobHB1c2NwZG5lYXhkcnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MDczODYsImV4cCI6MjA2Mzk4MzM4Nn0.yyyRqGoCtrPjdCjSsxp4_vfNkAJ54PYxxfklB5ISpOQ' ,
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bGFobHB1c2NwZG5lYXhkcnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MDczODYsImV4cCI6MjA2Mzk4MzM4Nn0.yyyRqGoCtrPjdCjSsxp4_vfNkAJ54PYxxfklB5ISpOQ `,
                'Content-Type': 'application/json',
            }
        })
        .then((res) => {
            console.log(res.data);
            setPosts(res.data);
        })
        .catch((err) => {
            console.error('게시물 불러오기 실패 😱', err);
        })
    }, []);

    return (
        <div>
            <div style={{display: 'flex'}}>
                <img src='/lion_profile.png' alt='Profile image' // 프로필 사진
                style={{
                    height: '22vw',
                    width: '22vw',
                    maxWidth: '130px',
                    maxHeight: '130px',
                    aspectRatio: '1',
                    marginLeft: '5%',
                    border: '0.7px solid #ccc',
                    borderRadius: '50%',
                    padding: '5px'
                }}
                />
                <div> 
                    <p style={{  // 인스타그램 아이디
                        fontWeight: '400', 
                        fontSize: '1.4rem', 
                        marginLeft: '30px'
                    }}>likelion_inha</p>
                    <p style={{ margin: '20px 30px'}}>  {/* 게시물, 팔로워, 팔로잉 */}
                        <span style={{color: 'gray'}}>게시물</span>
                        <span>  {posts.length}</span> 
                        <span style={{color: 'gray', marginLeft: '20px'}}>팔로워</span>
                        <span>  305</span> 
                        <span style={{color: 'gray', marginLeft: '20px'}}>팔로잉</span>
                        <span>  92</span> 
                    </p>
                </div>
            </div>
            <div style={{  // 게시물은 3x3 그리드 형식으로
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1px',
                padding: '1px',
                margin: '45px auto'
            }}>
                {posts.map((post) => (
                <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default Feed;