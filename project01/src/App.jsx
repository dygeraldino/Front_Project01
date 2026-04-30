import { Toaster } from 'react-hot-toast'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { FavoritesProvider } from './context/FavoritesContext'

function App() {
  return (
    <FavoritesProvider>
      <div className="flex min-h-screen flex-col bg-transparent text-night">
        <Navbar />
        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-16 pt-10 sm:px-6">
          <AppRoutes />
        </main>
        <Footer />
      </div>
      <Toaster position="bottom-right" />
    </FavoritesProvider>
  )
}

export default App
