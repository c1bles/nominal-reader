import { useTheme } from '../contexts/ThemeContext';
// ... existing imports ...

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  
  // ... existing code ...

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Nominal Reader</h1>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
      {/* ... rest of your existing JSX ... */}
    </div>
  );
}
