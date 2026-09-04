import React, { useState } from "react";

type PayPeriod = {
  label: string;
  current: number;
  newPay: number;
  difference: number;
};

export default function PayComparisonCalculator() {
  const [hours, setHours] = useState("");
  const [rate, setRate] = useState("");
  const [currentPay, setCurrentPay] = useState("");
  const [showResults, setShowResults] = useState(false);

  const hoursNumber = parseFloat(hours) || 0;
  const rateNumber = parseFloat(rate) || 0;
  const currentWeekly = parseFloat(currentPay) || 0;

  // Regular + overtime calculation
  const baseHours = Math.min(hoursNumber, 40);
  const overtimeHours = Math.max(hoursNumber - 40, 0);

  const overtimeRate = rateNumber * 1.5;

  const basePay = baseHours * rateNumber;
  const overtimePay = overtimeHours * overtimeRate;

  const newWeekly = basePay + overtimePay;

  // Current pay calculations
  const currentBiweekly = currentWeekly * 2;
  const currentYearly = currentWeekly * 52;
  const currentMonthly = currentYearly / 12;
  const current5Years = currentYearly * 5;
  const current10Years = currentYearly * 10;

  // Bunny Home Care / new pay calculations
  const newBiweekly = newWeekly * 2;
  const newYearly = newWeekly * 52;
  const newMonthly = newYearly / 12;
  const new5Years = newYearly * 5;
  const new10Years = newYearly * 10;

  const payPeriods: PayPeriod[] = [
    {
      label: "Weekly",
      current: currentWeekly,
      newPay: newWeekly,
      difference: newWeekly - currentWeekly,
    },
    {
      label: "Biweekly",
      current: currentBiweekly,
      newPay: newBiweekly,
      difference: newBiweekly - currentBiweekly,
    },
    {
      label: "Monthly",
      current: currentMonthly,
      newPay: newMonthly,
      difference: newMonthly - currentMonthly,
    },
    {
      label: "Yearly",
      current: currentYearly,
      newPay: newYearly,
      difference: newYearly - currentYearly,
    },
    {
      label: "5 Years",
      current: current5Years,
      newPay: new5Years,
      difference: new5Years - current5Years,
    },
    {
      label: "10 Years",
      current: current10Years,
      newPay: new10Years,
      difference: new10Years - current10Years,
    },
  ];

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    if (hoursNumber <= 0 || rateNumber <= 0) {
      return;
    }

    setShowResults(true);

    setTimeout(() => {
      document
        .getElementById("pay-results")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const yearlyDifference = newYearly - currentYearly;

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-[#eefcfb] rounded-3xl shadow-xl border border-[#30d5c8] overflow-hidden">
        {/* Header */}
        <div className="px-6 md:px-10 pt-10 pb-6 text-center">
          <img
            src="/logos/bunnyhomecare-with-bunny.webp"
            alt="Bunny Home Care"
            className="h-56 md:h-72 w-auto mx-auto mb-8 object-contain"
          />

          <h2 className="text-3xl md:text-5xl font-bold text-[#37575f] leading-tight">
             See How Much You Could Earn
         </h2>

          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Compare your current weekly pay with a different hourly rate and see the
            potential difference over time.
          </p>
        </div>

        {/* Calculator Form */}
        <form
          onSubmit={handleCalculate}
          className="px-6 md:px-10 pb-10"
        >
          {/* Main Inputs */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Hours */}
            <div>
                <label
                htmlFor="hours"
                className="block text-sm font-semibold text-[#37575f] mb-2"
                >
                Total Hours Worked Weekly
                </label>

                <div className="relative">
                <input
                    id="hours"
                    type="number"
                    min="0"
                    step="0.5"
                    value={hours}
                    onChange={(e) => {
                    setHours(e.target.value);
                    setShowResults(false);
                    }}
                    placeholder="e.g. 40"
                    className="w-full h-[60px] rounded-xl border border-gray-300 bg-white px-4 pr-16 text-gray-900 outline-none transition focus:border-[#30d5c8] focus:ring-4 focus:ring-[#30d5c8]/15"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                    hrs
                </span>
                </div>
            </div>

            {/* Hourly Rate */}
            <div>
                <label
                htmlFor="rate"
                className="block text-sm font-semibold text-[#37575f] mb-2"
                >
                Bunny Home Care Hourly Rate
                </label>

                <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    $
                </span>

                <input
                    id="rate"
                    type="number"
                    min="0"
                    step="0.01"
                    value={rate}
                    onChange={(e) => {
                    setRate(e.target.value);
                    setShowResults(false);
                    }}
                    placeholder="14.00"
                    className="w-full h-[60px] rounded-xl border border-gray-300 bg-white pl-8 pr-4 text-gray-900 outline-none transition focus:border-[#30d5c8] focus:ring-4 focus:ring-[#30d5c8]/15"
                />
                </div>
            </div>
        </div>

          {/* Current Pay */}
          <div className="mt-6">
            <label
              htmlFor="currentPay"
              className="inline-block text-sm font-semibold text-[#37575f] bg-[#d9f8f5] border border-[#b8eee9] px-3 py-1.5 rounded-lg mb-2"
            >
              Your Current Weekly Pay Before Taxes
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>

              <input
                id="currentPay"
                type="number"
                min="0"
                step="0.01"
                value={currentPay}
                onChange={(e) => {
                  setCurrentPay(e.target.value);
                  setShowResults(false);
                }}
                placeholder="e.g. 750.00"
                className="w-full h-[60px] rounded-xl border border-gray-300 bg-white pl-8 pr-4 text-gray-900 outline-none transition focus:border-[#30d5c8] focus:ring-4 focus:ring-[#30d5c8]/15"
              />
            </div>

            <p className="text-xs text-gray-600 mt-2">
              Enter your approximate gross weekly pay before taxes and
              deductions.
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={hoursNumber <= 0 || rateNumber <= 0}
            className="mt-7 w-full bg-[#30d5c8] hover:bg-[#26c7ba] disabled:bg-gray-300 disabled:cursor-not-allowed text-[#24454b] py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Compare My Pay
          </button>
        </form>

        {/* RESULTS */}
        {showResults && (
          <div
            id="pay-results"
            className="bg-white/95 text-gray-800 border-t border-[#d7f3f0] px-6 md:px-10 py-10 scroll-mt-28"
          >
            {/* Base / OT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#f7fffe] border border-[#d7f3f0] rounded-2xl p-5">
                <p className="text-sm text-gray-500 mb-1">Regular Pay</p>

                <p className="text-2xl font-bold text-[#37575f]">
                  {formatCurrency(basePay)}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  {formatCurrency(rateNumber)} / hr × {baseHours} hrs
                </p>
              </div>

              <div className="bg-[#f7fffe] border border-[#d7f3f0] rounded-2xl p-5">
                <p className="text-sm text-gray-500 mb-1">
                  Overtime Pay
                </p>

                <p className="text-2xl font-bold text-[#37575f]">
                  {formatCurrency(overtimePay)}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  {formatCurrency(overtimeRate)} / hr × {overtimeHours} hrs
                </p>
              </div>
            </div>

            {/* Main result */}
            <div className="bg-[#30d5c8] text-[#24454b] rounded-2xl p-6 md:p-8 text-center mb-8 shadow-sm">
              <p className="text-sm md:text-base text-[#ffffff] mb-2">
                Estimated Weekly Pay
              </p>

              <p className="text-4xl md:text-5xl font-bold">
                {formatCurrency(newWeekly)}
              </p>

              {yearlyDifference > 0 && (
                <div className="mt-5">
                  <p className="text-[#ffffff] text-sm">
                    Estimated yearly difference
                  </p>

                  <p className="text-2xl md:text-3xl font-bold text-[#24454b] mt-1">
                    +{formatCurrency(yearlyDifference)}
                  </p>
                </div>
              )}
            </div>

            {/* Comparison Table */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#37575f] text-center mb-6">
                Pay Breakdown & Comparison
              </h3>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-3 text-sm font-semibold text-gray-700">
                        Period
                      </th>

                      <th className="text-right py-4 px-3 text-sm font-semibold text-gray-700">
                        Current
                      </th>

                      <th className="text-right py-4 px-3 text-sm font-semibold text-[#37575f]">
                        Bunny Home Care
                      </th>

                      <th className="text-right py-4 px-3 text-sm font-semibold text-gray-700">
                        Difference
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {payPeriods.map((period) => (
                      <tr
                        key={period.label}
                        className="border-b border-[#e7efee] hover:bg-[#f7fffe] transition"
                      >
                        <td className="py-4 px-3 font-semibold text-gray-800">
                          {period.label}
                        </td>

                        <td className="py-4 px-3 text-right text-gray-700">
                          {formatCurrency(period.current)}
                        </td>

                        <td className="py-4 px-3 text-right font-bold text-[#37575f]">
                          {formatCurrency(period.newPay)}
                        </td>

                        <td
                          className={`py-4 px-3 text-right font-bold ${
                            period.difference > 0
                              ? "text-[#138a80]"
                              : period.difference < 0
                              ? "text-red-500"
                              : "text-gray-500"
                          }`}
                        >
                          {period.difference > 0 && "+"}
                          {formatCurrency(period.difference)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {payPeriods.map((period) => (
                  <div
                    key={period.label}
                    className="border border-[#d7f3f0] rounded-2xl overflow-hidden bg-white"
                  >
                    <div className="bg-[#f7fffe] px-4 py-3 font-bold text-[#37575f]">
                      {period.label}
                    </div>

                    <div className="p-4 space-y-3">
                      <div className="flex justify-between gap-4">
                        <span className="text-sm text-gray-500">
                          Current
                        </span>

                        <span className="font-semibold text-gray-700">
                          {formatCurrency(period.current)}
                        </span>
                      </div>

                      <div className="flex justify-between gap-4">
                        <span className="text-sm text-gray-500">
                          Bunny Home Care
                        </span>

                        <span className="font-bold text-[#37575f]">
                          {formatCurrency(period.newPay)}
                        </span>
                      </div>

                      <div className="flex justify-between gap-4 pt-3 border-t">
                        <span className="text-sm font-semibold text-gray-600">
                          Difference
                        </span>

                        <span
                          className={`font-bold ${
                            period.difference > 0
                              ? "text-[#138a80]"
                              : period.difference < 0
                              ? "text-red-500"
                              : "text-gray-500"
                          }`}
                        >
                          {period.difference > 0 && "+"}
                          {formatCurrency(period.difference)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            {yearlyDifference > 0 && (
              <div className="mt-10 bg-[#eefcfb] border border-[#b8eee9] rounded-2xl p-6 md:p-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#37575f]">
                  Your Estimated Difference
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-[#24454b] mt-2">
                  You could earn{" "}
                  <span className="text-[#24454b]">
                    +{formatCurrency(yearlyDifference)}
                  </span>{" "}
                  more per year
                </h3>

                <p className="text-gray-600 mt-3 max-w-xl mx-auto">
                  Ready to learn more about switching to Bunny Home Care?
                  Our team can help make the process simple.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
                  <a
                    href="/#switching"
                    className="inline-flex justify-center items-center bg-[#30d5c8] hover:bg-[#26c7ba] text-[#24454b] font-semibold px-7 py-3.5 rounded-xl transition"
                  >
                    Learn About Switching
                  </a>

                  <a
                    href="tel:+12674839642"
                    className="inline-flex justify-center items-center border-2 border-[#37575f] text-[#37575f] hover:bg-[#37575f] hover:text-white font-semibold px-7 py-3.5 rounded-xl transition"
                  >
                    Call (267) 483-9642
                  </a>
                </div>
              </div>
            )}

            {/* Disclaimer */}
            <div className="mt-10 border-t border-gray-200 pt-6">
              <p className="text-xs leading-relaxed text-gray-500">
                <strong>Disclaimer:</strong> This calculator is provided for
                informational and illustrative purposes only. The figures
                generated are estimates based on the data entered and do not
                constitute an offer of employment, a binding legal agreement,
                or a promise or guarantee of actual future earnings or hours
                worked. Actual compensation may vary based on taxes,
                deductions, benefits, and specific employment terms.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}