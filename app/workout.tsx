import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SetRow } from '@/components/SetRow';

export default function WorkoutScreen() {
  const router = useRouter();
  const [isTimerModalVisible, setTimerModalVisible] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

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
          
          <Text className="text-textMuted text-sm mb-4">Mejor serie anterior: <Text className="font-bold text-textMain">100kg x 5</Text></Text>

          {/* Table Headers */}
          <View className="flex-row px-3 mb-2">
            <Text className="w-8 text-center text-textMuted text-[10px] font-bold uppercase">Set</Text>
            <View className="flex-1 flex-row gap-2 px-3">
              <Text className="flex-1 text-center text-textMuted text-[10px] font-bold uppercase">KG</Text>
              <Text className="flex-1 text-center text-textMuted text-[10px] font-bold uppercase">Reps</Text>
              <Text className="flex-1 text-center text-textMuted text-[10px] font-bold uppercase">RIR</Text>
            </View>
            <View className="w-11" />
          </View>

          {/* Sets */}
          <SetRow setNumber={1} previousWeight="80" previousReps="10" />
          <SetRow setNumber={2} previousWeight="80" previousReps="10" />
          <SetRow setNumber={3} previousWeight="80" previousReps="8" />

          {/* Add Set Button */}
          <TouchableOpacity className="mt-3 py-3 items-center">
            <Text className="text-primary font-bold text-sm uppercase tracking-widest">+ Añadir Set</Text>
          </TouchableOpacity>
        </View>

        {/* Exercise Card: Incline DB Press */}
        <View className="mb-8">
          <View className="flex-row justify-between items-end mb-4">
            <View>
              <Text className="text-primary text-sm font-bold uppercase mb-1">Ejercicio 2</Text>
              <Text className="text-textMain text-3xl font-condensed">Incline DB Press</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="ellipsis-horizontal" size={24} color="#94A3B8" />
            </TouchableOpacity>
          </View>
          
          <Text className="text-textMuted text-sm mb-4">Mejor serie anterior: <Text className="font-bold text-textMain">36kg x 8</Text></Text>

          <View className="flex-row px-3 mb-2">
            <Text className="w-8 text-center text-textMuted text-[10px] font-bold uppercase">Set</Text>
            <View className="flex-1 flex-row gap-2 px-3">
              <Text className="flex-1 text-center text-textMuted text-[10px] font-bold uppercase">KG</Text>
              <Text className="flex-1 text-center text-textMuted text-[10px] font-bold uppercase">Reps</Text>
              <Text className="flex-1 text-center text-textMuted text-[10px] font-bold uppercase">RIR</Text>
            </View>
            <View className="w-11" />
          </View>

          <SetRow setNumber={1} previousWeight="36" previousReps="8" />
          <SetRow setNumber={2} previousWeight="36" previousReps="8" />
          <SetRow setNumber={3} previousWeight="36" previousReps="6" />

          <TouchableOpacity className="mt-3 py-3 items-center">
            <Text className="text-primary font-bold text-sm uppercase tracking-widest">+ Añadir Set</Text>
          </TouchableOpacity>
        </View>

        {/* Exercise Card: Pec Deck Fly */}
        <View className="mb-8">
          <View className="flex-row justify-between items-end mb-4">
            <View>
              <Text className="text-primary text-sm font-bold uppercase mb-1">Ejercicio 3</Text>
              <Text className="text-textMain text-3xl font-condensed">Pec Deck Fly</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="ellipsis-horizontal" size={24} color="#94A3B8" />
            </TouchableOpacity>
          </View>
          
          <Text className="text-textMuted text-sm mb-4">Mejor serie anterior: <Text className="font-bold text-textMain">60kg x 12</Text></Text>

          <View className="flex-row px-3 mb-2">
            <Text className="w-8 text-center text-textMuted text-[10px] font-bold uppercase">Set</Text>
            <View className="flex-1 flex-row gap-2 px-3">
              <Text className="flex-1 text-center text-textMuted text-[10px] font-bold uppercase">KG</Text>
              <Text className="flex-1 text-center text-textMuted text-[10px] font-bold uppercase">Reps</Text>
              <Text className="flex-1 text-center text-textMuted text-[10px] font-bold uppercase">RIR</Text>
            </View>
            <View className="w-11" />
          </View>

          <SetRow setNumber={1} previousWeight="60" previousReps="12" />
          <SetRow setNumber={2} previousWeight="60" previousReps="12" />
          <SetRow setNumber={3} previousWeight="60" previousReps="10" />

          <TouchableOpacity className="mt-3 py-3 items-center">
            <Text className="text-primary font-bold text-sm uppercase tracking-widest">+ Añadir Set</Text>
          </TouchableOpacity>
        </View>

        {/* Exercise Card: Tricep Pushdown */}
        <View className="mb-8">
          <View className="flex-row justify-between items-end mb-4">
            <View>
              <Text className="text-primary text-sm font-bold uppercase mb-1">Ejercicio 4</Text>
              <Text className="text-textMain text-3xl font-condensed">Tricep Pushdown</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="ellipsis-horizontal" size={24} color="#94A3B8" />
            </TouchableOpacity>
          </View>
          
          <Text className="text-textMuted text-sm mb-4">Mejor serie anterior: <Text className="font-bold text-textMain">25kg x 15</Text></Text>

          <View className="flex-row px-3 mb-2">
            <Text className="w-8 text-center text-textMuted text-[10px] font-bold uppercase">Set</Text>
            <View className="flex-1 flex-row gap-2 px-3">
              <Text className="flex-1 text-center text-textMuted text-[10px] font-bold uppercase">KG</Text>
              <Text className="flex-1 text-center text-textMuted text-[10px] font-bold uppercase">Reps</Text>
              <Text className="flex-1 text-center text-textMuted text-[10px] font-bold uppercase">RIR</Text>
            </View>
            <View className="w-11" />
          </View>

          <SetRow setNumber={1} previousWeight="25" previousReps="15" />
          <SetRow setNumber={2} previousWeight="25" previousReps="12" />
          <SetRow setNumber={3} previousWeight="25" previousReps="10" />
          <SetRow setNumber={4} previousWeight="25" previousReps="8" />

          <TouchableOpacity className="mt-3 py-3 items-center">
            <Text className="text-primary font-bold text-sm uppercase tracking-widest">+ Añadir Set</Text>
          </TouchableOpacity>
        </View>
        
        {/* Padding for bottom */}
        <View className="h-40" />
      </ScrollView>

      {/* Floating Rest Timer Indicator (Manual Logic) */}
      {isTimerRunning ? (
        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={() => setTimerModalVisible(true)}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-surface border border-primary/40 flex-row items-center rounded-full px-6 py-3 shadow-lg shadow-primary/10"
        >
          <Ionicons name="timer-outline" size={20} color="#22C55E" />
          <Text className="text-primary font-condensed text-2xl ml-2 mr-6">01:29</Text>
          <TouchableOpacity 
            onPress={() => setIsTimerRunning(false)}
            className="bg-primary/20 px-4 py-2 rounded-full flex-row items-center gap-1.5"
          >
            <Text className="text-primary font-bold uppercase text-[10px] tracking-widest">Omitir</Text>
            <Ionicons name="play-skip-forward" size={12} color="#22C55E" />
          </TouchableOpacity>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={() => setTimerModalVisible(true)}
          className="absolute bottom-10 right-6 bg-surface border border-surfaceBorder w-16 h-16 rounded-full items-center justify-center shadow-lg shadow-black/20"
        >
          <Ionicons name="timer" size={26} color="#94A3B8" />
        </TouchableOpacity>
      )}

      {/* Timer Modal (Bottom Sheet Mockup) */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isTimerModalVisible}
        onRequestClose={() => setTimerModalVisible(false)}
      >
        <Pressable 
          className="flex-1 bg-black/80 justify-center items-center px-4" 
          onPress={() => setTimerModalVisible(false)}
        >
          <Pressable 
            className="bg-surface rounded-[32px] border border-surfaceBorder p-6 w-full max-w-sm shadow-2xl"
            onPress={(e) => e.stopPropagation()}
          >
            <Text className="text-textMuted text-center font-bold uppercase tracking-widest text-xs mb-8">
              {isTimerRunning ? "Ajustar Descanso" : "Iniciar Descanso"}
            </Text>
            
            {/* Main Timer Display & Controls */}
            <View className="flex-row items-center justify-between mb-10 px-4">
              <TouchableOpacity className="w-16 h-16 bg-background rounded-full items-center justify-center border border-surfaceBorder shadow-sm">
                <Text className="text-textMain font-bold text-lg">-30s</Text>
              </TouchableOpacity>
              
              <Text className="text-primary text-7xl font-condensed tracking-tight">01:30</Text>
              
              <TouchableOpacity className="w-16 h-16 bg-background rounded-full items-center justify-center border border-surfaceBorder shadow-sm">
                <Text className="text-textMain font-bold text-lg">+30s</Text>
              </TouchableOpacity>
            </View>

            {/* Quick Presets */}
            <View className="flex-row justify-between gap-3 mb-10">
              {['1:00', '1:30', '2:00', '3:00'].map((time) => (
                <TouchableOpacity key={time} className="flex-1 bg-background border border-surfaceBorder py-4 rounded-2xl items-center shadow-sm">
                  <Text className="text-textMain font-condensed text-xl">{time}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Action Buttons */}
            <View className="flex-row gap-4">
              <TouchableOpacity 
                onPress={() => setTimerModalVisible(false)}
                className="flex-1 bg-surfaceBorder py-4 rounded-2xl items-center"
              >
                <Text className="text-textMain font-bold uppercase tracking-widest text-sm">Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => {
                  setIsTimerRunning(true);
                  setTimerModalVisible(false);
                }}
                className="flex-1 bg-primary py-4 rounded-2xl items-center shadow-lg shadow-primary/20"
              >
                <Text className="text-background font-bold uppercase tracking-widest text-sm">
                  {isTimerRunning ? "Guardar" : "Iniciar"}
                </Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
