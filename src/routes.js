import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Dataview = React.lazy(() => import('./views/dataview/dataView'));
const AdminView = React.lazy(() => import('./views/adminview/adminView'));


const routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/dataview', name: 'Dataview', component: Dataview },
  { path: '/adminview', name: 'Dataview', component: AdminView },
];

export default routes;
