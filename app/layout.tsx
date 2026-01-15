import { Inter } from "next/font/google";
import { Provider } from "@/components/provider";
import "./global.css";

const inter = Inter({
    subsets: ["latin"],
});

export default async function Layout({ params, children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
            <body className="flex flex-col min-h-screen">
                <Provider lang="en">{children}</Provider>
            </body>
        </html>
    );
}
