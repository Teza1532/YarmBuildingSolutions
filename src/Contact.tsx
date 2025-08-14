function Contact() {
  return (
    <section className="mt-10 py-20 min-h-[60vh]">
      <div className="mx-auto  rounded-xl p-6 max-w-3xl px-4">
        <h2 className="text-3xl font-bold underline-gold mb-6">Get a quote</h2>
        <p className="text-slate-300 mb-6">
          Tell us a little about your project and we’ll get back to you.
        </p>
        <form
          className="grid gap-4"
          action="https://formspree.io/f/mwpqyrnd"
          method="POST"
        >
          <input type="hidden" name="_redirect" value="https://yoursite.com/" />
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="name"
              className="bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 m-2"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              className="bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 m-2"
              placeholder="Email"
              required
            />
          </div>
          <input
            name="phone"
            className="bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 m-2"
            placeholder="Phone"
          />
          <select
            name="service"
            className="bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 m-2"
          >
            <option>Service of interest</option>
            <option>Extensions</option>
            <option>Kitchens</option>
            <option>Bathrooms</option>
            <option>Orangeries</option>
            <option>Bi‑Folds</option>
            <option>Other</option>
          </select>
          <textarea
            name="details"
            className="bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 min-h-[140px] m-2"
            placeholder="Project details, location & timeframe"
          ></textarea>
          <button
            type="submit"
            className="bg-brand-gold text-slate-900 rounded-full px-6 py-3 font-semibold shadow-soft w-max m-2"
          >
            Send
          </button>
        </form>
        <div className="mt-8 text-sm text-slate-400">
          Prefer to chat? Message us on{" "}
          <a href="https://www.instagram.com/yarmbuildingsolutions/" target="_blank" className="text-brand-gold underline">Instagram</a>.
        </div>
      </div>
    </section>
  )
}

export default Contact