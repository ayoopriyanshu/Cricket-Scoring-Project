import { useState } from 'react'
import toast from 'react-hot-toast';

const UseCreatePlayer = () => {

    const createPlayer = async (name, role
    ) => {

        try {
            const res = await fetch("/api/player/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, role }),
            })

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.setItem("player", JSON.stringify(data))
            toast.success("Player created successfully!");

        } catch (error) {
            toast.error(error.message)
        }
    }

    return { createPlayer }
}

export default UseCreatePlayer