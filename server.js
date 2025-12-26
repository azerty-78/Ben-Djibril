// Serveur de production personnalisé pour garantir les bons headers et le chargement des assets
import { createServer } from 'http'
import { readFileSync, existsSync, statSync } from 'fs'
import { join, extname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PORT = process.env.PORT || 5180
const HOST = process.env.HOST || '0.0.0.0'
const DIST_DIR = resolve(__dirname, 'dist')

// Types MIME pour les fichiers statiques
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
}

// Headers de sécurité et CORS
function getHeaders(filePath) {
  const ext = extname(filePath)
  const headers = {
    'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }

  // Cache pour les assets statiques
  if (['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.woff', '.woff2'].includes(ext)) {
    headers['Cache-Control'] = 'public, max-age=31536000, immutable'
  } else if (ext === '.html') {
    headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
  }

  return headers
}

// Servir un fichier
function serveFile(filePath, res) {
  try {
    if (!existsSync(filePath)) {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('404 Not Found')
      return
    }

    const stats = statSync(filePath)
    if (!stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('404 Not Found')
      return
    }

    const content = readFileSync(filePath)
    const headers = getHeaders(filePath)
    res.writeHead(200, headers)
    res.end(content)
  } catch (error) {
    console.error('Error serving file:', error)
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end('500 Internal Server Error')
  }
}

// Gérer les requêtes
function handleRequest(req, res) {
  // Gérer les requêtes OPTIONS (CORS preflight)
  if (req.method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    })
    res.end()
    return
  }

  let filePath = req.url.split('?')[0] // Enlever les query params

  // Route par défaut vers index.html pour le SPA
  if (filePath === '/' || filePath === '') {
    filePath = '/index.html'
  }

  // Sécuriser le chemin pour éviter les directory traversal
  const safePath = join(DIST_DIR, filePath).replace(/\.\./g, '')
  const resolvedPath = resolve(safePath)

  // Vérifier que le chemin résolu est bien dans DIST_DIR
  if (!resolvedPath.startsWith(DIST_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' })
    res.end('403 Forbidden')
    return
  }

  // Si c'est un répertoire, essayer index.html
  if (existsSync(resolvedPath) && statSync(resolvedPath).isDirectory()) {
    const indexPath = join(resolvedPath, 'index.html')
    if (existsSync(indexPath)) {
      serveFile(indexPath, res)
      return
    }
  }

  // Servir le fichier
  serveFile(resolvedPath, res)
}

// Créer et démarrer le serveur
const server = createServer(handleRequest)

server.listen(PORT, HOST, () => {
  console.log(`🚀 Server running at http://${HOST}:${PORT}`)
  console.log(`📁 Serving files from: ${DIST_DIR}`)
  console.log(`🌐 Domain: www.ben-djibril.com`)
})

// Gestion des erreurs
server.on('error', (error) => {
  console.error('Server error:', error)
  process.exit(1)
})

