import Nav from "@/components/Home/Nav";
import Hero from "@/components/Home/Hero";
import Footer from "@/components/Home/Footer";
import Login from "@/components/Login/page";

export default function HomePage() {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <>
      <Nav />
      <Hero />
      <Footer />
    </>
  );
}
