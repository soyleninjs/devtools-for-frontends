import { createRoot } from 'react-dom/client'
import Devtools from './components/Devtools'
import { DevtoolsProvider } from './context/Devtools'
import './index.css'

const devtoolsContainer = document.createElement('div')
devtoolsContainer.id = 'devtools-for-frontends'
document.body.append(devtoolsContainer)
const container = document.getElementById('devtools-for-frontends')
const root = createRoot(container)
root.render(<DevtoolsProvider><Devtools /></DevtoolsProvider>)
