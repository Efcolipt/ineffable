export enum ListTopType {
  TOP_250_BEST_FILMS = 'TOP_250_BEST_FILMS',
  TOP_100_POPULAR_FILMS = 'TOP_100_POPULAR_FILMS',
  TOP_AWAIT_FILMS = 'TOP_AWAIT_FILMS',
}

export interface IGenre {
  genre: string
}

export interface ICountry {
  country: string
}

export interface ICollectionByID {
  kinopoiskId: number
  imdbId: string
  nameRu: string
  nameEn: string
  nameOriginal: string
  posterUrl: string
  posterUrlPreview: string
  coverUrl: string
  logoUrl: string
  reviewsCount: number
  ratingGoodReview: number
  ratingGoodReviewVoteCount: number
  ratingKinopoisk: number
  ratingKinopoiskVoteCount: number
  ratingImdb: number
  ratingImdbVoteCount: number
  ratingFilmCritics: number
  ratingFilmCriticsVoteCount: number
  ratingAwait: number
  ratingAwaitCount: number
  ratingRfCritics: number
  ratingRfCriticsVoteCount: number
  webUrl: string
  year: number
  filmLength: number
  slogan: string
  description: string
  shortDescription: string
  editorAnnotation: string
  isTicketsAvailable: boolean
  productionStatus: string
  type: 'FILM' | 'SERIAL'
  ratingMpaa: string
  ratingAgeLimits: string
  hasImax: false
  has3D: false
  lastSync: string
  countries: ICountry[]
  genres: IGenre[]
  startYear: number
  endYear: number
  serial: boolean
  shortFilm: boolean
  completed: boolean
}

export interface ICollectionByTop {
  filmId: number
  nameRu: string
  nameEn: string
  year: string
  filmLength: string
  countries: ICountry[]
  genres: IGenre[]
  rating: string
  ratingVoteCount: number
  posterUrl: string
  posterUrlPreview: string
  ratingChange: null
}

export interface ICollectionSimilarByID {
  filmId: number
  nameRu: string
  nameEn: string
  nameOriginal: string
  posterUrl: string
  posterUrlPreview: string
  relationType: string
}

export type IResponseWrapperCollection<Collection> = Collection extends any[]
  ? {
      pagesCount: number
      films: Collection
    }
  : Collection | null