import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Dataview = React.lazy(() => import('./views/dataview/dataView'));


const routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/dataview', name: 'Dataview', component: Dataview },
];

export default routes;
