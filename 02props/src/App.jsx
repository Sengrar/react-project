import Nav from './component/Nav'
import Props from './component/Props'

function App() {
  const brr = [9,8,7,6]

  const obj = {
    name:"Himanshu",
    age:24
  }

  const arrObj = [
    {
      firstName:"Anuj",
      lastName:"Chand"
    },
    {
      firstName:"Shruti",
      lastName:"Sharma"
    }
  ]

  const json = {
    "id":1,
    "userName":"Dinga",
    "role":"user"
  }

  return (
    <>
      <Nav str="I am Nav"></Nav>
      <Props brr={brr} object={obj} arrayOfObject={arrObj} JSON={json}></Props>
    </>
  )
}

export default App
