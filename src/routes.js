import Main from "./components/Layout/Main"
import Home from "./components/Pages/Home"
import Reviews from "./components/Pages/Reviews"
import News from "./components/Pages/News"
import Transaction from "./components/Pages/Transaction"
import HowToStart from "./components/Pages/HowToStart"
import Page404 from './components/Pages/Page404';

const routes = [
  { component: Main,
    routes: [
      { path: '/how-to-start',
        component: HowToStart
      },
      { path: '/:currencyFrom-to-:currencyTo',
        component: Home
      },
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/reviews',
        component: Reviews
      },
      { path: '/news',
        component: News
      },
      { path: '/txid/:id',
        component: Transaction
      },
      { path: '*',
        component: Page404
      }
    ]
  }
];

export default routes;