import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes/index';

function App() {
  return (
    <Provider store={store} >
      <HashRouter>
        {
          renderRoutes(routes)
        }
      </HashRouter>
    </Provider>
  );
}

// function App() {
//   return (
//     <HashRouter>
//       {
//         renderRoutes(routes)
//       }
//     </HashRouter>
//   );
// }

export default App;
