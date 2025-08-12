import { useEffect, useState } from "react"

const App = () => {

  const [count,setCount] = useState(0)

  useEffect (()=>{
    document.title = `Práctica useEffect ${count}`
  },[count])



  // const handleClick = () => {
  //   setCount(count + 1)
  // }


  return (
    <>
      <h1>useEffect</h1>
      <button onClick=/*{handleClick}*/{()=>{setCount(count + 1)}}>Contador : {count}</button>
    </>
  )
}
export default App