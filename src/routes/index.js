import React, { lazy, Suspense, Component } from 'react';
import { Redirect } from 'react-router-dom';
import BlankLayout from '../layouts/BlankLayout';
import HomeLayout from '../layouts/HomeLayout';
const HomeComponent = lazy(()=>import("../application/Home"))
const CartComponent = lazy(()=>import("../application/Cart"))
const UserComponent = lazy(()=>import("../application/User"))
const DeserveComponent = lazy(()=>import("../application/Deserve"))
const ClassifyComponent = lazy(()=>import("../application/Classify"))

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={<React.Fragment />}>
            <Component {...props}></Component>
        </Suspense>
    )
}

export default [{
    component: BlankLayout,
    routes: [
        {
            path:"/",
            component: HomeLayout,
            routes:[
                {
                    path:"/",
                    exact: true,
                    render: () => <Redirect to={"/home"} />
                },
                {
                    path: "/home",
                    component: SuspenseComponent(HomeComponent)
                },
                {
                    path: "/classify",
                    component: SuspenseComponent(ClassifyComponent)
                },
                {
                    path: "/deserve",
                    component: SuspenseComponent(DeserveComponent)
                },
                {
                    path: "/cart",
                    component: SuspenseComponent(CartComponent)
                },
                {
                    path: "/user",
                    component: SuspenseComponent(UserComponent),
                }
            ]
        },
    ]
}]