"use client";
import Hero from "./home/partials/hero";
import Navbar from "./home/partials/navbar";
import ServicesProcess from "./home/partials/services-process";
import TrustedBy from "./home/partials/trusted-by";
import UseCaseTabs from "./home/partials/usecase-tabs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustedBy />
      <ServicesProcess />
      <UseCaseTabs />
    </div>
  );
}
