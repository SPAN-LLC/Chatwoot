import { frontendURL } from '../../../../helper/URLHelper';

const SettingsWrapper = () => import('../SettingsWrapper.vue');
const Index = () => import('./Index.vue');

export default {
  routes: [
    {
      path: frontendURL('accounts/:accountId/settings/labels'),
      component: SettingsWrapper,
      props: {
        headerTitle: 'LABEL_MGMT.HEADER',
        icon: 'tag',
        showNewButton: false,
      },
      children: [
        {
          path: '',
          name: 'labels_wrapper',
          meta: {
            permissions: ['administrator'],
          },
          redirect: 'list',
        },
        {
          path: 'list',
          name: 'labels_list',
          meta: {
            permissions: ['administrator'],
          },
          component: Index,
        },
      ],
    },
  ],
};
