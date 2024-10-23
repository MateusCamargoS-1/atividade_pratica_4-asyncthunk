import { Provider } from 'react-redux'
import store from './store/store'
import { Container } from '@mui/material'
import CharacterList from './components/CharacterList'

import './app.css';

function App() {

  return (
    <Provider store={store}>
      <Container>
        <h1>Personagens de Harry Potter</h1>
        <CharacterList />
      </Container>
    </Provider>
  )
}

export default App
