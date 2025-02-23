export interface Anime {
    mal_id: number;
    title: string;
    images: { 
        jpg: { image_url: string; }; 
    };
    synopsis?: string;
    aired?: {
        from: string;
    };
}

export interface AnimeCard {
    mal_id: number;
    title: string;
    images: { 
        jpg: { image_url: string; }; 
    };
}