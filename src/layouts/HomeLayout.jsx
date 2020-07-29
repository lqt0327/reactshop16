import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom'

function Home(props) {
    console.log(props);
    const { route } = props;
    return (
        <>
            <h1>Home</h1>
            {renderRoutes(route.routes)}
        </>
    )
}

export default React.memo(Home);