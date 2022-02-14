export interface Deck{
    success?: boolean;
    deck_id?: string;
    shuffled?: boolean;
    remaning?: number;
}
export interface Draw{
    success: boolean;
    deck_id: string;
    Cards: Card[];
}
export interface Card{
    code:string;
    image:string;
    images:{
        svg:string;
        png:string;
    };
    value:string;
    suit:string;
}