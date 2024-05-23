import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import NavBar from './components/NavBar';




Amplify.configure(outputs);

function App() {


  return (
    <Authenticator>
      {({ signOut, user }) => (
        
        <main>
          <NavBar logOut={signOut}/>
          <h1>Hello {user?.username}</h1>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
