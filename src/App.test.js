import ReactDOM from 'react-dom';
import Home from './Pages/Home'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});