import Root from '../views/Root';
import Index from '../views/Index';
import Buttons from '../views/Buttons';
import Menus from '../views/Menus';
import Icon from '../views/Icon';
import Transition from '../views/Transition';
import Upload from '../views/Upload';

export default [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Index,
      },
      {
        path: '/buttons',
        exact: true,
        component: Buttons,
      },
      {
        path: '/menus',
        exact: true,
        component: Menus,
      },
      {
        path: '/icon',
        exact: true,
        component: Icon,
      },
      {
        path: '/transition',
        exact: true,
        component: Transition,
      },
      {
        path: '/upload',
        exact: true,
        component: Upload,
      },
    ],
  },
];
