import { Helmet } from 'react-helmet-async'

function LocalBuilders() {
  return (
    <section className="mt-10 py-20 bg-slate-950/40 min-h-[60vh]">
      <Helmet>
        <title>Local Builders | Yarm Building Solutions</title>
        <meta name="description" content="Highly qualified local builders with 20+ years experience. New builds, commercial, industrial, domestic projects and more." />
      </Helmet>
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold underline-gold mb-6">Local Builders</h1>
        <p className="text-slate-300 mb-6">
          Local builders, our core of highly qualified professionals with over 20 years experience are supported by bespoke project teams and specialists.
          <br /><br />
          We offer new build services for commercial, industrial and domestic properties. We can take the project from initial concepts through design stages, working with architects and planners, costing, laying foundations, and all aspects of construction including decoration. Any specialists that we may need to sub-contract to are always expected to meet the same high standards we offer.
          <br /><br />
          We have recently completed build projects from warehouses, shop interiors to more simple domestic extensions, kitchens and bathrooms. Every diverse project we take on adds to the breadth of our knowledge and we bring this to each new challenge.
        </p>
      </div>
    </section>
  )
}

export default LocalBuilders