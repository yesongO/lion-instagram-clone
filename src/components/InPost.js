import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaRegHeart, FaRegComment, FaRegPaperPlane } from 'react-icons/fa';

function InPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    //-- 게시글 불러오기
    useEffect(() => {
        axios.get(`https://rxlahlpuscpdneaxdrrk.functions.supabase.co/posts/${id}`, {
            headers: {
                apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bGFobHB1c2NwZG5lYXhkcnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MDczODYsImV4cCI6MjA2Mzk4MzM4Nn0.yyyRqGoCtrPjdCjSsxp4_vfNkAJ54PYxxfklB5ISpOQ` ,
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bGFobHB1c2NwZG5lYXhkcnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MDczODYsImV4cCI6MjA2Mzk4MzM4Nn0.yyyRqGoCtrPjdCjSsxp4_vfNkAJ54PYxxfklB5ISpOQ `,
                'Content-Type': 'application/json',
            }
        })
        .then(res => {
            const postNum = res.data.find(p => String(p.id) === id);
            setPost(postNum);
        })
        // .then(res => setPost(res.data))
        .catch(err => console.error('게시물 로딩 실패 😱', err));
    }, [id]);


    //-- 댓글 불러오기
    useEffect(() => {
        axios.get(`https://rxlahlpuscpdneaxdrrk.functions.supabase.co/comments/${id}`, {
            headers: {
                apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bGFobHB1c2NwZG5lYXhkcnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MDczODYsImV4cCI6MjA2Mzk4MzM4Nn0.yyyRqGoCtrPjdCjSsxp4_vfNkAJ54PYxxfklB5ISpOQ` ,
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bGFobHB1c2NwZG5lYXhkcnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MDczODYsImV4cCI6MjA2Mzk4MzM4Nn0.yyyRqGoCtrPjdCjSsxp4_vfNkAJ54PYxxfklB5ISpOQ `,
                'Content-Type': 'application/json',
            }
        })
        .then(res => {
            setComments(res.data);
        })
        .catch(err => console.error('댓글 로딩 실패 😱', err));
    }, [id]);

    //-- 댓글 작성하기
    const writeComments = () => {
        if (!newComment.trim()) return;

        axios.post(`https://rxlahlpuscpdneaxdrrk.functions.supabase.co/comments/${id}`,{
            content: newComment,
        }, 
        {
            headers: {
                apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bGFobHB1c2NwZG5lYXhkcnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MDczODYsImV4cCI6MjA2Mzk4MzM4Nn0.yyyRqGoCtrPjdCjSsxp4_vfNkAJ54PYxxfklB5ISpOQ` ,
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bGFobHB1c2NwZG5lYXhkcnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MDczODYsImV4cCI6MjA2Mzk4MzM4Nn0.yyyRqGoCtrPjdCjSsxp4_vfNkAJ54PYxxfklB5ISpOQ `,
                'Content-Type': 'application/json',
            }
        })
        .then(res => { 
            setNewComment('');
            // 댓글 새로 불러오기
            return axios.get(`https://rxlahlpuscpdneaxdrrk.functions.supabase.co/comments/${id}`, {
                headers: {
                    apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bGFobHB1c2NwZG5lYXhkcnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MDczODYsImV4cCI6MjA2Mzk4MzM4Nn0.yyyRqGoCtrPjdCjSsxp4_vfNkAJ54PYxxfklB5ISpOQ` ,
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bGFobHB1c2NwZG5lYXhkcnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MDczODYsImV4cCI6MjA2Mzk4MzM4Nn0.yyyRqGoCtrPjdCjSsxp4_vfNkAJ54PYxxfklB5ISpOQ `,
                    'Content-Type': 'application/json',
                }
            });
        })
        .then( res => {
            setComments(res.data);
        })
        .catch(err => console.error('댓글 작성 실패 😱', err));
    };

    //-- 댓글 삭제하기
    const deleteComments = (commentId) => {
        axios.delete(`https://rxlahlpuscpdneaxdrrk.functions.supabase.co/comments/${id}?comment_id=${commentId}`, {
            headers: {
                apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bGFobHB1c2NwZG5lYXhkcnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MDczODYsImV4cCI6MjA2Mzk4MzM4Nn0.yyyRqGoCtrPjdCjSsxp4_vfNkAJ54PYxxfklB5ISpOQ` ,
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bGFobHB1c2NwZG5lYXhkcnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MDczODYsImV4cCI6MjA2Mzk4MzM4Nn0.yyyRqGoCtrPjdCjSsxp4_vfNkAJ54PYxxfklB5ISpOQ `,
                'Content-Type': 'application/json',
            }
        })
        .then(res => { 
            setComments(prev => prev.filter(c => c.id !== commentId));
        })
        .catch(err => console.error('댓글 삭제 실패 😱', err));
    };


    // post가 아직 null일 경우 대비
    if (!post) return <div>Roading ...</div>

    //-------------return문-------------------------------------------------
    return (
        <div>
            <hr style={{border: 'none', borderTop: '1px solid #f0f0f0'}}/>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1.5%'}}>
                <img src={'/lion_profile.png'}
                style={{
                    height: '6vw',
                    width: '6vw',
                    maxWidth: '60px',
                    maxHeight: '60px',
                    minWidth: '30px',
                    minHeight: '30px',
                    aspectRatio: '1',
                    marginLeft: '3%',
                    border: '0.7px solid #ccc',
                    borderRadius: '50%',
                    padding: '5px'
                }}
                />
                <p style={{fontSize: '1.4rem', marginLeft: '3%'}}>likelion_inha</p>
            </div>
            <img src={post.image_url} alt="InPost image" 
            style={{width: '100%', objectFit: 'cover'}}
            />
            <div style={{ display: 'flex', gap: '25px', fontSize: '30px', padding: '7px', margin: '0.5% 1%' }}>
                <FaRegHeart />
                <FaRegComment />
                <FaRegPaperPlane />
            </div>
            <div style={{ display: 'flex', marginLeft: '2.3%'}}>
                <p style={{fontSize: '1.2rem', marginTop: '1.2%', fontWeight: '800'}}>likelion_inha</p>
                <p style={{marginLeft: '1.9%', marginTop: '1.4%'}}>{post.content}</p>
            </div>
            <div>
                {/* {console.log(comments)} */}
                <div style={{display: 'flex', alignItems: 'center', margin: '1px 8px'}}>
                    <img src='/person.png' alt="profile" style={{height: '7vw', width: '7vw', maxHeight: '50px', maxWidth: '50px'}}/>
                    <input value={newComment} onChange={e => setNewComment(e.target.value)} placeholder="댓글 달기..."
                    style={{
                        flex: 1,
                        padding: '12px',
                        fontSize: '1rem',
                        border: '1px solid #ccc',
                        borderRadius: '20px'
                    }}/>
                    <button onClick={writeComments} 
                    style={{
                        border: 'none',
                        padding: '12px',
                        fontSize: '1rem',
                        color: '#0095f6',
                        backgroundColor: 'white'
                    }}>게시</button>
                </div>
                <ul style={{listStyle: 'none', paddingLeft: 0}}>
                    {comments && comments.length > 0 && comments.map(comment => (
                        <li key={comment.id} style={{ marginTop: '8px'}}>
                            <div style={{display: 'flex', alignItems: 'center', margin: '1px 8px'}}>
                                <img src='/person.png' alt="profile" style={{height: '8vw', width: '8vw', maxHeight: '50px', maxWidth: '50px', marginRight: '10px'}}/>
                                {comment.content}
                                <button onClick={() => deleteComments(comment.id)}
                                style={{
                                    border: 'none', 
                                    padding: '12px',
                                    fontSize: '1rem',
                                    color: '#0095f6',
                                    backgroundColor: 'white'
                                }}>삭제
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default InPost;