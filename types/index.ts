import { type User } from "@prisma/client";

export type CurrentUser = {
  id: string;
  name: string;
  email: string;
  picture: string;
};

export interface payload {
  name: string;
  email: string;
  picture?: string;
}

export type SubscriptionPlan = {
  name: string;
  description: string;
  stripePriceId: string;
};

export interface SendWelcomeEmailProps {
  toMail: string;
  userName: string;
}

export interface sendVerificationEmailProps extends SendWelcomeEmailProps {
  verificationUrl: string;
}
