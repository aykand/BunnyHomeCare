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
        {/* Hero */}
        <section className="px-6 pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-[#30d5c8]/15 text-[#37575f] font-semibold text-sm px-4 py-2 rounded-full mb-5">
              Caregiver Pay Calculator
            </span>
          </div>
        </section>

        {/* Calculator */}
        <section className="px-4 md:px-6 pb-24">
          <PayComparisonCalculator />
        </section>
      </main>
    </>
  );
}