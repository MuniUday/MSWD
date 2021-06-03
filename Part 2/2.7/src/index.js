import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'chevuru'
  },
  {
    id: 2,
    name: 'muni'
  },
  {
    id: 3,
    name: 'uday'
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)