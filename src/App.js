import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList, UserEdit, UserCreate } from './users';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@mui/icons-material/Group';
import Dashboard from './Dashboard';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider} >
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
  </Admin>
);
export default App;;
