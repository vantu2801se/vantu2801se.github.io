import Head from "next/head";
export default async function RootLayout({ children}: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          {children}
        </body>
      </html>
    );
}