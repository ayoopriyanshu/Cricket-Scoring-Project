import React from "react";

const Playcard = () => {
    return (
        <div className="bg-red-400">
            <p>Playcard</p>
            <div className="flex mt-5">
                <label>
                    player1here ❌
                </label>
                <label>
                    player2here
                </label>
            </div>
            <div className="grid grid-cols-4 gap-4 p-4">
                <button className="bg-green-500 text-white rounded-lg px-4 py-2">Ball Start</button>
                <button className="bg-blue-500 text-white rounded-lg px-4 py-2">0</button>
                <button className="bg-blue-500 text-white rounded-lg px-4 py-2">1</button>
                <button className="bg-red-500 text-white rounded-lg px-4 py-2">Wicket</button>
                <button className="bg-orange-400 text-white rounded-lg px-4 py-2">Wide</button>
                <button className="bg-teal-500 text-white rounded-lg px-4 py-2">No Ball</button>
                <button className="bg-blue-500 text-white rounded-lg px-4 py-2">2</button>
                <button className="bg-gray-500 text-white rounded-lg px-4 py-2">6</button>
                <button className="bg-green-400 text-white rounded-lg px-4 py-2">4</button>
                <button className="bg-purple-500 text-white rounded-lg px-4 py-2">Bowler Stop</button>
                <button className="bg-purple-500 text-white rounded-lg px-4 py-2">1 or 2</button>
                <button className="bg-purple-500 text-white rounded-lg px-4 py-2">2 or 4</button>
                <button className="bg-purple-500 text-white rounded-lg px-4 py-2">4 or 6</button>
                <button className="bg-orange-400 text-white rounded-lg px-4 py-2">Ball In Air</button>
                <button className="bg-purple-500 text-white rounded-lg px-4 py-2">Others</button>
                <button className="bg-purple-500 text-white rounded-lg px-4 py-2">3</button>
                <button className="bg-purple-500 text-white rounded-lg px-4 py-2">Boundary Check</button>
                <button className="bg-purple-500 text-white rounded-lg px-4 py-2">Appeal</button>
                <button className="bg-red-500 text-white rounded-lg px-4 py-2">Catch Drop</button>
                <button className="bg-green-500 text-white rounded-lg px-4 py-2">Leg Bye</button>
                <button className="bg-green-500 text-white rounded-lg px-4 py-2">Bye</button>
                <button className="bg-purple-500 text-white rounded-lg px-4 py-2">Third Umpire</button>
                <button className="bg-red-500 text-white rounded-lg px-4 py-2">Review</button>
                <button className="bg-gray-700 text-white rounded-lg px-4 py-2">Done</button>
                <button className="bg-purple-500 text-white rounded-lg px-4 py-2">Misfield</button>
                <button className="bg-purple-500 text-white rounded-lg px-4 py-2">Overthrow</button>
                <button className="bg-red-500 text-white rounded-lg px-4 py-2">Wicket Confirm</button>
            </div>
        </div>
    )
}

export default Playcard;



