import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData();

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchGithub = async () => {
    //         try {
    //             const response = await fetch("https://api.github.com/users/itsAbhayRaj");
    //             const info = await response.json()
    //             console.log(info);
    //             setData(info)
    //         } catch (error) {
    //             console.log(error);

    //         }

    //     };
    //     fetchGithub()
    // }, []);


    return (
        <div className='flex h-full bg-black w-ful p-8 items-center'>
            <div className='w-1/2'>
                <img src={data.avatar_url}/>
            </div>
            <div className=' flex 
             w-1/2 h-64 justify-center items-center
             text-cyan-600 text-4xl 
             border-8 border-cyan-700
             border-double border-opacity-50
             font-bold font-serif bg-slate-900'>
                <p className='drop-shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2)]'> {data.login}</p>
            </div>
        </div>
    )
}

export default Github


export const fetchGithub = async () => {
    try {
        const response = await fetch("https://api.github.com/users/itsAbhayRaj");
        const info = await response.json()
        console.log(info);
        return info
    } catch (error) {
        console.log(error);

    }

}