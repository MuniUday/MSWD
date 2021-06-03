import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'Chevuru'
  },
  {
    id: 2,
    name: 'Muni'
  },
  {
    id: 3,
    name: 'Uday'
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)