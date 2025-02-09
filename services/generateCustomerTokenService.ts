import type { GenerateCustomerTokenParams, GenerateCustomerTokenResult } from "~/models/generateCustomerTokenTypes";

export async function GenerateCustomerTokenService({ email, password }: GenerateCustomerTokenParams): Promise<GenerateCustomerTokenResult> {
    try {
        const { generateCustomerToken } = await GqlGenerateCustomerToken({ email, password });
        if (generateCustomerToken?.token) {
            return { success: true, message: 'You have successfully logged in.' };
        }
    } catch (error) {
        return { success: false, message: error?.gqlErrors[0]?.message };
    }

    return { success: false, message: 'Login failed.' };
}