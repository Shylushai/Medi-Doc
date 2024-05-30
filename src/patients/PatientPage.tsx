import { PatientCard } from '../components/PatientCard';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';

export const PatientPage = () => {


    return (
      <><StorageManager
        acceptedFileTypes={['image/*']}
        path="public/*"
        autoUpload={false}
        maxFileCount={1}
        isResumable />
        <PatientCard /></>
    
    );
  };