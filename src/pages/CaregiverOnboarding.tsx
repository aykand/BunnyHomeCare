import Seo from "../components/Seo";

export default function CaregiverOnboarding() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <Seo
        title="Caregiver Onboarding Checklist | Bunny Home Care"
        description="The required documents and steps for caregiver onboarding at Bunny Home Care."
        canonical="https://www.bunnyhomecare.com/caregiver-onboarding"
      />
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
          Caregiver Onboarding Paperwork Checklist
        </h1>
        
        {/* General text container updated with #37575f */}
        <div className="space-y-8 text-[#37575f] leading-relaxed">
          
          {/* Specific title updated with #37575f */}
          <h2 className="text-2xl font-bold text-[#37575f] -mb-4">
            Required Documents Before Onboarding Meeting
          </h2>

          {/* Caregiver Documentation Section */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-4">
              Caregiver Documentation
            </h3>
            <ul className="list-disc pl-6 space-y-4">
              <li>Social Security Number (SSN)</li>
              <li>Driver's License / Valid Government ID</li>
              <li>
                Proof of Address
                {/* Description texts updated with #37575f */}
                <p className="text-sm text-[#37575f] pl-4 mt-1">
                  If the current address is different than the one in the DL/ID
                  provided, a utility bill showing the current address is a must.
                </p>
              </li>
              <li>
                Proof of residency in PA for more than 2 years prior to
                onboarding
                <p className="text-sm text-[#37575f] pl-4 mt-1">
                  An expired Driver's License/ID or 1040 tax returns forms for
                  the previous 2 years showing name and address in PA.
                </p>
              </li>
              <li>
                Tuberculosis Test
                <p className="text-sm text-[#37575f] pl-4 mt-1">
                  A valid Quantiferon blood test is preferred (performed less
                  than a year before onboarding).
                </p>
              </li>
              <li>Employee Policy</li>
            </ul>
          </section>

          {/* Background Check Documents Section */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-4">
              Background Check Documents
            </h3>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                Background Check
                <p className="text-sm text-[#37575f] pl-4 mt-1">
                  If you do not have a background check you can go to this
                  website to run one:{" "}
                  <a
                    href="https://epatch.pa.gov/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://epatch.pa.gov/home
                  </a>
                </p>
              </li>
              <li>
                FingerPrint (FBI Clearance)
                <p className="text-sm text-[#37575f] pl-4 mt-1">
                  If you are living in PA for less than 2 years, you have to
                  provide a fingerprint. For more information how to get a
                  fingerprint watch this video:{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline"
                  >
                    Watch Video
                  </a>
                </p>
              </li>
              <li>
                Child Abuse Clearance
                <p className="text-sm text-[#37575f] pl-4 mt-1">
                  For more information on how to get a child abuse clearance
                  certification:{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline"
                  >
                    Watch Video
                  </a>
                </p>
              </li>
            </ul>
          </section>

          <div className="border-t pt-6 mt-8">
            <p className="text-center font-semibold text-[#37575f]">
              These Background checks & the caregiver documentation are required
              before moving forward with the hiring process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
