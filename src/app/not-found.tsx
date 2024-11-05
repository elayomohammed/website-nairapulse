'use client';
import React , { useEffect, useState }from 'react';
import { useRouter } from 'next/navigation';
import '../styles/notFound.css';

const NotFound: React.FC = async() => {
    const router = useRouter();
    // const [time, setTime] = useState(5)

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000);
    })

    // useEffect(() => {
    //     const validTime = setInterval(() => {
    //         if( time > 0) {
    //             setTime(time - 1);
    //         }else {
    //             clearInterval(validTime);
    //         }
    //     }, 1000)
    //     return () => clearInterval(validTime);
    // }, [time])

    return(
    <div className="uniform-margin">
        <div id="error-page-container">
            <p>Ooops... Something went wrong!</p>
            <p>We can't find this page! We are redirecting you to the homepage in {5} seconds...</p>
        </div>
    </div>
    )
}

export default NotFound;
