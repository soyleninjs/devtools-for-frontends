import { createRoot } from 'react-dom/client'
import { DevtoolsProvider } from './context/Devtools'

import DevtoolsBarMenu from './components/DevtoolsBarMenu'
import DevtoolsElements from './components/DevtoolsElements'

import './index.css'

const devtoolsContainer = document.createElement('div')
devtoolsContainer.id = 'devtools-for-frontends'
document.body.append(devtoolsContainer)

const container = document.getElementById('devtools-for-frontends')
const root = createRoot(container)

root.render(
  <DevtoolsProvider>
    <DevtoolsElements />
    <DevtoolsBarMenu />
  </DevtoolsProvider>
)
