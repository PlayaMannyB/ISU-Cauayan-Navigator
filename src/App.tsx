
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { BottomNav } from './components/BottomNav';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import { Dashboard } from './pages/Dashboard';
import { Search } from './pages/Search';
import { MapView } from './pages/MapView';
import { About } from './pages/About';
import { StudentManual } from './pages/StudentManual';
import { Credit } from './pages/Credit';
import { EmergencyHotlines } from './pages/EmergencyHotlines';

function AppShell() {
  const location = useLocation();
  // Float toggle slightly higher when on the map so it doesn't overlap the detail panel handle
  const isMap = location.pathname === '/map';
  return (
    <div className="app-shell relative isolate h-[100dvh] flex flex-col bg-gray-100 dark:bg-black">
      <div className="app-shell-backdrop" aria-hidden="true" />
      <div className="flex-1 relative z-10 overflow-hidden flex flex-col">
        <div
          className={`relative flex-1 min-h-0 flex flex-col ${isMap
            ? 'w-full'
            : 'w-full max-w-[480px] lg:max-w-6xl mx-auto bg-gray-50 dark:bg-isu-charcoal shadow-xl sm:shadow-2xl'}`}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/search" element={<Search />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/about" element={<About />} />
            <Route path="/credit" element={<Credit />} />
            <Route path="/student-manual" element={<StudentManual />} />
            <Route path="/emergency-hotlines" element={<EmergencyHotlines />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>

          {/* Persistent floating dark mode toggle */}
          <div
            className={`absolute right-4 z-[1100] transition-all duration-300 ${isMap ? 'bottom-[42%]' : 'safe-area-bottom-offset'}`}>
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <BottomNav />
      </div>
    </div>);

}
export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </ThemeProvider>);

}