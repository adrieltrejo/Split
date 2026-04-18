import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <ScrollView className="flex-1 bg-background pt-16 px-4">
      {/* 1. Header / Gamification */}
      <View className="mb-8 items-center mt-4">
        <View className="w-28 h-28 bg-surface border-2 border-primary rounded-full items-center justify-center mb-4 shadow-lg shadow-primary/20">
          <Ionicons name="person" size={48} color="#94A3B8" />
        </View>
        <Text className="text-textMain text-4xl font-condensed mb-2">Adriel</Text>
        
        {/* Nivel Gamificado (Solo Número) */}
        <View className="bg-primary/10 px-5 py-2 rounded-full border border-primary/30 flex-row items-center gap-2 mb-6 shadow-sm shadow-primary/10">
          <Ionicons name="star" size={14} color="#22C55E" />
          <Text className="text-primary font-bold text-sm uppercase tracking-widest">Nivel 12</Text>
        </View>

        <View className="flex-row gap-8 mt-2 bg-surface p-5 rounded-3xl border border-surfaceBorder w-full justify-between px-8 shadow-sm shadow-black/10">
          <View className="items-center">
            <Text className="text-textMain font-bold font-condensed text-2xl">142</Text>
            <Text className="text-textMuted text-[10px] uppercase tracking-widest mt-1">Sesiones</Text>
          </View>
          <View className="w-[1px] bg-surfaceBorder" />
          <View className="items-center">
            <Text className="text-textMain font-bold font-condensed text-2xl">12</Text>
            <Text className="text-textMuted text-[10px] uppercase tracking-widest mt-1">Racha (Días)</Text>
          </View>
          <View className="w-[1px] bg-surfaceBorder" />
          <View className="items-center">
            <Text className="text-textMain font-bold font-condensed text-2xl">2026</Text>
            <Text className="text-textMuted text-[10px] uppercase tracking-widest mt-1">Inicio</Text>
          </View>
        </View>
      </View>

      {/* 2. Panel de Métricas Corporales */}
      <View className="mb-10">
        <Text className="text-textMain text-xl font-condensed mb-4 ml-1">Métricas Corporales</Text>
        
        {/* Weight Tracker Premium */}
        <View className="bg-surface border border-surfaceBorder rounded-3xl p-6 mb-4 shadow-lg shadow-black/10 relative overflow-hidden">
          {/* Brillo de fondo sutil */}
          <View className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10" />
          
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-textMuted text-xs uppercase tracking-widest font-bold">Peso Corporal</Text>
            <View className="bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              <Text className="text-primary text-[10px] font-bold uppercase tracking-widest">-1.2 kg mes</Text>
            </View>
          </View>
          <View className="flex-row items-end justify-between">
            <Text className="text-textMain text-6xl font-condensed tracking-tighter">78.5 <Text className="text-textMuted text-2xl font-sans tracking-normal">kg</Text></Text>
            <TouchableOpacity className="w-14 h-14 bg-primary/20 rounded-full border border-primary/30 items-center justify-center shadow-lg shadow-primary/20">
              <Ionicons name="add" size={28} color="#22C55E" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tape Measurements Grid */}
        <View className="flex-row gap-3">
          <View className="flex-1 bg-surface border border-surfaceBorder rounded-2xl p-4 items-center">
            <Text className="text-textMuted text-[10px] uppercase tracking-widest font-bold mb-1">Bíceps</Text>
            <Text className="text-textMain text-2xl font-condensed">38 <Text className="text-textMuted text-sm font-sans font-bold">cm</Text></Text>
          </View>
          <View className="flex-1 bg-surface border border-surfaceBorder rounded-2xl p-4 items-center">
            <Text className="text-textMuted text-[10px] uppercase tracking-widest font-bold mb-1">Cintura</Text>
            <Text className="text-textMain text-2xl font-condensed">82 <Text className="text-textMuted text-sm font-sans font-bold">cm</Text></Text>
          </View>
          <View className="flex-1 bg-surface border border-surfaceBorder rounded-2xl p-4 items-center">
            <Text className="text-textMuted text-[10px] uppercase tracking-widest font-bold mb-1">Pecho</Text>
            <Text className="text-textMain text-2xl font-condensed">102 <Text className="text-textMuted text-sm font-sans font-bold">cm</Text></Text>
          </View>
        </View>
      </View>

      {/* 3. Sala de Trofeos */}
      <View className="mb-10">
        <View className="flex-row items-center justify-between mb-4 px-1">
          <Text className="text-textMain text-xl font-condensed">Sala de Trofeos</Text>
          <Text className="text-primary text-sm font-bold">12 / 50</Text>
        </View>

        <View className="flex-row flex-wrap gap-3">
          {/* Achievement 1 */}
          <View className="w-[31%] bg-surface border border-primary/30 rounded-2xl p-4 items-center shadow-lg shadow-primary/5">
            <View className="w-12 h-12 rounded-full bg-amber-500/10 items-center justify-center mb-3">
              <Ionicons name="flash" size={24} color="#FBBF24" />
            </View>
            <Text className="text-textMain text-xs font-bold text-center leading-tight mb-1">El Comienzo</Text>
            <Text className="text-textMuted text-[9px] text-center uppercase tracking-wider">10 entrenos</Text>
          </View>

          {/* Achievement 2 */}
          <View className="w-[31%] bg-surface border border-primary/30 rounded-2xl p-4 items-center shadow-lg shadow-primary/5">
            <View className="w-12 h-12 rounded-full bg-primary/10 items-center justify-center mb-3">
              <Ionicons name="barbell" size={24} color="#22C55E" />
            </View>
            <Text className="text-textMain text-xs font-bold text-center leading-tight mb-1">La Tonelada</Text>
            <Text className="text-textMuted text-[9px] text-center uppercase tracking-wider">1,000 kg</Text>
          </View>

          {/* Achievement 3 */}
          <View className="w-[31%] bg-background border border-surfaceBorder/50 rounded-2xl p-4 items-center opacity-40">
            <View className="w-12 h-12 rounded-full bg-surfaceBorder/30 items-center justify-center mb-3">
              <Ionicons name="lock-closed" size={20} color="#64748B" />
            </View>
            <Text className="text-textMuted text-xs font-bold text-center leading-tight mb-1">Disciplina</Text>
            <Text className="text-textMuted text-[9px] text-center uppercase tracking-wider">1 mes seguido</Text>
          </View>
        </View>
      </View>

      {/* 4. Configuración (Diseño Premium) */}
      <View className="mb-8">
        <Text className="text-textMain text-xl font-condensed mb-4 ml-1">Ajustes del Sistema</Text>
        
        <View className="gap-3">
          
          {/* Switch Modo Claro */}
          <TouchableOpacity 
            activeOpacity={0.9} 
            onPress={() => setIsLightMode(!isLightMode)}
            className="bg-surface border border-surfaceBorder rounded-2xl p-4 flex-row items-center justify-between shadow-sm"
          >
            <View className="flex-row items-center gap-4">
              <View className="w-10 h-10 rounded-xl bg-background border border-surfaceBorder items-center justify-center">
                <Ionicons name="sunny" size={20} color="#FBBF24" />
              </View>
              <View>
                <Text className="text-textMain font-bold text-base">Modo Claro</Text>
                <Text className="text-textMuted text-xs">Activar colores blancos</Text>
              </View>
            </View>
            <Switch 
              value={isLightMode} 
              onValueChange={setIsLightMode}
              trackColor={{ false: '#1E293B', true: '#22C55E' }} 
            />
          </TouchableOpacity>

          {/* Selector de Unidades */}
          <TouchableOpacity 
            activeOpacity={0.7}
            className="bg-surface border border-surfaceBorder rounded-2xl p-4 flex-row items-center justify-between shadow-sm"
          >
            <View className="flex-row items-center gap-4">
              <View className="w-10 h-10 rounded-xl bg-background border border-surfaceBorder items-center justify-center">
                <Ionicons name="scale" size={20} color="#38BDF8" />
              </View>
              <Text className="text-textMain font-bold text-base">Unidades de Peso</Text>
            </View>
            <View className="bg-surfaceBorder/50 px-4 py-1.5 rounded-lg">
              <Text className="text-textMain font-bold text-xs uppercase tracking-widest">KG</Text>
            </View>
          </TouchableOpacity>

          {/* Exportar Datos */}
          <TouchableOpacity 
            activeOpacity={0.7}
            className="bg-surface border border-surfaceBorder rounded-2xl p-4 flex-row items-center justify-between shadow-sm"
          >
            <View className="flex-row items-center gap-4">
              <View className="w-10 h-10 rounded-xl bg-background border border-surfaceBorder items-center justify-center">
                <Ionicons name="download" size={20} color="#22C55E" />
              </View>
              <View>
                <Text className="text-textMain font-bold text-base">Exportar Datos</Text>
                <Text className="text-textMuted text-xs">Respaldo SQLite local</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#475569" />
          </TouchableOpacity>

        </View>
      </View>

      <View className="h-24" />
    </ScrollView>
  );
}
