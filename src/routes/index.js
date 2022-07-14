import React from 'react';
import pathName from './pathName';

const { main } = pathName;

const routes = [
    {path:main, name:"Home", component: React.lazy(()=> import('views/home')), exact: true},
]

export default routes;