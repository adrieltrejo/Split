import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function RoutinesScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-background pt-16 px-4">
      {/* Header */}
      <View className="mb-6 flex-row justify-between items-end">
        <View>
          <Text className="text-textMuted text-sm font-sans uppercase tracking-widest mb-1">Biblioteca</Text>
          <Text className="text-textMain text-4xl font-condensed leading-tight mb-2">Programas</Text>
          <Text className="text-primary font-bold text-xs uppercase tracking-widest">1 Activo • 2 Guardados</Text>
        </View>
      </View>

      {/* ACTIVO: El Programa/Rutina Top Level Actual */}
      <View className="mb-8">
        <View className="bg-surface border border-primary/30 rounded-3xl p-6 shadow-lg shadow-primary/5 relative overflow-hidden">
          {/* Brillo sutil de programa activo */}
          <View className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10" />
          
          <View className="flex-row justify-between items-start mb-5">
            <View>
              <View className="bg-primary/10 px-2 py-1 rounded-md self-start mb-2 border border-primary/20">
                <Text className="text-primary text-[10px] font-bold uppercase tracking-widest">Programa Activo</Text>
              </View>
              <Text className="text-textMain text-3xl font-condensed">PPL de Verano</Text>
              <Text className="text-textMuted text-sm mt-1">3 Días Base</Text>
            </View>
            <TouchableOpacity className="w-10 h-10 bg-background rounded-full items-center justify-center border border-surfaceBorder shadow-sm">
              <Ionicons name="settings-outline" size={18} color="#94A3B8" />
            </TouchableOpacity>
          </View>
          
          <Text className="text-textMuted text-[10px] uppercase tracking-widest font-bold mb-3">Tus Entrenamientos (Días)</Text>
          
          <View className="gap-3">
            {/* Día 1 */}
            <TouchableOpacity 
              className="bg-background border border-surfaceBorder rounded-2xl p-4 flex-row items-center justify-between"
              onPress={() => router.push('/workout')}
            >
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-full bg-primary/10 items-center justify-center border border-primary/20">
                  <Text className="text-primary font-condensed text-lg">1</Text>
                </View>
                <View>
                  <Text className="text-textMain font-bold text-lg">Push Day</Text>
                  <Text className="text-textMuted text-xs mt-0.5">Pecho • Hombros • Tríceps</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#475569" />
            </TouchableOpacity>

            {/* Día 2 */}
            <TouchableOpacity className="bg-background border border-surfaceBorder rounded-2xl p-4 flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-full bg-sky-500/10 items-center justify-center border border-sky-500/20">
                  <Text className="text-sky-500 font-condensed text-lg">2</Text>
                </View>
                <View>
                  <Text className="text-textMain font-bold text-lg">Pull Day</Text>
                  <Text className="text-textMuted text-xs mt-0.5">Espalda • Bíceps • Posterior</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#475569" />
            </TouchableOpacity>

            {/* Día 3 */}
            <TouchableOpacity className="bg-background border border-surfaceBorder rounded-2xl p-4 flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-full bg-amber-500/10 items-center justify-center border border-amber-500/20">
                  <Text className="text-amber-500 font-condensed text-lg">3</Text>
                </View>
                <View>
                  <Text className="text-textMain font-bold text-lg">Leg Day</Text>
                  <Text className="text-textMuted text-xs mt-0.5">Cuádriceps • Isquios</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#475569" />
            </TouchableOpacity>

            {/* Agregar un día a este programa */}
            <TouchableOpacity className="mt-3 bg-background border border-dashed border-surfaceBorder rounded-2xl py-3 items-center justify-center flex-row gap-2">
              <Ionicons name="add" size={18} color="#94A3B8" />
              <Text className="text-textMuted font-bold text-xs uppercase tracking-widest">Añadir Nuevo Día</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* OTROS PROGRAMAS */}
      <View className="mb-8">
        <Text className="text-textMuted text-xs font-bold uppercase tracking-widest mb-3 ml-1">Tu Biblioteca</Text>
        <View className="gap-3">
          <TouchableOpacity className="bg-surface border border-surfaceBorder rounded-2xl p-4 flex-row items-center justify-between">
            <View className="flex-row items-center gap-4">
              <View className="w-10 h-10 bg-background rounded-xl items-center justify-center border border-surfaceBorder shadow-sm">
                <Ionicons name="folder" size={18} color="#94A3B8" />
              </View>
              <View>
                <Text className="text-textMain text-xl font-condensed mb-0.5">Arnold Split</Text>
                <Text className="text-textMuted text-xs">6 Días Base</Text>
              </View>
            </View>
            <Ionicons name="ellipsis-vertical" size={20} color="#475569" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-surface border border-surfaceBorder rounded-2xl p-4 flex-row items-center justify-between">
            <View className="flex-row items-center gap-4">
              <View className="w-10 h-10 bg-background rounded-xl items-center justify-center border border-surfaceBorder shadow-sm">
                <Ionicons name="folder" size={18} color="#94A3B8" />
              </View>
              <View>
                <Text className="text-textMain text-xl font-condensed mb-0.5">Fuerza 5x5</Text>
                <Text className="text-textMuted text-xs">3 Días Base</Text>
              </View>
            </View>
            <Ionicons name="ellipsis-vertical" size={20} color="#475569" />
          </TouchableOpacity>
        </View>
      </View>

      {/* CREAR NUEVO PROGRAMA */}
      <TouchableOpacity className="bg-surface border border-surfaceBorder rounded-3xl p-5 flex-row items-center gap-4 mb-8 shadow-lg shadow-black/20">
        <View className="w-12 h-12 bg-primary/20 rounded-full items-center justify-center border border-primary/30 shadow-lg shadow-primary/20">
          <Ionicons name="add" size={24} color="#22C55E" />
        </View>
        <View>
          <Text className="text-textMain font-bold text-lg mb-0.5">Nuevo Programa</Text>
          <Text className="text-textMuted text-xs">Diseña tu propio bloque desde cero</Text>
        </View>
      </TouchableOpacity>

      <View className="h-24" />
    </ScrollView>
  );
}
