import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faCheck, faTrash, faCaretDown } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faCheck, faTrash, faCaretDown);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
