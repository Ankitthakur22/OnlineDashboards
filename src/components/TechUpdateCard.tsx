import { Cpu, ExternalLink, Award } from 'lucide-react';
import type { TechUpdate } from '../types';

interface TechUpdateCardProps {
  update: TechUpdate;
}

export function TechUpdateCard({ update }: TechUpdateCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-900">{update.title}</h3>
          </div>
          <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded">
            <Award className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">{update.credibilityScore}/5</span>
          </div>
        </div>

        <div className="mb-3 flex items-center gap-3 text-sm text-gray-600">
          <span className="bg-gray-100 px-2 py-1 rounded">{update.category}</span>
          <span>{formatDate(update.publishedDate)}</span>
        </div>

        <p className="text-gray-700 mb-4 leading-relaxed">{update.description}</p>

        <a
          href={update.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-green-600 hover:text-green-700 font-medium"
        >
          <ExternalLink className="w-4 h-4" />
          View Source
        </a>
      </div>
    </div>
  );
}
