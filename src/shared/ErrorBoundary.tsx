import { Component, ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { hasError: boolean; error?: unknown }

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: unknown) {
    return { hasError: true, error }
  }

  componentDidCatch(error: unknown, info: unknown) {
    // TODO: hook to monitoring/logging if needed
    console.error('UI Error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container mx-auto px-4 py-10">
          <div className="card">
            <h1 className="text-2xl font-semibold mb-2">Une erreur est survenue</h1>
            <p className="text-secondary-600 dark:text-secondary-300">Veuillez rafraîchir la page ou revenir plus tard.</p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary


