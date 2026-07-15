import { ReactNode } from "react";

import { notFound } from "next/navigation";

import { NextIntlClientProvider } from "next-intl";

import { getMessages } from "next-intl/server";

import { hasLocale } from "next-intl";

import { routing } from "@/i18n/routing";

import AppShell from "@/components/layout/app-shell";

import { inter, poppins } from "@/lib/fonts";

type Props = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <AppShell>{children}</AppShell>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
