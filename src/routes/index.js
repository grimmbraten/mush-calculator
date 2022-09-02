export default [
  {
    path: `/`,
    exact: true,
    view: 'Home',
    guarded: false,
    redirect: false
  },
  {
    path: `/guarded`,
    exact: true,
    view: 'Home',
    guarded: true,
    redirect: false
  },
  {
    path: `/login`,
    exact: true,
    view: 'Home',
    guarded: false,
    redirect: false
  }
];
