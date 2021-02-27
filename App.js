import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import NewsScreen from './src/screens/NewsScreen';
import Form from "./src/screens/Form";
import counterscreen from "./src/screens/counterscreen";
import stringscreen from "./src/screens/stringscreen";
import BoxScreen from "./src/screens/BoxScreen"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    News: NewsScreen,
    FormPage: Form,
    counter: counterscreen,
    string: stringscreen,
    Box: BoxScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
