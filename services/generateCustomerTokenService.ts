import type { GenerateCustomerTokenParams } from "~/models/generateCustomerTokenTypes";
import type { GqlResponse } from "~/types/GqlResponse";

export async function GenerateCustomerTokenService({ email, password }: GenerateCustomerTokenParams): Promise<GqlResponse> {
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