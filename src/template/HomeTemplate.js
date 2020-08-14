import React from 'react';
import {Route} from 'react-router-dom';
import NavBar from  './../components/Navbar'
import Navbar from './../components/Navbar';

function HomeLayout(props) {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}

function HomeTemplate({Component, ...props}) {
    return (
       <Route 
           {...props}
           render = {(propsComponent)=>(
                <HomeLayout>
                    <Component {...propsComponent}/>
                </HomeLayout>
           )}
       />
       // Route chỉ cho phép tối đa 3 props
       // => phải xài render
    )
}

export default HomeTemplate;
