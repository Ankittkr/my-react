import { Card } from "./components/Card"

function App() {
let myobj = {
  "age" : 21,
  "username" : "ANkit"
}
  return (
    <>
      <h1 className="bg-blue-500 text-white p-4 rounded-lg bg ">Hello Tailwind!</h1>
      <Card channel="chaiaurcode" btnText="visit me" count="123" data={[1 ,2 ,3]} />
      <Card channel="hitesh" />
    </>
  )
}

export default App
