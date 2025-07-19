import { useState } from 'react';
import Bucket from '../components/Bucket';
function App() {
  const [bgColor, setColor] = useState('grey');

  return (
    <div
      className='w-full h-screen duration-200'
      style={{ backgroundColor: bgColor }}
    >
      <div className='fixed bottom-10 inset-x-1 px-2 flex flex-wrap gap-4 justify-center'>
        <div className='flex flex-wrap gap-4 bg-white px-3 py-2 rounded-2xl shadow-2xl'>
          <Bucket color='Red' onClick={() => setColor('red')} />
          <Bucket color='Blue' onClick={() => setColor('blue')} />
          <Bucket color='Green' onClick={() => setColor('green')} />
          <Bucket color='White' onClick={() => setColor('white')} />
          <Bucket color='Black' onClick={() => setColor('black')} />
          <Bucket color='Pink' onClick={() => setColor('pink')} />
          <Bucket color='Olive' onClick={() => setColor('olive')} />
          <Bucket color='Purple' onClick={() => setColor('purple')} />
          <Bucket color='Lavender' onClick={() => setColor('lavender')} />
          <Bucket color='Yellow' onClick={() => setColor('yellow')} />
          <Bucket color='Gray' onClick={() => setColor('gray')} />

        </div>

      </div>
    </div>
  )
}

export default App;
