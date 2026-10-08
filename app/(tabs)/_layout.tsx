import { Tabs } from "expo-router";

import { BottomTabBar, TabKey } from "../../components/BottomTabBar";

const tabKeys: TabKey[] = ["home", "instagram", "twitter", "reports", "profile"];

type AppTabBarProps = {
  state: {
    index: number;
    routes: Array<{ name: string }>;
  };
  navigation: {
    navigate: (name: string) => void;
  };
};

function AppTabBar({ state, navigation }: AppTabBarProps) {
  const activeTab = state.routes[state.index].name as TabKey;

  return (
    <BottomTabBar
      activeTab={activeTab}
      onTabPress={(tab) => navigation.navigate(tab)}
    />
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <AppTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      {tabKeys.map((name) => (
        <Tabs.Screen key={name} name={name} />
      ))}
    </Tabs>
  );
}
