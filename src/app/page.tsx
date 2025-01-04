import { API_BASE_URL } from "@/lib/constants";
import ClientWrapper from "./components/client-wrapper";
import Footer from "./components/footer";
import Header from "./components/header";
import "@/styles/home.css";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch(API_BASE_URL, { cache: "no-store" });
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <Header />

      <main className="home-main">
        <div className="home-intro">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Explore our curated collection of top-quality products designed to
            enhance your life. From innovative gadgets to timeless essentials,
            we have something for everyone.
          </p>
        </div>

        <ClientWrapper products={products} />
      </main>

      <Footer />
    </div>
  );
}
