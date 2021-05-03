import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './stack.routes';
// criado como componente
const Routes = () => (
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>

)

export default Routes;