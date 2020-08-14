import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import HomeLayout from './containers/Home';
// import AdminLayout from './containers/Admin';
// import HomePage from './containers/Home/HomePage';
// import AboutPage from './containers/Home/AboutPage';
// import ListMovie from './containers/Home/ListMovie';
// import DashboardPage from './containers/Admin/DashboardPage';
// import AddUserPage from './containers/Admin/AddUserPage';
import PageNotFound from './containers/PageNotFound';
import { routeHome, routeAdmin } from './routes';
// import NavBar from './components/Navbar'
// import NavBarAdmin from './components/NavBarAdmin'
import HomeTemplate from './template/HomeTemplate';
import AdminTemplate from './template/AdminTemplate';

function App() {

  // const showHomeLayout = (routes) => {
  //   if (routes && routes.length > 0) {
  //     return routes.map ((item, index) => {
  //       return (
  //         <Route key = {index} exact = {item.exact} path = {item.path} component = {item.component}/>
  //       )
  //     })
  //   }
  // }

  const showHomeLayout = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map ((item, index) => {
        return (
          <HomeTemplate key = {index} exact = {item.exact} path = {item.path} Component = {item.component} demo = "abc"/>
        )
      })
    }
  }

  const showAdminLayout = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map ((item, index) => {
        return (
          // <Route key = {index} exact = {item.exact} path = {item.path} component = {item.component}/>
          <AdminTemplate key = {index} exact = {item.exact} path = {item.path} Component = {item.component}/>
        )
      })
    }
  }

  return (
    <BrowserRouter>
      {/* <NavBar />   */}
      {/* <NavBarAdmin /> */}
      <Switch>
        {/* Trang home */}
        {/* exact chỉ đúng trang home mới hiện HomeLayout */}
        {/* <Route exact path = "/" component = {HomeLayout}/>
        <Route exact path = "/home" component = {HomePage}/>
        <Route exact path = "/about" component = {AboutPage}/>
        <Route exact path = "/list-movie" component = {ListMovie}/> */}
        {showHomeLayout(routeHome)}

        {/* Trang Admin */}
        {/* <Route path = "/admin" component = {AdminLayout}/>
        <Route path = "/dashboard" component = {DashboardPage} />
        <Route path = "/add-user" component = {AddUserPage} /> */}
        {showAdminLayout(routeAdmin)}

        {/* Page not found : nằm cuối cùng tất cả bộ định tuyến*/}
        <Route path = "" component = {PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
