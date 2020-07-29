import React, { lazy, Suspense, Component } from 'react';
import { Redirect } from 'react-router-dom';
import BlankLayout from '../layouts/BlankLayout';
import HomeLayout from '../layouts/HomeLayout';
const RecommedComponent = lazy(()=>import("../application/Recommend/"))

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={<React.Fragment></React.Fragment>}>
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
                    render: () => <Redirect to={"/recommend"} />
                },
                {
                    path: "/recommend",
                    component: SuspenseComponent(RecommedComponent)
                }
            ]
        }
    ]
}]