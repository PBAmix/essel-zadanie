import * as React from "react";
import { List, SimpleList, Datagrid, TextField, EmailField, Edit, Create, SimpleForm, TextInput, useRecordContext } from 'react-admin';
import { ReferenceInput, SelectInput} from 'react-admin';
import { useMediaQuery } from '@mui/material';
import MyUrlField from './MyUrlField';

const userFilters = [
    <TextInput source="q" label="Szukaj..." alwaysOn />,
    <ReferenceInput source="id" label="Firma" reference="users">
        <SelectInput optionText="company.name" />
    </ReferenceInput>,
];

const UserTitle = () => {
    const record = useRecordContext();
    return <span>Użytkownik {record ? `"${record.name}"` : ''}</span>;
};

export const UserList = () => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List filters={userFilters} title='Użytkownicy' exporter={false}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.name}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="username" />
                    <EmailField source="email" />
                    <TextField source="address.street" />
                    <TextField source="phone" />
                    <MyUrlField source="website" />
                    <TextField source="company.name" />
                </Datagrid>
            )}
        </List>
    );
}

export const UserEdit = () => (
    <Edit title={<UserTitle />}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="address.street" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="company.name" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="address.street" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="company.name" />
        </SimpleForm>
    </Create>
);