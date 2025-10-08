import { useState } from 'react';
import { Search, Film, Cpu, Rocket } from 'lucide-react';
import { MovieCard } from './components/MovieCard';
import { TechUpdateCard } from './components/TechUpdateCard';
import { StartupCard } from './components/StartupCard';
import { sampleMovies, sampleTechUpdates, sampleStartups } from './data/sampleData';

type TabType = 'movies' | 'tech' | 'startups';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('movies');
  const [searchQuery, setSearchQuery] = useState('');

  const filterBySearch = <T extends { title?: string; name?: string; description: string }>(
    items: T[]
  ): T[] => {
    if (!searchQuery) return items;
    const query = searchQuery.toLowerCase();
    return items.filter(
      (item) =>
        (item.title?.toLowerCase().includes(query) ||
          item.name?.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query))
    );
  };

  const filteredMovies = filterBySearch(sampleMovies);
  const filteredTechUpdates = filterBySearch(sampleTechUpdates);
  const filteredStartups = filterBySearch(sampleStartups);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Research Dashboard</h1>
              <p className="text-gray-600 mt-1">
                Curated insights on movies, technology, and startups
              </p>
            </div>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search across all categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="flex gap-2 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('movies')}
              className={`flex items-center gap-2 px-4 py-3 font-medium transition-all ${
                activeTab === 'movies'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Film className="w-5 h-5" />
              Movies ({filteredMovies.length})
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`flex items-center gap-2 px-4 py-3 font-medium transition-all ${
                activeTab === 'tech'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Cpu className="w-5 h-5" />
              Tech Updates ({filteredTechUpdates.length})
            </button>
            <button
              onClick={() => setActiveTab('startups')}
              className={`flex items-center gap-2 px-4 py-3 font-medium transition-all ${
                activeTab === 'startups'
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Rocket className="w-5 h-5" />
              Startups ({filteredStartups.length})
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'movies' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
            ) : (
              <p className="col-span-full text-center text-gray-500 py-12">
                No movies found matching your search.
              </p>
            )}
          </div>
        )}

        {activeTab === 'tech' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTechUpdates.length > 0 ? (
              filteredTechUpdates.map((update) => (
                <TechUpdateCard key={update.id} update={update} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 py-12">
                No tech updates found matching your search.
              </p>
            )}
          </div>
        )}

        {activeTab === 'startups' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredStartups.length > 0 ? (
              filteredStartups.map((startup) => <StartupCard key={startup.id} startup={startup} />)
            ) : (
              <p className="col-span-full text-center text-gray-500 py-12">
                No startups found matching your search.
              </p>
            )}
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 text-sm">
            All information sourced from credible online sources with proper attribution
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
