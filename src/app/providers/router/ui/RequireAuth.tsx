import { FC, ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';
import { AppRoutes, RoutePath } from '@/shared/config/routerConfig/routeConfig';

interface RequireAuthProps {
    children: ReactNode;
    roles?: UserRole[];
}

export const RequireAuth: FC<RequireAuthProps> = ({ children, roles }) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((role) => userRoles?.includes(role));
    }, [roles, userRoles]);

    if (!auth) {
        return (
            <Navigate to={RoutePath[AppRoutes.MAIN]} state={{ from: location }} replace />
        );
    }

    if (!hasRequiredRoles) {
        return (
            <Navigate to={RoutePath[AppRoutes.FORBIDDEN]} state={{ from: location }} replace />
        );
    }

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
