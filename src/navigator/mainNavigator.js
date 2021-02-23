import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings208418Navigator from '../features/Settings208418/navigator';
import UserProfile208416Navigator from '../features/UserProfile208416/navigator';
import BlankScreen0208144Navigator from '../features/BlankScreen0208144/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings208418: { screen: Settings208418Navigator },
UserProfile208416: { screen: UserProfile208416Navigator },
BlankScreen0208144: { screen: BlankScreen0208144Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
