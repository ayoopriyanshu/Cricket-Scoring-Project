import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Usegetplayers = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const getPlayers = async () => {
            try {
                const res = await fetch('/api/player/all');
                const data = await res.json();

                if (data.error) {
                    throw new Error(data.error);
                }
                setPlayers(data);
            } catch (error) {
                toast.error(error.message)
            }
        }

        getPlayers();
    }, [])

    return { players };
}

export default Usegetplayers