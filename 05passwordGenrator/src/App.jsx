import { useCallback, useEffect, useRef } from "react"
import { useState } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)]
    }
    console.log(pass);
    
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const handleCopyToClipBoard =useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 10)
    window.navigator.clipboard.writeText(password)
  } , [password])
  useEffect(()=>{
    passwordGenerator()
  } , [length , numberAllowed , charAllowed ,passwordGenerator ])


  return (
    <>
      <div className="w-md m-auto text-orange-600
      ">
        <h1 className="text-3xl font-bold text-center mt-10 text-white ">Password Generator</h1>
        <div className="bg-gray-800 flex items-center justify-center px-2 rounded ">
          <input
            type="text" value={password} readOnly className="w-full p-2 m-4  bg-white rounded-md" placeholder="Password" ref={passwordRef}/>
          <button onClick={handleCopyToClipBoard} className="bg-blue-500 text-white p-2 rounded-md shrink-0" >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
