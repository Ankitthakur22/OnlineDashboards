import { Rocket, TrendingUp, ExternalLink, Calendar } from 'lucide-react';
import type { Startup } from '../types';

interface StartupCardProps {
  startup: Startup;
}

export function StartupCard({ startup }: StartupCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-orange-600" />
            <h3 className="text-xl font-semibold text-gray-900">{startup.name}</h3>
          </div>
          <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded">
            <TrendingUp className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-700">{startup.fundingStage}</span>
          </div>
        </div>

        <div className="mb-3 flex items-center gap-2 flex-wrap text-sm text-gray-600">
          <span className="bg-gray-100 px-2 py-1 rounded">{startup.industry}</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            Founded {startup.foundedYear}
          </span>
        </div>

        <p className="text-gray-700 mb-4 leading-relaxed">{startup.description}</p>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className="text-gray-500">Total Funding: </span>
            <span className="font-semibold text-gray-900">{startup.fundingAmount}</span>
          </div>
          <a
            href={startup.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700 font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            View Source
          </a>
        </div>
      </div>
    </div>
  );
}
