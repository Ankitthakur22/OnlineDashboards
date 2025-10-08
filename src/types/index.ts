export interface Movie {
  id: string;
  title: string;
  description: string;
  genre: string;
  releaseYear: number;
  rating: number;
  sourceUrl: string;
}

export interface TechUpdate {
  id: string;
  title: string;
  description: string;
  category: string;
  sourceUrl: string;
  publishedDate: string;
  credibilityScore: number;
}

export interface Startup {
  id: string;
  name: string;
  description: string;
  industry: string;
  fundingStage: string;
  fundingAmount: string;
  foundedYear: number;
  sourceUrl: string;
}
