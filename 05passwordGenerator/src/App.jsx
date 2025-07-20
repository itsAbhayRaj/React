import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [len, setLen] = useState(8);
  const [password, setPassword] = useState('');
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  // useRef hook
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghifklmnopqrstuvwxyz"
    if (numAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*-_+=[]{}~()`"
    let n = str.length;
    for (let i = 0; i < len; i++) {
      let index = Math.floor(Math.random() * n)
      pass += str[index]
    }
    setPassword(pass)
  }, [len, numAllow, charAllow, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passRef.current.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [len, numAllow, charAllow]);

  return (
    <>
      <div className='w-full h-screen bg-slate-900 text-amber-500' >
        <div
          className='fixed max-w-3xl flex-col flex-wrap 
        top-36 bg-slate-700
        inset-x-7 mx-auto rounded-lg px-4'>
          <div className='flex flex-wrap overflow-hidden my-3'>
            <input
              type='text'
              value={password}
              readOnly
              className='outline-none flex-grow rounded-l-md px-2'
              ref={passRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className={`bg-blue-700 rounded-r-md px-3 py-1
                transition active:scale-95
                 text-white`}
            >Copy</button>
          </div>
          <div
            className='flex flex-wrap gap-1 pb-2'>
            <input
              type='range' min={8} max={50}
              value={len}
              className='cursor-pointer'
              onChange={(e) => {
                setLen(e.target.value)
              }
              }
            />
            <span>Length ({len})</span>
            <input
              type='checkbox'
              defaultChecked={numAllow}
              onChange={(e) => setNumAllow(e.target.checked)}
            /><span>Numbers</span>
            <input
              type='checkbox'
              defaultChecked={charAllow}
              onChange={(e) => setCharAllow(e.target.checked)}
            /><span>Characters</span>
          </div>
        </div>



      </div>

    </>
  )
}

export default App;