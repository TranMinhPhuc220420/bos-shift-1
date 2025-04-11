import RouterApp from './routes';

import './App.css';
import FirebaseAuthProvider from "./provider/FirebaseAuthProvider";

const App = () => {
  return (
    <FirebaseAuthProvider>

      <RouterApp />

    </FirebaseAuthProvider>
  );
};
export default App;