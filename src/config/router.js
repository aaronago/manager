import React from 'react';
import { TabNavigator, StackNavigator, addNavigationHelpers } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import EmployeeList from '../components/EmployeeList';

export const EmployeeStack = StackNavigator({
  Employee: {
    screen: EmployeeList,
    navigationOptions: {
      tabBarLabel: 'Employees',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      header: null
    }
  }
});

export const Tabs = TabNavigator(
  {
    Login: {
      screen: LoginForm,
      navigationOptions: {
        tabBarLabel: 'Login',
        tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      }
    },
    Employee: {
      screen: EmployeeStack
    }
  },
  {
    tabBarPosition: 'top',
    animationEnabled: true
  }
);

const RootNavigationWithState = ({ dispatch, nav }) =>
  <Tabs
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })}
  />;

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(RootNavigationWithState);
