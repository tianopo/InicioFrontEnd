import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { RotasApp } from './rotas/rotasApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>

        <RotasApp />

    </BrowserRouter>
  </React.StrictMode>
)