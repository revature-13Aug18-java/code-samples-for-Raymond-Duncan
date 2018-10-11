import {Event} from './event.model';

export class User {
    id: Number;
    username: String;
    firstname: String;
    lastname: String;
    phone: Number;
    email: String;
    password: String;
    role: String;
    bio: String;
    profileImageUrl: String;
    groups: String [];
    events: Number [];
}
