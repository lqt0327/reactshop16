import React from 'react';
import { renderRoutes } from 'react-router-config';

function User(props) {
    const { route } = props
    return (
        <div>
            <h1>User</h1>
            {/* {renderRoutes(route.routes)} */}
        </div>
    )
}
export default User;