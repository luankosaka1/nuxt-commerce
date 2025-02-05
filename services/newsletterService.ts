import type { SubscribeParams, SubscribeResult } from "~/models/newsletterTypes";

export async function subscribeToNewsletter({ email }: SubscribeParams): SubscribeResult {
    try {
        const { subscribeEmailToNewsletter } = await GqlSubscribeEmailToNewsletter({ email });
        if (subscribeEmailToNewsletter?.status === 'SUBSCRIBED') {
            return { success: true, message: 'You have successfully subscribed to our newsletter.' };
        }
    } catch (error) {
        return { success: false, message: error?.gqlErrors[0]?.message };
    }

    return { success: false, message: 'Subscription failed.' };
}