
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

function AppShell() {
  const location = useLocation();
  // Float toggle slightly higher when on the map so it doesn't overlap the detail panel handle
  const isMap = location.pathname === '/map';
  return (
    <div className="h-screen flex flex-col bg-gray-50 dark:bg-isu-charcoal">
      <div className="flex-1 relative overflow-hidden flex flex-col">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/about" element={<About />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="/student-manual" element={<StudentManual />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>

        {/* Persistent floating dark mode toggle */}
        <div
          className={`absolute right-4 z-[1100] transition-all duration-300 ${isMap ? 'bottom-[42%]' : 'bottom-4'}`}>
          
          <ThemeToggle />
        </div>
      </div>
      <BottomNav />
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