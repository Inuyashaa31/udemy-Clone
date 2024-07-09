import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
    'Access to 11,000+ top courses',
    'Certification prep',
    'Goal-focused recommendations',
    'AI-powered coding exercises',
]

const includedFeaturess = [
    'Access to 11,000+ top courses',
    'Certification prep',
    'Goal-focused recommendations',
    'AI-powered coding exercises',
    'Analytics and adoption reports',
]

const includedFeaturesss = [
    'Access to 25,000+ top courses',
    'Certification prep',
    'International course collection featuring 15 languages',
    'Customizable content',
    'Hands-on tech training with add-on',
    'Strategic implementation services with add-on',
]

export default function Premium() {
  return (
    <div className="bg-white py-20 sm:py-32" id='premium'>
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Accelerate growth - for you or your organization</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.
          </p>
        </div>
        <div className='mt-16 flex flex-row gap-8 items-stretch justify-center'>
          <PlanCard 
            title="Personal Plan" 
            price="₹850"
            priceDetail="INR per month"
            features={includedFeatures}
            buttonText="Start Subscription →"
          />
          <PlanCard 
            title="Team Plan" 
            price="₹1,167"
            priceDetail="INR a month per user"
            features={includedFeaturess}
            buttonText="Start Subscription →"
          />
          <PlanCard 
            title="Enterprise Plan" 
            price="For pricing"
            priceDetail="Contact Sales"
            features={includedFeaturesss}
            buttonText="Book a Demo →"
          />
        </div>
      </div>
    </div>
  )
}

function PlanCard({ title, price, priceDetail, features, buttonText }) {
  return (
    <div className="flex flex-col justify-between rounded-3xl border border-gray-200 p-8 sm:p-10 flex-1">
      <div>
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h3>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
          <div className="h-px flex-auto bg-gray-100" />
        </div>
        <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600">
          {features.map((feature) => (
            <li key={feature} className="flex gap-x-3">
              <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 text-center">
        <p className="text-base font-semibold text-gray-600">Starting at</p>
        <p className="mt-6 flex flex-col items-center justify-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-gray-900">{price}</span>
          <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">{priceDetail}</span>
        </p>
        <a
          href="#"
          className="mt-10 block w-full rounded-md bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {buttonText}
        </a>
      </div>
    </div>
  )
}

