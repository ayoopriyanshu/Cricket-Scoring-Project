import React, { useState } from 'react';
import UseCreatePlayer from '../hooks/useCreatePlayer';
import toast from 'react-hot-toast';

const CreatePlayer = () => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const { createPlayer } = UseCreatePlayer();

    const handleCreatePlayer = async () => {
        if (!name || !role) {
            alert("Please enter both name and role.");
            return;
        }

        try {
            await createPlayer(name, role);
            setName('');
            setRole('');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Name..."
                className="mx-2 border-2 p-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <select
                id="dropdown3"
                className='mx-2'
                value={role}
                onChange={(e) => setRole(e.target.value)}
            >
                <option value="">--Choose Role--</option>
                <option value="BATSMAN">BATSMAN</option>
                <option value="BOWLER">BOWLER</option>
            </select>
            <button
                type="button"
                className='p-1 rounded-sm border-2 border-black mx-2'
                onClick={handleCreatePlayer}
            >
                Create Player
            </button>
        </div>
    );
};

export default CreatePlayer;
