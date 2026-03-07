
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {


  return (
    <>
      <div className='flex flex-col items-center mx-7'>
          <AddTodo/>
      <Todos/>
      </div>

    </>
  )
}

export default App
