import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";

import HomeScreen from "./src/HomeScreen/index";
import Login from "./src/Login";
import Register from "./src/Register";
import { Entypo } from "./icons";
import PageScreen from "./src/Page/index";
import CategoryScreen from "./src/Category/index";
import UserScreen from "./src/UserScreen/index";

const Stack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  style: {
    backgroundColor: "#343434",
    borderTopColor: "#343434",
    paddingBottom: 12,
  },
};

const TabNavScreens = () => {
  return (
    <TabNav.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          switch (route.name) {
            case "HomeScreen":
              iconName = "home";
              break;

            case "PageScreen":
              iconName = "app-store";
              break;

            case "CategoryScreen":
              iconName = "flow-tree";
              break;
            case "UserScreen":
              iconName = "user";
              break;

            default:
              iconName = "home";
              break;
          }
          return (
            <TabBarIconContainer focused={focused}>
              <Entypo
                name={iconName}
                size={24}
                color={focused ? "#343434" : "#fff"}
              />
            </TabBarIconContainer>
          );
        },
      })}
    >
      <TabNav.Screen name="HomeScreen" component={HomeScreen} />
      <TabNav.Screen name="PageScreen" component={PageScreen} />
      <TabNav.Screen name="CategoryScreen" component={CategoryScreen} />
      <TabNav.Screen name="UserScreen" component={UserScreen} />
    </TabNav.Navigator>
  );
};
export default function App() {
  const [userLogin, setUserLogin] = useState(false);

  return (
    <NavigationContainer>
      {userLogin ? (
        <Stack.Navigator headerMode="none" mode="modal">
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator headerMode="none" mode="modal">
          <Stack.Screen name="App" component={TabNavScreens} />
          <Stack.Screen name="Page" component={PageScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
          <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
const TabBarIconContainer = styled.View`
  background-color: ${(props) => (props.focused ? "cyan" : "#343434")};
  padding: 2px 18px;
  border-radius: 32px;
`;
