function Services() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="text-secondary-700 dark:text-secondary-300">Conception, développement, optimisation et accompagnement.</p>
      <ul className="grid md:grid-cols-2 gap-6">
        <li className="card">
          <h3 className="text-xl font-semibold mb-2">Site professionnel</h3>
          <p>Landing page, vitrine, corporate, SEO, analytics.</p>
        </li>
        <li className="card">
          <h3 className="text-xl font-semibold mb-2">Application web</h3>
          <p>Front/Back, API, auth, paiements, tableau de bord.</p>
        </li>
        <li className="card">
          <h3 className="text-xl font-semibold mb-2">E‑commerce</h3>
          <p>Catalogues, paniers, checkout, intégrations, performance.</p>
        </li>
        <li className="card">
          <h3 className="text-xl font-semibold mb-2">Conseil & audit</h3>
          <p>Architecture, coût, sécurité, scalabilité, UX.</p>
        </li>
      </ul>
    </div>
  )
}

export default Services


