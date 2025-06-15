import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       <button className="focus:outline-none 
       text-white bg-purple-700 
       hover:bg-purple-800 focus:ring-4 
       focus:ring-purple-300 font-medium 
       rounded-lg text-sm px-5 py-2.5 mb-2 
       dark:bg-purple-600 dark:hover:bg-purple-700
        dark:focus:ring-purple-900">Button</button>
       <h1 className="font-m">Raam Nivi</h1>
       <a href="/Dashboard" className="text-blue-600">Dashboard</a>
       <a href="/Dashboard/settings" className="text-green-600">Settings</a>
      </main>
    

    </div>
  );
}
