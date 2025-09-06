import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

//home and about have same hierarchy after /
//if we want to add more stuff within a route make another route tag inside and continue
//the ':' makes the word next to it go into userparam hook 

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} >
        <Route path='' element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="user/" element={<User />}>
          <Route path=':userid' element={<User />} />
        </Route>
        <Route path="github" element={<Github />}/>
        <Route path='*' element={<div>Not found</div>} />
      </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
