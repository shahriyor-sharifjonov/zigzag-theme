import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main className="inner">
        <Intro />
        <Products />
      </main>
      <Footer />
    </div>
  );
}
