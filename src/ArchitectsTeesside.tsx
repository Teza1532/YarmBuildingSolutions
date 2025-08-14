import { Helmet } from 'react-helmet-async'

function ArchitectsTeesside() {
  return (
    <section className="mt-10 py-20 min-h-[60vh]">
      <Helmet>
        <title>Architects Teesside | Yarm Building Solutions</title>
        <meta name="description" content="We work closely with local architects in Teesside to plan, design, and deliver your building project with attention to detail and practical solutions." />
      </Helmet>
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold underline-gold mb-6">Architects Teesside</h1>
        <p className="text-slate-300 mb-6">
          Architects Teesside, we work closely with local architects to develop and plan your ideas. We make sure that all aspects of planning are covered, design considerations and challenges of the project are considered and regulations are met.
          <br /><br />
          We are always happy to offer advice along the way, look for possible savings within the project and alternative solutions. We pride ourselves in combining a flexible approach with an attention to detail, always striving to deliver practical, functional and ultimately great looking spaces.
          <br /><br />
          We always aim to help our clients visualise and understand each stage of the design and build process. Depending on the scale of the project, we are happy to have regular meetings to discuss any cost implications and ongoing design considerations.
          <br /><br />
          Architects Teesside, Are you looking for professional builders in the Teesside area!
          <br /><br />
          We have various building projects working closely with trusted local architects, take a look at our recent projects <a href="/gallery" className="text-brand-gold underline">here</a>!
        </p>
      </div>
    </section>
  )
}

export default ArchitectsTeesside