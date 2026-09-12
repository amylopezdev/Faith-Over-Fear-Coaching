"use client";
import { useEffect, useRef, useState } from "react";
import {
  referralOptions,
  careerSituationOptions,
  obstacleOptions,
  commitmentOptions,
  priorityOptions,
  timelineOptions,
  investmentLevelOptionsUsa,
  investmentLevelOptions,
} from "../data/formOptions";
import FormInput from "../components/FormInput";
import FormRadioInput from "../components/FormRadioInput";
import FormCheckboxInput from "../components/FormCheckboxInput";
import CountrySelect from "../components/CountrySelect";
import RequiredAsterisk from "../components/RequiredAsterisk";

const STEP_NAMES = ["About you", "Your situation", "Logistics"];
const TOTAL_STEPS = STEP_NAMES.length;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const STEP_FIELD_ORDER: { key: string; focusSelector: string }[][] = [
  [
    { key: "name", focusSelector: "#name" },
    { key: "email", focusSelector: "#email" },
    { key: "referral", focusSelector: 'input[name="referral"]' },
  ],
  [
    { key: "careerSituation", focusSelector: 'input[name="career-situation"]' },
    { key: "obstacles", focusSelector: 'input[name="obstacles"]' },
    { key: "mainOutcome", focusSelector: "#main-outcome" },
    { key: "impactResult", focusSelector: "#impact-result" },
  ],
  [
    { key: "commitment", focusSelector: 'input[name="commitment"]' },
    { key: "priority", focusSelector: 'input[name="priority"]' },
    { key: "timeline", focusSelector: 'input[name="timeline"]' },
    { key: "investment", focusSelector: 'input[name="investment"]' },
  ],
];

