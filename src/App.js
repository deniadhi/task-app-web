/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import SnackbarProvider from 'react-simple-snackbar';

import { Main } from './Pages/Main';

function App() {
  return (
    <SnackbarProvider>
      <Main />
    </SnackbarProvider>
  );
}

export default App;
