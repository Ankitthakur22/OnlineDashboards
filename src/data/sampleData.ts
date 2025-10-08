import type { Movie, TechUpdate, Startup } from '../types';

export const sampleMovies: Movie[] = [
  {
    id: '1',
    title: 'Oppenheimer',
    description: 'Epic biographical thriller about J. Robert Oppenheimer and the development of the atomic bomb. A masterful exploration of genius, moral complexity, and the dawn of the nuclear age.',
    genre: 'Biography/Thriller',
    releaseYear: 2023,
    rating: 8.3,
    sourceUrl: 'https://www.imdb.com/title/tt15398776/'
  },
  {
    id: '2',
    title: 'Past Lives',
    description: 'A deeply moving story about childhood sweethearts who reunite after 24 years. An intimate exploration of destiny, choice, and the roads not taken.',
    genre: 'Romance/Drama',
    releaseYear: 2023,
    rating: 7.8,
    sourceUrl: 'https://www.rottentomatoes.com/m/past_lives'
  },
  {
    id: '3',
    title: 'Dune: Part Two',
    description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. A visually stunning sci-fi epic.',
    genre: 'Science Fiction',
    releaseYear: 2024,
    rating: 8.5,
    sourceUrl: 'https://www.imdb.com/title/tt15239678/'
  }
];

export const sampleTechUpdates: TechUpdate[] = [
  {
    id: '1',
    title: 'GPT-4 Turbo Launches with Vision Capabilities',
    description: 'OpenAI releases GPT-4 Turbo with multimodal capabilities, allowing the model to process both text and images. Features 128K context window and knowledge cutoff updated to April 2024.',
    category: 'Artificial Intelligence',
    sourceUrl: 'https://openai.com/blog/gpt-4-turbo',
    publishedDate: '2024-11-06',
    credibilityScore: 5
  },
  {
    id: '2',
    title: 'React 19 Beta Released',
    description: 'The React team announces React 19 beta with new features including Actions, use API, and improved Server Components. Focuses on better developer experience and performance.',
    category: 'Web Development',
    sourceUrl: 'https://react.dev/blog/2024/04/25/react-19',
    publishedDate: '2024-04-25',
    credibilityScore: 5
  },
  {
    id: '3',
    title: 'Apple Vision Pro Hits Market',
    description: 'Apple\'s spatial computer launches with revolutionary eye and hand tracking technology. Blends digital content with physical space, marking Apple\'s entry into mixed reality.',
    category: 'Hardware',
    sourceUrl: 'https://www.apple.com/newsroom/2024/01/apple-vision-pro-available-february-2/',
    publishedDate: '2024-02-02',
    credibilityScore: 5
  },
  {
    id: '4',
    title: 'Quantum Computing Breakthrough at Google',
    description: 'Google Quantum AI demonstrates quantum error correction at scale, a critical milestone for practical quantum computing. Willow chip shows exponential error reduction.',
    category: 'Quantum Computing',
    sourceUrl: 'https://blog.google/technology/research/google-willow-quantum-chip/',
    publishedDate: '2024-12-09',
    credibilityScore: 5
  }
];

export const sampleStartups: Startup[] = [
  {
    id: '1',
    name: 'Perplexity AI',
    description: 'AI-powered search engine that provides direct answers with citations. Combines conversational AI with real-time web search to deliver accurate, sourced information.',
    industry: 'Artificial Intelligence/Search',
    fundingStage: 'Series B',
    fundingAmount: '$73.6M',
    foundedYear: 2022,
    sourceUrl: 'https://www.crunchbase.com/organization/perplexity-ai'
  },
  {
    id: '2',
    name: 'Anthropic',
    description: 'AI safety company building reliable, interpretable AI systems. Creator of Claude, an AI assistant focused on being helpful, harmless, and honest.',
    industry: 'Artificial Intelligence',
    fundingStage: 'Series C',
    fundingAmount: '$7.3B',
    foundedYear: 2021,
    sourceUrl: 'https://www.crunchbase.com/organization/anthropic'
  },
  {
    id: '3',
    name: 'Vercel',
    description: 'Platform for frontend developers providing instant deployment, automatic scaling, and global edge network. Creator of Next.js framework.',
    industry: 'Cloud/Developer Tools',
    fundingStage: 'Series D',
    fundingAmount: '$313M',
    foundedYear: 2015,
    sourceUrl: 'https://www.crunchbase.com/organization/vercel'
  },
  {
    id: '4',
    name: 'Supabase',
    description: 'Open-source Firebase alternative providing database, authentication, storage, and real-time subscriptions. Built on PostgreSQL with focus on developer experience.',
    industry: 'Cloud/Backend as a Service',
    fundingStage: 'Series B',
    fundingAmount: '$116M',
    foundedYear: 2020,
    sourceUrl: 'https://www.crunchbase.com/organization/supabase'
  }
];
