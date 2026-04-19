import { ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import 'react-native-reanimated'
import { PortalHost } from '@rn-primitives/portal'
import { useColorScheme as useNativewindColorScheme } from 'nativewind'

import '../global.css'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { NAV_THEME } from '@/lib/theme'

export const unstable_settings = {
  anchor: '(tabs)',
}

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const { setColorScheme } = useNativewindColorScheme()

  useEffect(() => {
    setColorScheme(colorScheme ?? 'light')
  }, [colorScheme, setColorScheme])

  return (
    <ThemeProvider value={colorScheme === 'dark' ? NAV_THEME.dark : NAV_THEME.light}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
      <PortalHost />
    </ThemeProvider>
  )
}
