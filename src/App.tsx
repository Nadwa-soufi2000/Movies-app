import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import WatchedMovies from "./pages/Watched"
import WatchList from "./pages/WatchList"
import SearchAboutMovies from "./pages/SearchMovie"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<WatchList/>}></Route>
        <Route path="/watchList" element={<WatchList/>}></Route>
        <Route path="/watched" element={<WatchedMovies/>}></Route>
        <Route path="/search" element={<SearchAboutMovies/>}></Route>
      </Routes>
    </div>
  )
}

export default App
