import AdminLayout from "../containers/Admin";
import DashboardPage from "../containers/Admin/DashboardPage";
import AddUserPage from "../containers/Admin/AddUserPage";
import Login from "../containers/Home/Login/Login";

const { default: HomeLayout } = require("../containers/Home");
const { default: HomePage } = require("../containers/Home/HomePage");
const { default: AboutPage } = require("../containers/Home/AboutPage");
const { default: ListMovie } = require("../containers/Home/ListMovie");

const routeHome = [
    {
        exact: true,
        path: '/',
        component: HomePage
    },
    {
        exact: false,
        path: '/home',
        component: HomePage
    },
    {
        exact: false,
        path: '/about',
        component: AboutPage
    },
    {
        exact: false,
        path: '/list-movie',
        component: ListMovie
    },
    {
        exact: false,
        path: '/login',
        component: Login
    }
]

const routeAdmin = [
    {
        exact: false,
        path: '/admin',
        component: AdminLayout
    },
    {
        exact: false,
        path: '/dashboard',
        component: DashboardPage
    },
    {
        exact: false,
        path: '/add-user',
        component: AddUserPage
    }
]

export {routeHome, routeAdmin};