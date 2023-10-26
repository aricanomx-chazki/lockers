// import React, { LazyExoticComponent, lazy } from 'react';

// type JSXComponent = () => JSX.Element;
// export interface RouteProps {
//   path: string;
//   component?: LazyExoticComponent<JSXComponent> | JSXComponent;
//   layout?:
//     | LazyExoticComponent<(props: { children: React.ReactNode }) => JSX.Element>
//     | JSXComponent;
//   children: RouteProps[];
// }

// const Home = lazy(() => import('../screens/Home/Home'));
// const Scanner = lazy(() => import('../screens/Scanner/Scanner_Screen'));
// const Locker = lazy(() => import('../screens/Locker/Locker'));
// const Verification = lazy(() => import('../screens/Verification/Verification'));
// // const Validation = lazy(() => import('../screens/Validation/QRValidation'));

// const Layout = lazy(() => import('../components/Layout'));

// export const routes: RouteProps[] = [
//   {
//     layout: Layout,
//     children: [
//       {
//         path: '/',
//         component: Home,
//       },
//       {
//         path: '/scanner/*',
//         component: Scanner,
//       },
//       // {
//       //   path: '/validation',
//       //   component: Validation,
//       // },
//       {
//         path: '/locker',
//         component: Locker,
//       },
//       {
//         path: '/verification',
//         component: Verification,
//       },
//     ],
//   },
// ];
