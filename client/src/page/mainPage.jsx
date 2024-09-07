import React, { useState } from "react";
import SelectPlayers from "./selectPlayers.jsx";
import CreatePlayer from "./createPlayer.jsx";
import Scorecard from "./scorecard.jsx";
import Playcard from "./playcard.jsx";

const MainPage = () => {
    return (
        <div className='static w-full h-full'>
            <div className="flex justify-between w-full h-9 ">
                <SelectPlayers
                />
                <CreatePlayer />
            </div>
            <div className="flex w-full mt-5">
                <Playcard
                />
                <Scorecard
                />
            </div>
        </div>

    )
}

export default MainPage;