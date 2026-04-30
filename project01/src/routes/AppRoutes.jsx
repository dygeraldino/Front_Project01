import { Route, Routes } from 'react-router-dom'
import ContactPage from '../pages/ContactPage'
import DetailPage from '../pages/DetailPage'
import ExplorePage from '../pages/ExplorePage'
import FavoritesPage from '../pages/FavoritesPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/anime/:id" element={<DetailPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
