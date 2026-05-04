import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Coding Progress Tracker",
  description: "Track coding bootcamp student progress with GitHub integration. Identify at-risk students, analyze commit patterns, and monitor skill progression."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f1628def-ab5f-4ee6-a264-d5e3ee42714e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
