import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routeConfig';
import { Loader } from 'shared/ui/Loader/Loader';

export const AppRouter = () => (
    <Suspense fallback={<Loader />}>
        <Routes>
            {routeConfig.map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <div className='page-wrapper'>
                            {element}
                        </div>
                    )}
                />
            ))}
        </Routes>
    </Suspense>
);
