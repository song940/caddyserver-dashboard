import React from 'react';

export const Route = ({ route }) => {
    console.log(route);
    const { match, handle } = route;
    return (
        <div>
            <h5>{match[0].host}</h5>
        </div>
    );
};

export const Routes = ({ routes }) => {
    return (
        <div>
            <h4>Routes</h4>
            <div>
                {
                    routes.map((route, i) => <Route key={i} route={route} />)
                }
            </div>
        </div>
    );
};

export const Server = ({ server }) => {
    const { id, routes } = server;
    console.log(server);
    
    return (
        <div>
            <h3>#{id}</h3>
            <div>
                <Routes routes={routes} />
            </div>
        </div>
    );
};
