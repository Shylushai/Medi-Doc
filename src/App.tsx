import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';

import SiteNav from './components/common/SiteNav';

Amplify.configure(outputs);

function App() {

  return (
    <Authenticator>
      {({ signOut, user }) => (
        
        <main>
          <SiteNav />
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
          
        </main>
      )}
    </Authenticator>
  );
}

export default App;
