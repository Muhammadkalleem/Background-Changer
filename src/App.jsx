import { useState } from 'react'


function App() {
  const [color, setColor] = useState('brown');
  
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-full h-screen bg-blue-500"
    >
      <div className="text-white">
        <button
          onClick={() => setColor('red')}
          className="px-4 py-2 m-2 rounded-full bg-red-500"
        >
          Red
        </button>
        <button
          onClick={() => setColor('blue')}
          className="px-4 py-2 m-2 rounded-full bg-blue-500"
        >
          Blue
        </button>
        <button
          onClick={() => setColor('green')}
          className="px-4 py-2 m-2 rounded-full bg-green-500"
        >
          Green
        </button>


        <button
          onClick={() => setColor('olive')}
          className="px-4 py-2 m-2 rounded-full bg-olive-500 text-black "
        >
          Olive
        </button>

         <button onClick={()=>setColor("Yellow")}
          className="px-4 py-2 m-2 rounded-full bg-yellow-500">
            Yellow
         </button>


         <button
          onClick={() => setColor('Pink')}
          className="px-4 py-2 m-2 rounded-full bg-pink-500"
        >
          Pink
        </button>


        <button
          onClick={() => setColor('black')}
          className="px-4 py-2 m-2 rounded-full bg-black"
        >
          Black
        </button>


        
        <button
          onClick={() => setColor('Purple')}
          className="px-4 py-2 m-2 rounded-full bg-purple-500"
        >
          Purple
        </button>


        <button
          onClick={() => setColor('white')}
          className="px-4 py-2 m-2 rounded-full bg-white-500 text-black "
        >
          White
        </button>

       

        <button
          onClick={() => setColor('gray')}
          className="px-4 py-2 m-2 rounded-full bg-gray-500 "
        >
          Gray
        </button>


        <button
          onClick={() => setColor('lavender')}
          className="px-4 py-2 m-2 rounded-full bg-lavendar-500 text-black "
        >
          Lavendar
        </button>


      </div>
    </div>
  );
}

export default App;
