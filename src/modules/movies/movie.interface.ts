export interface TReview {
    email: string;
    rating: number;
    comment: string;
}

export interface TMovie {
    title: string;
    description: string;
    releaseDate: Date;
    genre: string;
    isDeleted: boolean;
    viewCount: number;
    reviews: [TReview];
}