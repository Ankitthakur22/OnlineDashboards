import { Film, Star, ExternalLink } from 'lucide-react';
import type { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <Film className="w-5 h-5 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">{movie.title}</h3>
          </div>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
            <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
            <span className="text-sm font-medium text-yellow-700">{movie.rating}</span>
          </div>
        </div>

        <div className="mb-3 flex items-center gap-3 text-sm text-gray-600">
          <span className="bg-gray-100 px-2 py-1 rounded">{movie.genre}</span>
          <span>{movie.releaseYear}</span>
        </div>

        <p className="text-gray-700 mb-4 leading-relaxed">{movie.description}</p>

        <a
          href={movie.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          <ExternalLink className="w-4 h-4" />
          View Source
        </a>
      </div>
    </div>
  );
}
