import PayComparisonCalculator from "../components/PayComparisonCalculator";
import Seo from "../components/Seo";

export default function PayCalculator() {
  return (
    <>
      <Seo
        title="Pay Comparison Calculator | Bunny Home Care"
        description="Compare your current caregiver pay with a different hourly rate using Bunny Home Care's pay comparison calculator."
        canonical="https://www.bunnyhomecare.com/pay-calculator"
      />

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24">

        {/* Calculator */}
        <section className="px-4 md:px-6 pb-24">
          <PayComparisonCalculator />
        </section>
      </main>
    </>
  );
}