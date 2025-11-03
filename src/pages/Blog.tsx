function Blog() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="text-secondary-700 dark:text-secondary-300">Articles sur le développement et le business.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map((i) => (
          <article key={i} className="card">
            <h3 className="text-xl font-semibold mb-2">Article #{i}</h3>
            <p className="text-secondary-600 dark:text-secondary-300">Aperçu de l’article.</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Blog


