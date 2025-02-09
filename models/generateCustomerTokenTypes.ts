export interface GenerateCustomerTokenParams {
    email: string;
    password: string;
}

export interface GenerateCustomerTokenResult {
    success: boolean;
    message: string;
}