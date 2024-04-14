import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'shared/ui/Loader/Loader';
import { AppRouterProps, routeConfig } from 'shared/config/routerConfig/routeConfig';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback(({ element: routeElement, path, authOnly }: AppRouterProps) => {
        const element = routeElement;
        return (
            <Route
                key={path}
                path={path}
                element={authOnly ? (
                    <RequireAuth>{element}</RequireAuth>
                ) : (
                    element
                )}
            />
        );
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {routeConfig.map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );
});
