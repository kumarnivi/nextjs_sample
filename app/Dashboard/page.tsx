"use client"
import { useRouter } from "next/navigation"

export default function dashboard(){
    const router = useRouter()
const back = () => {
    router.push('/') 
}

    return (
        <div>
             <button onClick={back} className="focus:outline-none 
       text-white bg-purple-700 
       hover:bg-purple-800 focus:ring-4 
       focus:ring-purple-300 font-medium 
       rounded-lg text-sm px-5 py-2.5 mb-2 
       dark:bg-purple-600 dark:hover:bg-purple-700
        dark:focus:ring-purple-900">Back To Home</button>
            <h1>This is Main Dashboard</h1>
        </div>
    )
}