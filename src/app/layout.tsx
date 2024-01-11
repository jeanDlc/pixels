import ThemeRegistry from "@/components/ThemeRegistry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pixels",
  description:
    "The best free stock photos, royalty-free images and videos shared by creators.",
  themeColor: "#6366f1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/x-icon" />
      </head>
      <body>
        <ThemeRegistry options={{ key: "mui-theme" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
