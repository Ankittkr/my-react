import { useState } from "react"


function App() {
const [color  ,  setColor] = useState('olive')
const handleonClick = ()=>{
  setColor("yellow")
  console.log("clicked");
  
}
  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor : color}} >

      <div className="fixed bottom-12 inset-x-0 px-2 flex flex-wrap justify-center ">
          <div className="flex flex-wrap justify-center gap-3 bg-white px-3 rounded-3xl py-3 shadow-2xl text-white">
              <button onClick={()=> setColor('red')} className="bg-red-600 px-4 py-2 rounded-3xl flex items-baseline-last cursor-pointer">
                  red
              </button>
              <button onClick={()=> setColor('blue')}  className="bg-blue-600 px-4 py-2 rounded-3xl flex items-baseline-last cursor-pointer">
                  blue
              </button>
              <button onClick={()=> setColor('black')}  className="bg-black px-4 py-2 rounded-3xl flex items-baseline-last cursor-pointer">
                  black
              </button>
              <button onClick={()=> setColor('pink')}  className="bg-pink-600 px-4 py-2 rounded-3xl flex items-baseline-last cursor-pointer">
                  pink
              </button>

          </div>
      </div>
        

    </div>
    </>
  )
}

export default App
