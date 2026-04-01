import Footer from "./components/constants/footer";
import Navbar from "./components/constants/navbar";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <Navbar />
        <Footer />
    </section>
  );
}
