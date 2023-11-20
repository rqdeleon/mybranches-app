import { Footer } from "./components/footer";
import Navbar from "./components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </main>

  );
}