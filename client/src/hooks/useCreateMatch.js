import { useState } from 'react'
import toast from 'react-hot-toast';

const UseCreateMatch = () => {

    const createMatch = async (playerA, playerB, totalMatchBalls
    ) => {

        try {
            const res = await fetch("/api/match/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ playerA, playerB, totalMatchBalls }),
            })

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.setItem("match", JSON.stringify(data))
            toast.success("Match created successfully!");

        } catch (error) {
            toast.error(error.message)
        }
    }

    return { createMatch }
}

export default UseCreateMatch