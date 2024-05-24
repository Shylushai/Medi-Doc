import { Route, Routes } from 'react-router-dom';
import { Authenticator ,View, Image, useTheme, Text, Heading} from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import NavBar from './components/NavBar';
import HomePage from './home/HomePage';
import AppointmentPage from './appointments/AppointmentsPage';
import { PatientPage }from './patients/PatientPage';
import SiteFooter from './components/SiteFooter';
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(outputs);

function App() {
  const components = {
    Header() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            alt="Medidoc logo"
            src="logo.png"
          />
        </View>
      );
    },
  
    Footer() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>
            &copy; project-11 &copy; 2024
          </Text>
        </View>
      );
    },
  
    SignIn: {
      Header() {
        const { tokens } = useTheme();
  
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Sign in to MediDoc
          </Heading>
        );
      },

  }
};


  //Website display
  return (
    <Authenticator components={components}>
      {({ signOut, user }) => (
        
        <div>
          <NavBar logOut={signOut}/>
          <Routes>
            <Route path='*' element={<HomePage />}/>
            <Route path='/appointments' element={<AppointmentPage />}/>
            <Route path='/patients' element={<PatientPage />}/>          
          </Routes>
          <SiteFooter />
          <h1 className="text-white">Hello {user?.username}</h1>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
