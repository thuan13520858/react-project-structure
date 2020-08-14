import React from 'react';
import {Route} from 'react-router-dom';
import {NavBarAdmin} from './../components/NavBarAdmin';

function AdminLayout(props) {
    return (
        <div>
            {/* <NavBarAdmin/> */}
            {props.children}
        </div>
    )
}

export default function AdminTemplate({Component, ...props}) {
    return (
        <Route
            {...props}
            render = {(propsComponent) => (
                <AdminLayout>
                    <Component {...propsComponent} />
                </AdminLayout>
            )}
        />
    )
}
