import { Tabs } from 'expo-router'

import { HapticTab } from '@/components/haptic-tab'
import { IconSymbol } from '@/components/ui/icon-symbol'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { THEME } from '@/lib/theme'

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? 'light'

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: THEME[colorScheme].foreground,
        tabBarInactiveTintColor: THEME[colorScheme].mutedForeground,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  )
}
