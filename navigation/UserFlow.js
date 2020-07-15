// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../screens/Dashboard';
import DrawerContent from '../components/drawerContent.component';
import MainTab from '../screens/MainTab';
import Walkers from '../screens/Walkers';

const Drawer = createDrawerNavigator();

function UserFlow() {
    return (
        
        <Drawer.Navigator screenOptions={{headerStyle:{backgroundColor:'#009387'}}} drawerContent={props => <DrawerContent {...props} /> }>
            {/* <Drawer.Screen  
                name="Dashboard" 
                component={Dashboard}
            /> */}
            <Drawer.Screen  
                name="Dashboard" 
                component={MainTab}
            />
            <Drawer.Screen  
                name="Walkers" 
                component={Walkers}
            />
            {/* <Drawer.Screen  
                name="Dashboard" 
                component={Dashboard}
            /> */}
        </Drawer.Navigator>

    );
}

export default UserFlow;