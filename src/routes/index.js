import React from 'react';
import pathName from './pathName';

const {main, works,
    projects
} = pathName;

const routes = [
    {path:main, name:"Home", component: React.lazy(()=> import('pages/dyunidev/home')), exact: true},
    {path:works, name:"Works", component: React.lazy(()=> import('pages/dyunidev/work')), exact: true},
    {path:projects,name:"Projects", component: React.lazy(()=> import('pages/dyunidev/project')), exact: true},
]

export default routes;