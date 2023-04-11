import Content from "./Content"
import Sidebar from "./Sidebar"
import { Outlet, BrowserRouter as Router } from 'react-router-dom'

function App() {


  return (
    <div className="grid">
      <Router>
        <Sidebar />
        <Content />
      </Router>
    </div>
  )
}

export default App
