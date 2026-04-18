import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { Platform, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HapticTab } from '@/components/haptic-tab';

export default function TabLayout() {
  const router = useRouter();
  const isWorkoutActive = true; // MOCK FLAG para visualizar la UI activa

  return (
    <View className="flex-1 bg-background">
      <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#22C55E', // primary
        tabBarInactiveTintColor: '#94A3B8', // textMuted
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: '#020617', // background
          borderTopColor: '#1E293B', // surfaceBorder
          height: Platform.OS === 'ios' ? 88 : 60,
          paddingBottom: Platform.OS === 'ios' ? 28 : 10,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="routines"
        options={{
          title: 'Routines',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="list" color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="time" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="person" color={color} />,
        }}
      />
    </Tabs>

      {/* Floating Active Workout Bar */}
      {isWorkoutActive && (
        <TouchableOpacity 
          className="absolute bottom-[75px] left-4 right-4 bg-primary rounded-full p-3 flex-row items-center justify-between shadow-lg shadow-primary/30"
          onPress={() => router.push('/workout')}
          activeOpacity={0.9}
        >
          <View className="flex-row items-center gap-3">
            <View className="bg-background/20 w-10 h-10 rounded-full items-center justify-center">
              <Ionicons name="barbell" size={20} color="#020617" />
            </View>
            <View>
              <Text className="text-background font-bold text-[11px] uppercase tracking-widest">Entrenando: Push Day</Text>
              <Text className="text-background/80 text-xs font-semibold">00:15:32 • 2/6 Ejercicios</Text>
            </View>
          </View>
          <View className="w-10 h-10 items-center justify-center bg-background/10 rounded-full">
            <Ionicons name="play" size={18} color="#020617" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