const Connect = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCareerSituations, setSelectedCareerSituations] = useState<
    string[]
  >([]);
  const [careerSituationOther, setCareerSituationOther] = useState("");
  const [selectedReferralOption, setSelectedReferralOption] = useState("");
  const [selectedInvestmentLevel, setSelectedInvestmentLevel] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [selectedCommitment, setSelectedCommitment] = useState("");
  const [selectedObstacles, setSelectedObstacles] = useState<string[]>([]);
  const [obstaclesOther, setObstaclesOther] = useState("");
  const [mainOutcome, setMainOutcome] = useState("");
  const [priority, setPriority] = useState("");
  const [impactResult, setImpactResult] = useState("");
  const [anythingElse, setAnythingElse] = useState("");

  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const headingRef = useRef<HTMLHeadingElement>(null);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    headingRef.current?.focus();
  }, [currentStep]);

  const toggleCareerSituation = (option: string) => {
    setSelectedCareerSituations((currentOptions) =>
      currentOptions.includes(option)
        ? currentOptions.filter((currentOption) => currentOption !== option)
        : [...currentOptions, option],
    );
  };

  const toggleObstacle = (option: string) => {
    setSelectedObstacles((currentOptions) =>
      currentOptions.includes(option)
        ? currentOptions.filter((currentOption) => currentOption !== option)
        : [...currentOptions, option],
    );
  };

  const validateStep = (step: number): Record<string, string> => {
    const stepErrors: Record<string, string> = {};

    if (step === 0) {
      if (!name.trim()) {
        stepErrors.name = "Please enter your name.";
      }
      if (!email.trim()) {
        stepErrors.email = "Please enter your email address.";
      } else if (!EMAIL_PATTERN.test(email.trim())) {
        stepErrors.email = "Please enter a valid email address.";
      }
      if (!selectedReferralOption) {
        stepErrors.referral = "Please select an option.";
      }
    }

    if (step === 1) {
      if (selectedCareerSituations.length === 0) {
        stepErrors.careerSituation = "Please select at least one option.";
      }
      if (selectedObstacles.length === 0) {
        stepErrors.obstacles = "Please select at least one option.";
      } else if (selectedObstacles.length > 3) {
        stepErrors.obstacles = "Please select at most 3 options.";
      }
      if (!mainOutcome.trim()) {
        stepErrors.mainOutcome = "Please answer this question.";
      }
      if (!impactResult.trim()) {
        stepErrors.impactResult = "Please answer this question.";
      }
    }

    if (step === 2) {
      if (!selectedCommitment) {
        stepErrors.commitment = "Please select an option.";
      }
      if (!priority) {
        stepErrors.priority = "Please select an option.";
      }
      if (!selectedTimeline) {
        stepErrors.timeline = "Please select an option.";
      }
      if (!selectedInvestmentLevel) {
        stepErrors.investment = "Please select an option.";
      }
    }

    return stepErrors;
  };

  const goToNextStep = () => {
    const stepErrors = validateStep(currentStep);

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      const firstInvalid = STEP_FIELD_ORDER[currentStep].find(
        (field) => stepErrors[field.key],
      );
      if (firstInvalid) {
        document
          .querySelector<HTMLElement>(firstInvalid.focusSelector)
          ?.focus();
      }
      return;
    }

    setErrors({});
    setCurrentStep((step) => Math.min(step + 1, TOTAL_STEPS - 1));
  };

  const goToPreviousStep = () => {
    setErrors({});
    setCurrentStep((step) => Math.max(step - 1, 0));
  };

  const stepNumber = currentStep + 1;

  const backButton = (
    <button
      type="button"
      onClick={goToPreviousStep}
      className="cursor-pointer rounded-lg border border-sage px-8 py-3 font-medium text-charcoal transition-colors hover:bg-sage/10 focus:outline-none focus:ring-2 focus:ring-sage-deep focus:ring-offset-2 focus:ring-offset-mint-tint"
    >
      Back
    </button>
  );

  const nextButton = (
    <button
      type="button"
      onClick={goToNextStep}
      className="cursor-pointer rounded-lg bg-sage px-8 py-3 font-medium text-white shadow-sm transition-all hover:bg-sage-deep hover:shadow-md active:scale-[0.98] active:shadow-sm focus:outline-none focus:ring-2 focus:ring-sage-deep focus:ring-offset-2 focus:ring-offset-mint-tint"
    >
      Next
    </button>
  );

  const submitButton = (
    <button
      type="submit"
      className="cursor-pointer rounded-lg bg-sage px-8 py-3 font-medium text-white shadow-sm transition-all hover:bg-sage-deep hover:shadow-md active:scale-[0.98] active:shadow-sm focus:outline-none focus:ring-2 focus:ring-sage-deep focus:ring-offset-2 focus:ring-offset-mint-tint"
    >
      Submit
    </button>
  );

  return (
    <section
      id="connect"
      className="flex min-h-[70dvh] flex-1 flex-col justify-center border-t border-sage/20 bg-mint-tint px-6 py-10 sm:py-14"
    >
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-center text-3xl font-semibold text-charcoal sm:text-4xl">
          Let&apos;s Connect
        </h1>
        <p className="mt-3 text-center text-charcoal">
          This short form helps me understand your career goals & challenges.
          <br />
          If there&apos;s a strong fit, I will invite you to a tailored career
          strategy call.
        </p>
        <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
          <RequiredAsterisk required={true} />
          Required field
        </p>
        <form className="mx-auto mt-4 flex max-w-xl flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-charcoal">
              Step {stepNumber} of {TOTAL_STEPS}: {STEP_NAMES[currentStep]}
            </p>
            <div
              role="progressbar"
              aria-valuenow={stepNumber}
              aria-valuemin={1}
              aria-valuemax={TOTAL_STEPS}
              aria-label={`Step ${stepNumber} of ${TOTAL_STEPS}: ${STEP_NAMES[currentStep]}`}
              className="h-2 w-full overflow-hidden rounded-full bg-sage/30"
            >
              <div
                className="h-full rounded-full bg-sage-deep transition-all duration-300"
                style={{ width: `${(stepNumber / TOTAL_STEPS) * 100}%` }}
              />
            </div>
          </div>

          {currentStep === 0 && (
            <section
              aria-labelledby="connect-step-about"
              className="flex flex-col gap-6"
            >
              <h2
                ref={headingRef}
                tabIndex={-1}
                id="connect-step-about"
                className="text-lg font-semibold text-charcoal focus:outline-none"
              >
                About you
              </h2>

              <FormInput
                labelText="Name"
                id="name"
                value={name}
                placeholder="Your full name"
                required={true}
                error={errors.name}
                onChange={setName}
              />

              <FormInput
                type="email"
                labelText="Email address"
                id="email"
                value={email}
                placeholder="Your email address"
                required={true}
                error={errors.email}
                onChange={setEmail}
              />

              <CountrySelect
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
                selectedState={selectedState}
                setSelectedState={setSelectedState}
              />

              <FormRadioInput
                legendText="How did you hear about Faith Over Fear Career Coaching?"
                options={referralOptions}
                required={true}
                name="referral"
                error={errors.referral}
                onChange={setSelectedReferralOption}
                selectedOption={selectedReferralOption}
              />
            </section>
          )}

          {currentStep === 1 && (
            <section
              aria-labelledby="connect-step-situation"
              className="flex flex-col gap-6"
            >
              <h2
                ref={headingRef}
                tabIndex={-1}
                id="connect-step-situation"
                className="text-lg font-semibold text-charcoal focus:outline-none"
              >
                Your situation
              </h2>

              <FormCheckboxInput
                legendText="What best describes your current career situation? (Select all that apply)"
                options={careerSituationOptions}
                required={true}
                name="career-situation"
                error={errors.careerSituation}
                selectedOptions={selectedCareerSituations}
                onChange={toggleCareerSituation}
              />

              {selectedCareerSituations.includes("Other") && (
                <input
                  type="text"
                  id="career-situation-other"
                  aria-label="Please specify"
                  value={careerSituationOther}
                  placeholder="Please specify"
                  onChange={(e) => {
                    setCareerSituationOther(e.target.value);
                  }}
                  className="rounded-lg border border-sage/40 bg-cream px-4 py-2.5 text-charcoal outline-none transition-colors focus:border-sage-deep focus:ring-2 focus:ring-sage/50"
                />
              )}

              <FormCheckboxInput
                legendText="What are the biggest obstacles currently holding you back in your career?"
                options={obstacleOptions}
                required={true}
                name="obstacles"
                helperText="Please select at most 3 options."
                maxSelections={3}
                error={errors.obstacles}
                selectedOptions={selectedObstacles}
                onChange={toggleObstacle}
              />

              {selectedObstacles.includes("Other") && (
                <input
                  type="text"
                  id="obstacles-other"
                  aria-label="Please specify"
                  value={obstaclesOther}
                  placeholder="Please specify"
                  onChange={(e) => {
                    setObstaclesOther(e.target.value);
                  }}
                  className="rounded-lg border border-sage/40 bg-cream px-4 py-2.5 text-charcoal outline-none transition-colors focus:border-sage-deep focus:ring-2 focus:ring-sage/50"
                />
              )}

              <FormInput
                labelText="What is the main outcome you want to achieve in the next 30-90 days?"
                id="main-outcome"
                value={mainOutcome}
                placeholder="Your answer here"
                required={true}
                error={errors.mainOutcome}
                onChange={setMainOutcome}
              />

              <FormInput
                labelText="If nothing changes in your career, what impact would that have on you?"
                id="impact-result"
                value={impactResult}
                placeholder="Your answer here"
                required={true}
                error={errors.impactResult}
                onChange={setImpactResult}
              />
            </section>
          )}

          {currentStep === 2 && (
            <section
              aria-labelledby="connect-step-logistics"
              className="flex flex-col gap-6"
            >
              <h2
                ref={headingRef}
                tabIndex={-1}
                id="connect-step-logistics"
                className="text-lg font-semibold text-charcoal focus:outline-none"
              >
                Logistics
              </h2>

              <FormRadioInput
                legendText="On a scale of 1-10, how committed are you to improving your career situation?"
                options={commitmentOptions}
                required={true}
                name="commitment"
                error={errors.commitment}
                onChange={setSelectedCommitment}
                selectedOption={selectedCommitment}
              />

              <FormRadioInput
                legendText="How much of a priority is this goal for you right now?"
                options={priorityOptions}
                required={true}
                name="priority"
                error={errors.priority}
                onChange={setPriority}
                selectedOption={priority}
              />

              <FormRadioInput
                legendText="If we determine we’re a good fit, when would you realistically be ready to begin?"
                options={timelineOptions}
                required={true}
                name="timeline"
                error={errors.timeline}
                onChange={setSelectedTimeline}
                selectedOption={selectedTimeline}
              />

              <FormRadioInput
                legendText="What level of financial investment are you comfortable making in career coaching?"
                options={
                  selectedCountry === "United States"
                    ? investmentLevelOptionsUsa
                    : investmentLevelOptions
                }
                required={true}
                name="investment"
                error={errors.investment}
                onChange={setSelectedInvestmentLevel}
                selectedOption={selectedInvestmentLevel}
              />

              <FormInput
                labelText="Is there anything else you'd like me to know?"
                id="anything-else"
                value={anythingElse}
                placeholder="Your answer here"
                required={false}
                onChange={setAnythingElse}
              />
            </section>
          )}

          <div className="mt-2 flex items-center justify-between gap-4">
            <div>{currentStep > 0 ? backButton : null}</div>
            <div>{currentStep < TOTAL_STEPS - 1 ? nextButton : submitButton}</div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Connect;
