import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0);
  let _title = "TITLE_FROM_FRONTEND"
  let _body = "The body is written by maths."
  async function getDetails() {
    try {
      let res = await axios.get("http://127.0.0.1:8000/api")
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  async function post_data(){
    try {
      let res = await axios.post("http://127.0.0.1:8000/api", {
        title: _title,
        body: _body
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  getDetails();
  return (
    <div>
      <p></p>
      <button onClick={post_data}>Post</button>
    </div>
  )
}

export default App
