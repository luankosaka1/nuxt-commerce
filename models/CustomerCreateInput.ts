export interface CustomerCreateInput {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    is_subscribed?: boolean;
}