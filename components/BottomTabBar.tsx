import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type TabKey = "home" | "instagram" | "twitter" | "reports" | "profile";

type Tab = {
  key: TabKey;
  label: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  activeIcon: keyof typeof MaterialCommunityIcons.glyphMap;
};

const tabs: Tab[] = [
  { key: "home", label: "Home", icon: "home-outline", activeIcon: "home" },
  { key: "instagram", label: "Instagram", icon: "instagram", activeIcon: "instagram" },
  { key: "twitter", label: "Twitter", icon: "twitter", activeIcon: "twitter" },
  { key: "reports", label: "Reports", icon: "file-document-outline", activeIcon: "file-document" },
  { key: "profile", label: "Profile", icon: "account-outline", activeIcon: "account" },
];

type BottomTabBarProps = {
  activeTab: TabKey;
  onTabPress: (tab: TabKey) => void;
};

export function BottomTabBar({ activeTab, onTabPress }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 10) }]}>
      <View style={styles.bar}>
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;

          return (
            <Pressable
              key={tab.key}
              accessibilityRole="tab"
              accessibilityState={{ selected: isActive }}
              accessibilityLabel={tab.label}
              onPress={() => onTabPress(tab.key)}
              style={({ pressed }) => [styles.tab, pressed && styles.pressed]}
            >
              <MaterialCommunityIcons
                name={isActive ? tab.activeIcon : tab.icon}
                size={27}
                color={isActive ? "#EC1765" : "#202A3A"}
              />
              <Text style={[styles.label, isActive && styles.activeLabel]}>
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 8,
    backgroundColor: "#F8F9FC",
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 82,
    paddingHorizontal: 6,
    borderRadius: 38,
    backgroundColor: "#FFFFFF",
    shadowColor: "#19213A",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 5,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 70,
    borderRadius: 30,
  },
  pressed: {
    opacity: 0.65,
  },
  label: {
    marginTop: 4,
    color: "#202A3A",
    fontSize: 11,
    fontWeight: "600",
  },
  activeLabel: {
    color: "#EC1765",
  },
});
