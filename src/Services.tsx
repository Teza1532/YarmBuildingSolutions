function Services() {
  const data = [
    { title: "Project: First-Floor Side Extension and Façade Transformation", desc: "This project involved adding a first-floor side extension with a new gabled roof, finished in crisp white render for a fresh, modern look. The design blends seamlessly with the existing brickwork, featuring matching roof tiles, new energy-efficient windows, and updated guttering. The result is a stylish transformation that increases living space while significantly enhancing the property’s kerb appeal.", pic: "/images/twostoryexstension.jpg", alt: "Extension and Façade"},
    { title: "Full-Width Rear Extension with Roof Lanterns and Contemporary Glazing", desc: "This project involved the construction of a full-width single-storey rear extension, creating a bright, modern living space that blends perfectly with the character of the home. The new structure features a crisp white rendered finish with a brickwork base for a timeless look, complemented by expansive glazing, including bi-fold and French doors, to maximise natural light and create seamless garden access. Two large roof lanterns flood the interior with daylight, enhancing the sense of space and openness. This extension delivers both style and functionality, transforming the rear of the property into a stunning, light-filled focal point.", pic: "/images/SinglestoreyExtension.jpg", alt: "Rear Extension with Roof Lanterns"},
    { title: "Brick Rear Extension with French Doors & Feature Parapet", desc: "We delivered a stylish single-storey rear extension that blends perfectly with the home’s red-brick character. Built in matching brickwork with stone-effect heads and sills, the new addition features a crisp parapet detail and classic French doors opening to the garden. Inside, a reconfigured kitchen–dining space includes a concealed steel support wrapped and plastered to form a neat feature column and bulkhead, ready for integrated extraction and downlights. The result is a bright, functional family hub with timeless curb appeal and seamless indoor–outdoor flow.", pic: "/images/KitchenExtension.jpg", alt: "Extension with French Doors & Feature Parapet"},
    // { title: "Orangeries", desc: "Light-filled living spaces with warm roof options and integrated lighting."},
  ]
  return (
    <section id="services" className="py-8 bg-[#505052]">
      <div className="mx-auto max-w-6xl px-2">
        <h2 className="text-3xl font-bold underline-gold">What we do</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((s) => (
            <div key={s.title} className="rounded-2xl bg-slate-950/40 border border-white/10 p-6 hover:border-brand-gold transition flex flex-col items-center">
              {s.pic && (
                <img
                  src={s.pic}
                  alt={s.alt}
                  loading="lazy"
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                  style={{ maxWidth: "320px" }}
                />
              )}
              <div className="text-xl font-semibold text-brand-gold text-center">{s.title}</div>
              <p className="mt-2 text-sm text-slate-300 text-center">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services