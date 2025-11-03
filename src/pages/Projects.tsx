function Projects() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Projets</h1>
      <p className="text-secondary-700 dark:text-secondary-300">Une sélection de réalisations récentes.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="card">
            <div className="h-32 bg-secondary-200 dark:bg-secondary-700 rounded mb-3" />
            <h3 className="font-semibold">Projet #{i}</h3>
            <p className="text-sm text-secondary-600 dark:text-secondary-300">Description courte du projet.</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects


