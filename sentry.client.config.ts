import * as Sentry from "@sentry/nextjs";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    integrations: [
      Sentry.feedbackIntegration({
        colorScheme: "system",
      }),
    ],
    tracesSampleRate: 1,
    debug: false, // Set to true only for debugging
  });
}
