import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routerConfig/routeConfig';

export const RequireAuth: FC = ({ children }) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return (
            <Navigate to={RoutePath[AppRoutes.MAIN]} state={{ from: location }} replace />
        );
    }

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
