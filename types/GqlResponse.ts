export type GqlResponse = {
    success: boolean;
    message: string;
    error?: string;
    data?: any;
}