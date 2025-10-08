import Benefit from "../components/Benefits";
import Hero from "../components/Hero";
import How from "../components/How";
import Reviews from "../components/Reviews";
import VerifiedDoctors from "../components/Verifieddoctors";




export default function Home() {

  return (
    <>
      <Hero />
      {/* px-25 to px-26 */}
      {/* How component */}
      <How />
      <Benefit />
      <VerifiedDoctors />
      <Reviews />
      
    </>

  )
}