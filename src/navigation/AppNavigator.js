
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import {
  NavigationContainer,
  DefaultTheme,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { usePortfolio } from '../context/PortfolioContext';
import { APP_NAME, COLORS } from '../data/portfolio';

import HomeScreen from '../screens/HomeScreen';
import SkillsScreen from '../screens/SkillsScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ProjectDetailsScreen from '../screens/ProjectDetailsScreen';
import EditorScreen from '../screens/EditorScreen';
import MediaScreen from '../screens/MediaScreen';
import AboutScreen from '../screens/AboutScreen';
import MoreScreen from '../screens/MoreScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000000',
    card: '#000000',
    text: '#FFFFFF',
    border: '#FF8080',
    primary: '#FF8080',
    notification: '#FF8080',
  },
};

const headerOptions = {
  headerStyle: { backgroundColor: '#000000' },
  headerTintColor: '#FFFFFF',
  headerTitleStyle: {
    fontWeight: '800',
    color: '#FF8080',
  },
  contentStyle: { backgroundColor: '#000000' },
};

function ProjectsStack() {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen
        name="ProjectList"
        component={ProjectsScreen}
        options={{ title: 'Selected Projects' }}
      />
      <Stack.Screen
        name="ProjectDetails"
        component={ProjectDetailsScreen}
        options={{ title: 'Project Details' }}
      />
    </Stack.Navigator>
  );
}

function MoreStack() {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen
        name="MoreHome"
        component={MoreScreen}
        options={{ title: 'More Options' }}
      />
      <Stack.Screen
        name="ProfilePhoto"
        component={MediaScreen}
        options={{ title: 'Profile Photo' }}
      />
      <Stack.Screen
        name="AboutInfo"
        component={AboutScreen}
        options={{ title: 'About AropPortfolio' }}
      />
    </Stack.Navigator>
  );
}

const TAB_ICONS = {
  Home: { active: 'home', inactive: 'home-outline' },
  Skills: { active: 'bulb', inactive: 'bulb-outline' },
  Projects: { active: 'briefcase', inactive: 'briefcase-outline' },
  Edit: { active: 'create', inactive: 'create-outline' },
  More: { active: 'grid', inactive: 'grid-outline' },
};

function FloatingTabBar({ state, descriptors, navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.dockOuter,
        { paddingBottom: Math.max(insets.bottom, 8) },
      ]}
    >
      <View style={styles.dock}>
        {state.routes.map((route, index) => {
          const focused = state.index === index;
          const options = descriptors[route.key].options;
          const label = options.tabBarLabel || route.name;
          const iconSet = TAB_ICONS[route.name];

          const iconName = focused
            ? iconSet.active
            : iconSet.inactive;

          function handlePress() {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          }

          return (
            <TouchableOpacity
              key={route.key}
              activeOpacity={0.8}
              onPress={handlePress}
              accessibilityRole="button"
              accessibilityState={{ selected: focused }}
              accessibilityLabel={String(label)}
              style={[
                styles.tabButton,
                focused && styles.activeTab,
              ]}
            >
              <Ionicons
                name={iconName}
                size={21}
                color={focused ? '#000000' : '#FFFFFF'}
              />

              {focused && (
                <Text style={styles.activeLabel}>
                  {label}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default function AppNavigator() {
  const { ready } = usePortfolio();

  if (!ready) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#FF8080" />
        <Text style={styles.loadingText}>
          Preparing your portfolio...
        </Text>
      </View>
    );
  }

  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        tabBar={(props) => <FloatingTabBar {...props} />}
        screenOptions={{
          headerStyle: { backgroundColor: '#000000' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: '800',
            color: '#FF8080',
          },
          sceneStyle: { backgroundColor: '#000000' },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: APP_NAME,
            tabBarLabel: 'Home',
          }}
        />

        <Tab.Screen
          name="Skills"
          component={SkillsScreen}
          options={{
            title: 'Skills & Education',
            tabBarLabel: 'Skills',
          }}
        />

        <Tab.Screen
          name="Projects"
          component={ProjectsStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Projects',
          }}
        />

        <Tab.Screen
          name="Edit"
          component={EditorScreen}
          options={{
            title: 'Edit Profile',
            tabBarLabel: 'Edit',
          }}
        />

        <Tab.Screen
          name="More"
          component={MoreStack}
          options={{
            headerShown: false,
            tabBarLabel: 'More',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    color: '#FFFFFF',
    marginTop: 12,
    fontSize: 13,
  },

  dockOuter: {
    backgroundColor: '#000000',
    paddingHorizontal: 14,
    paddingTop: 7,
  },

  dock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#000000',
    borderColor: '#FF8080',
    borderWidth: 1,
    borderRadius: 23,
    minHeight: 64,
    paddingHorizontal: 5,
    paddingVertical: 7,
  },

  tabButton: {
    flex: 1,
    minHeight: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    paddingHorizontal: 5,
    gap: 6,
  },

  activeTab: {
    flex: 1.65,
    backgroundColor: '#FF8080',
    paddingHorizontal: 11,
  },

  activeLabel: {
    color: '#000000',
    fontWeight: '900',
    fontSize: 11,
  },
});
