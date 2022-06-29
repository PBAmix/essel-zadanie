import * as React from "react";
import { Card, CardContent, CardHeader } from '@mui/material';

export default () => (
    <Card>
        <CardHeader title="Assel - Zadanie - crud " />
        <CardContent>Rozwiazanie opiera się na bibliotece <strong>react-admin.</strong><br />
            Zaimplementowano obsługę jednej tabeli z zasobów  <strong>https://jsonplaceholder.typicode.com/</strong>  tj. 'users'
        </CardContent>
    </Card>
);