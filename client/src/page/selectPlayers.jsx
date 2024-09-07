import React, { useState } from 'react';
import Usegetplayers from "../hooks/useGetPlayers";
import UseCreateMatch from '../hooks/useCreateMatch';
import toast from 'react-hot-toast';

const SelectPlayers = () => {
    const { players } = Usegetplayers();
    const { createMatch } = UseCreateMatch();

    const [playerAId, setPlayerAId] = useState('');
    const [playerBId, setPlayerBId] = useState('');
    const [totalBalls, setTotalBalls] = useState('');

    const batsmen = players.filter(player => player.role === 'BATSMAN');
    const bowlers = players.filter(player => player.role === 'BOWLER');

    const handleCreateMatch = async () => {
        if (!playerAId || !playerBId || !totalBalls) {
            toast.error("Please select both players and total balls.");
            return;
        }

        try {
            await createMatch(playerAId, playerBId, totalBalls);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div>
            <select id="dropdown1" className='mx-2' onChange={(e) => setPlayerAId(e.target.value)}>
                <option value="">--Choose Batsmen--</option>
                {batsmen.map((player) => (
                    <option key={player._id} value={player._id}>{player.name}</option>
                ))}
            </select>

            <select id="dropdown2" className='mx-2' onChange={(e) => setPlayerBId(e.target.value)}>
                <option value="">--Choose Bowler--</option>
                {bowlers.map((player) => (
                    <option key={player._id} value={player._id}>{player.name}</option>
                ))}
            </select>

            <select id="dropdown3" className='mx-2' onChange={(e) => setTotalBalls(e.target.value)}>
                <option value="">--Total Balls--</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>

            <button type="button" className='p-1 rounded-sm border-2 border-black mx-2' onClick={handleCreateMatch}>
                Create a Match
            </button>
        </div>
    );
};

export default SelectPlayers;
