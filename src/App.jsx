import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LatestPage from './pages/LastestPage'
import SearchPage from './pages/SearchPage'
import EntryPage from './pages/EntryPage'

const journalRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/latest",
    element: <LatestPage />
  },
  {
    path: "/search/:searchKey/:searchValue",
    element: <SearchPage />
  },
  {
    path: "/entries/:entryId",
    element: <EntryPage />
  }
])

function App() {

  return (
    <>
      <RouterProvider router={journalRouter} />
    </>
  )
}

export default App
