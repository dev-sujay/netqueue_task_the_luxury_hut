import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { SiteHeader } from "./components/site-header"
import { SiteFooter } from "./components/site-footer"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <div className="relative flex min-h-screen flex-col font-questrial">
        <SiteHeader />
        <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Add more routes as needed */}
            </Routes>
        </main>
        <SiteFooter />
      </div>
    </Router>
  )
}

export default App

