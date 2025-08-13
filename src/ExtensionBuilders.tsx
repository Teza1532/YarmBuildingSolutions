import { Helmet } from 'react-helmet-async'

function ExtensionBuilders() {
  return (
    <section className="mt-10 py-20 bg-slate-950/40 min-h-[60vh]">
      <Helmet>
        <title>Extension Builders | Yarm Building Solutions</title>
        <meta name="description" content="Extension builders in Teesside for major builds, minor extensions, refurbishments, maintenance and more." />
      </Helmet>
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold underline-gold mb-6">Extension Builders</h1>
        <p className="text-slate-300 mb-6">
          Extension Builders in Teesside we offer major builds to minor extensions we take pride in every job we take on. We are happy to share our experience to make your project our next success.
          <br /><br />
          Refurbishment of a kitchen or bathroom can add a huge amount of value to your property. External improvements such as a porch or garage, will not only add valuable extra space but can greatly improve the appearance of your home. We are happy to discuss the areas of your home that will benefit from modernisation within any budget you may have available. As well as extensions other smaller projects we have completed have included, loft conversions, kitchens, bathrooms, roofing, patios, ….
          <br /><br />
          We also offer maintenance services for repair works, general joinery, plumbing, electrical, roofing, drainage and much more.
          <br /><br />
          If you are looking for Extension Builders Teesside please take a look at our recent projects <a href="/gallery" className="text-brand-gold underline">here</a>:
        </p>
      </div>
    </section>
  )
}

export default ExtensionBuilders