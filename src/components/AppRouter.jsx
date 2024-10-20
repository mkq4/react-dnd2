import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { useState } from 'react';
const AppRouter = () => {
	const [isAuth, setIsAuth] = useState(false)
  return (
    <Routes>
        {publicRoutes.map(({path, Component}) => {
            return <Route key={path} path={path} element={<Component />}/>
        })}
				{isAuth && privateRoutes.map(({path, Component}) => {
            return <Route key={path} path={path} element={<Component />}/>
        })}
    </Routes>
  )
}

export default AppRouter