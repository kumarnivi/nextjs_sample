"use client"
import { useRouter } from "next/navigation"

export default function Settings(){
 const router = useRouter()
// Create a Function to navigate the page

const back = () => {
    router.push('/Dashboard')
}

    return (
        <div>
            <button onClick={back} className="focus:outline-none 
       text-white bg-purple-700 
       hover:bg-purple-800 focus:ring-4 
       focus:ring-purple-300 font-medium 
       rounded-lg text-sm px-5 py-2.5 mb-2 
       dark:bg-purple-600 dark:hover:bg-purple-700
        dark:focus:ring-purple-900">Back To Dashboard</button>
            <h1>Setting page</h1>
        </div>
    )
}