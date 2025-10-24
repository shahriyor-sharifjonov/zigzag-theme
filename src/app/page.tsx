import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import Products from "@/components/Products/Products";
import Join from "@/components/Join/Join";
import Download from "@/components/Download/Download";
import Integrations from "@/components/Integrations/Integrations";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main className="inner">
        <Intro />
        <Products />
        <Join />
        <Integrations />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
