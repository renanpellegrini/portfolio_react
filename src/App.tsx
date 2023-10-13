import { ThemeProvider } from 'styled-components'

import React, { useState } from 'react'
import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sidebar/Sobre'
import Projetos from './containers/Projetos'
//import temaLight from './themes/light'
import temaDark from './themes/dark'
import temaLight from './themes/light'

function App() {
  const [usandoDark, setUsandoDark] = useState(false)

  function trocaTema() {
    setUsandoDark(!usandoDark)
  }
  return (
    <ThemeProvider theme={usandoDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
