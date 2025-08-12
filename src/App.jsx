import { useDispatch } from 'react-redux'
import './App.css'
import { Button } from "antd"
import { addTodo } from './store/slice/formSlice'
import FormBuilder from './views/FormBuilder'
function App() {
  const dispatch = useDispatch()

  const handleClick = () => {
    
    dispatch(addTodo("Text"))
  }

  return (
    <>
      <Button onClick={handleClick}>Click</Button>
      <FormBuilder />
    </>
  )
}

export default App
