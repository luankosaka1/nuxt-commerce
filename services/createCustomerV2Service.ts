import type { CustomerCreateInput } from "~/models/CustomerCreateInput";
import type { GqlResponse } from "~/types/GqlResponse";

export async function CreateCustomerV2Service(customer: CustomerCreateInput): Promise<GqlResponse> {
    try {
        const { createCustomerV2 } = await GqlCreateCustomerV2({
            email: customer.email,
            firstname: customer.firstname,
            lastname: customer.lastname,
            password: customer.password,
            is_subscribed: customer.is_subscribed,
        });
        if (createCustomerV2?.customer?.email) {
            return { success: true, message: 'You have successfully registered.' };
        }
    } catch (error) {
        return { success: false, message: error?.gqlErrors[0]?.message };
    }

    return { success: false, message: 'Registration failed.' };
}