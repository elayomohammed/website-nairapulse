'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import '../styles/notFound.css';

const NotFound: React.FC = () => {
    const router = useRouter();
    const [time, setTime] = useState(5)

    useEffect(() => {
        const validTime = setInterval(() => {
            if (time > 0) {
                setTime(time - 1);
            } else {
                router.push('/');
            }
        }, 1000)
        return () => clearInterval(validTime);
    }, [time, router])

    return (
        <div className="uniform-margin">
            <div id="error-page-container">
                <p>Ooops... Something went wrong!</p>
                <p>We can't find this page! We are redirecting you to the homepage in {time} seconds...</p>
            </div>
        </div>
    )
}

export default NotFound;
