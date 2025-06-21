import { MdErrorOutline } from 'react-icons/md';

export default function NotFound() {
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center'
        }}>
            <MdErrorOutline size={80} color="gray" style={{marginBottom: '1rem'}} />
            <p style={{fontSize: '2rem', margin: '0.1rem 0'}}>문제가 발생했습니다</p>
            <p style={{fontSize: '1.5rem', color: 'gray'}}>404 Not Found Error</p>
        </div>
    );
}