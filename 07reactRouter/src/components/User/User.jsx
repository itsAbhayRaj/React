import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams();
  return (
    <div 
    className='flex justify-center items-center h-screen 
    text-5xl bg-slate-300
    bg-cover bg-no-repeat
     text-white text-center'
     style={{backgroundImage: "url('https://imgs.search.brave.com/QZ64m6Ai8lacAG-UEQmK9fE9lTEAnSLckbzet7GgEm0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kYXJr/LWJhY2tncm91bmQt/dGV4dHVyZS1ibGFu/ay1kZXNpZ24tMTE2/MzI4Nzg2LmpwZw')"}}
     >
      User {userid}
      </div>
  )
}

export default User