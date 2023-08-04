import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

import Colors from '@/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint }}>
      <Tabs.Screen name="index" options={{ title: 'Static Assets' }} />
      <Tabs.Screen name="dynamic" options={{ title: 'Dynamic Assets' }} />
      <Tabs.Screen name="shared" options={{ title: 'Shared Assets' }} />
    </Tabs>
  );
}
