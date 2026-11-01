import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from '@/components/layout/AppLayout'
import CalendarPage from '@/pages/CalendarPage'
import DashboardPage from '@/pages/DashboardPage'
import NewPropertyPage from '@/pages/NewPropertyPage'
import PropertiesPage from '@/pages/PropertiesPage'
import PropertyDetailPage from '@/pages/PropertyDetailPage'
import StyleguidePage from '@/pages/StyleguidePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/properties/new" element={<NewPropertyPage />} />
        <Route path="/properties/:id" element={<PropertyDetailPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Route>
      <Route path="/styleguide" element={<StyleguidePage />} />
    </Routes>
  )
}
