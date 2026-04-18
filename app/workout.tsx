import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SetRow } from '@/components/SetRow';

export default function WorkoutScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-background">
      {/* Top Navigation Bar */}
      <View className="flex-row items-center justify-between px-4 pt-16 pb-4 border-b border-surfaceBorder bg-surface/50">
        <TouchableOpacity 
          className="w-10 h-10 items-center justify-center"
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-down" size={28} color="#22C55E" />
        </TouchableOpacity>
        
        <View className="items-center">
          <Text className="text-textMuted text-xs uppercase tracking-widest">Tiempo Transcurrido</Text>
          <Text className="text-primary text-2xl font-condensed">00:15:32</Text>
        </View>

        <TouchableOpacity className="bg-primary/20 px-4 py-2 rounded-full">
          <Text className="text-primary font-bold">FINISH</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 p-4">
        {/* Exercise Card: Bench Press */}
        <View className="mb-8">
          <View className="flex-row justify-between items-end mb-4">
            <View>
              <Text className="text-primary text-sm font-bold uppercase mb-1">Ejercicio 1</Text>
              <Text className="text-textMain text-3xl font-condensed">Bench Press</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="ellipsis-horizontal" size={24} color="#94A3B8" />
            </TouchableOpacity>
          </View>
          
          <Text className="text-textMuted mb-6">Última vez: 3x10 @ 80kg</Text>

          {/* Table Headers */}
          <View className="flex-row px-4 mb-2">
            <Text className="w-8 text-center text-textMuted text-xs">SET</Text>
            <Text className="flex-1 text-center text-textMuted text-xs">KG</Text>
            <Text className="flex-1 text-center text-textMuted text-xs">REPS</Text>
            <View className="w-14 ml-2" />
          </View>

          {/* Sets */}
          <SetRow setNumber={1} previousWeight="80" previousReps="10" />
          <SetRow setNumber={2} previousWeight="80" previousReps="10" />
          <SetRow setNumber={3} previousWeight="80" previousReps="8" />

          {/* Add Set Button */}
          <TouchableOpacity className="mt-4 py-3 items-center">
            <Text className="text-primary font-semibold">+ Añadir Set</Text>
          </TouchableOpacity>

          {/* Inline History Link */}
          <TouchableOpacity className="mt-6 flex-row items-center justify-center bg-surface border border-surfaceBorder py-4 rounded-2xl">
            <Ionicons name="stats-chart" size={18} color="#94A3B8" />
            <Text className="text-textMuted ml-2 font-medium">Ver historial de Bench Press</Text>
          </TouchableOpacity>
        </View>
        
        {/* Padding for bottom */}
        <View className="h-40" />
      </ScrollView>

      {/* Floating Rest Timer Indicator (Mock) */}
      <View className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-surfaceBorder flex-row items-center rounded-full px-6 py-3 shadow-2xl border border-white/10">
        <Ionicons name="timer-outline" size={20} color="#F8FAFC" />
        <Text className="text-textMain font-condensed text-xl ml-2 mr-4">01:29</Text>
        <TouchableOpacity>
          <Text className="text-textMuted font-bold uppercase text-xs">Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
