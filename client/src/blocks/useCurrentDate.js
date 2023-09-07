import { useState, useEffect } from 'react';

const useCurrentDate = () => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        const day = date.getDate();
        const year = date.getFullYear();
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const month = monthNames[date.getMonth()];
        const formattedDate = `${day}. ${month} ${year}`;
        setCurrentDate(formattedDate);
    }, []);

    return currentDate;
}

export default useCurrentDate;
