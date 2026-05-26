export interface Country {
  code: string;
  name: string;
  flag: string;
}

export type TrendIndicator = string; // e.g. "+2", "-1", "="

export type RankingEntry = [artist: string, listeners: string, trend: TrendIndicator];

export type RankingsMap = Record<string, RankingEntry[]>;

export type ButtonVariant = "primary" | "outline" | "ghost";

export interface SubmitFormData {
  artistName: string;
  email: string;
  contact: string;
  instagram: string;
  spotifyUrl: string;
  trackLink: string;
  genre: string;
  country: string;
  city: string;
  message: string;
}
