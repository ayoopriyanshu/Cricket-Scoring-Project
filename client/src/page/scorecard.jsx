import React from 'react';

const Scorecard = () => {
    return (
        <div className='bg-slate-500 ml-20 w-96'>
            <p className='p-3'>Scorecard</p>
            <div className='flex justify-center'>
                <div className='flex flex-col items-center mr-10'>
                    <label>player1here</label>
                    <label>Runs: 0</label>
                    <label>4s- </label>
                    <label>6s- </label>
                    <label>1s- </label>
                    <label>2s- </label>
                    <label>3s- </label>
                </div>
                <div className='flex flex-col items-center'>
                    <label>player2here</label>
                    <label>Wickets: 0</label>
                    <label>Dots- </label>
                    <label>Wides- </label>
                    <label>Noballs- </label>
                </div>
            </div>
            <p className='p-3'>Extras- </p>
        </div>
    );
};

export default Scorecard;
