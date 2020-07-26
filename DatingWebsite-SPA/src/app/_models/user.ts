import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    gender: string;
    created: Date;
    photoUrl: string;
    city: string;
    country: string;
    lastActive: Date;
    interests?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}
