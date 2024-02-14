import FAQ from '@/components/FAQ';
import Hero from '@/components/Hero';
import StatsTable from '@/components/StatsTable';
import Steps from '@/components/Steps';
import Trending from '@/components/Trending';

export default function Home() {
  return (
    <main className="">
      <Hero />
      {/* <StatsTable /> */}
      <Trending />
      <Steps />
      <FAQ />
    </main>
  );
}