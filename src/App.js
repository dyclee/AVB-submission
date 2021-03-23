// import logo from './logo.svg';
import './styling/App.css';
import './styling/contacts.css';
import './styling/forms.css';
import { Dashboard } from './components/Dashboard';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from './store/actions/contacts';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
        const res = await fetch(`https://avb-contacts-api.herokuapp.com/contacts/paginated`)
        const obj = await res.json();
        if (obj.contacts.length) {
            dispatch(getContacts(obj.contacts))
        }
    })()
},[])

  return (
    <div className="App">
      <div className="middle">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
