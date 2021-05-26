import { Route, Switch } from 'react-router';
import PrivateRoute from './PrivateRoute';

export function routerConfig(routers, parrentPath = '') {
	return (
		<Switch>
			{routers.map((router) => {
				let { exact, path, component: Component, routers: childRouters, auth } = router;

				path = path || '';
				path = parrentPath + '/' + path;
				path = path.replace(/\/+/g, '/');

				let child = null;
				if (childRouters) {
					child = routerConfig(childRouters, path);
				}

				if (auth) {
					return (
						<PrivateRoute
							exact={exact}
							path={path}
							component={(prop) => <Component {...prop}>{child}</Component>}
						/>
					);
				}

				return (
					<Route
						exact={exact}
						path={path}
						component={(props) => <Component {...props}>{child}</Component>}
					/>
				);
			})}
		</Switch>
	);
}
