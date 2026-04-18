import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HistoryScreen() {
  return (
    <ScrollView className="flex-1 bg-background pt-16 px-4">
      {/* Header & Lifetime Stats */}
      <View className="mb-6 flex-row justify-between items-end">
        <View>
          <Text className="text-textMuted text-sm font-sans uppercase tracking-widest mb-1">Tu Progreso</Text>
          <Text className="text-textMain text-4xl font-condensed leading-none mb-2">Historial</Text>
          <Text className="text-primary font-bold text-xs uppercase tracking-widest">142 Sesiones • 1.2M kg</Text>
        </View>
      </View>

      {/* Calendar (Binary Mode) */}
      <View className="bg-surface border border-surfaceBorder rounded-3xl p-5 mb-8 shadow-lg shadow-black/10">
        <View className="flex-row justify-between items-center mb-5">
          <Text className="text-textMain font-bold text-lg">Abril 2026</Text>
          <View className="flex-row gap-4">
            <Ionicons name="chevron-back" size={20} color="#94A3B8" />
            <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
          </View>
        </View>
        
        {/* Days of week header */}
        <View className="flex-row justify-between mb-3 px-1">
          {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((d, i) => (
            <Text key={i} className="text-textMuted text-[10px] font-bold w-7 text-center uppercase">{d}</Text>
          ))}
        </View>

        {/* Calendar Grid */}
        <View className="gap-3">
          {/* Week 1 */}
          <View className="flex-row justify-between px-1">
            {[true, true, false, true, false, false, false].map((workedOut, i) => (
              <View key={i} className={`w-7 h-7 rounded-full items-center justify-center ${workedOut ? 'bg-primary shadow-sm shadow-primary/30' : 'bg-background border border-surfaceBorder/50'}`} />
            ))}
          </View>
          {/* Week 2 */}
          <View className="flex-row justify-between px-1">
            {[true, false, true, true, false, true, false].map((workedOut, i) => (
              <View key={i} className={`w-7 h-7 rounded-full items-center justify-center ${workedOut ? 'bg-primary shadow-sm shadow-primary/30' : 'bg-background border border-surfaceBorder/50'}`} />
            ))}
          </View>
          {/* Week 3 */}
          <View className="flex-row justify-between px-1">
            {[true, true, false, true, false, false, false].map((workedOut, i) => (
              <View key={i} className={`w-7 h-7 rounded-full items-center justify-center ${workedOut ? 'bg-primary shadow-sm shadow-primary/30' : 'bg-background border border-surfaceBorder/50'}`} />
            ))}
          </View>
        </View>
      </View>

      {/* Filters */}
      <View className="mb-6">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-3">
          <TouchableOpacity className="bg-primary/20 border border-primary/50 px-5 py-2 rounded-full">
            <Text className="text-primary font-bold text-xs uppercase tracking-widest">Todos</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-surface border border-surfaceBorder px-5 py-2 rounded-full flex-row items-center gap-1">
            <Ionicons name="trophy" size={12} color="#FBBF24" />
            <Text className="text-textMuted font-bold text-xs uppercase tracking-widest">Récords</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Timeline Feed */}
      <View className="gap-5">
        
        {/* Session Card 1 (With PRs) */}
        <TouchableOpacity className="bg-surface border border-surfaceBorder rounded-3xl p-5 shadow-lg shadow-black/20">
          <View className="flex-row justify-between items-start mb-4">
            <View>
              <Text className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">Ayer, 7:00 AM</Text>
              <Text className="text-textMain text-2xl font-condensed">Push Day <Text className="text-textMuted font-sans text-sm tracking-normal">• PPL de Verano</Text></Text>
            </View>
            <View className="bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-lg flex-row items-center gap-1 shadow-sm shadow-amber-500/10">
              <Ionicons name="trophy" size={12} color="#FBBF24" />
              <Text className="text-amber-500 font-bold text-[10px] uppercase tracking-widest">2 PRs</Text>
            </View>
          </View>

          <View className="flex-row gap-6 mb-5">
            <View>
              <Text className="text-textMuted text-[10px] uppercase tracking-widest mb-0.5">Duración</Text>
              <Text className="text-textMain font-bold">1h 15m</Text>
            </View>
            <View>
              <Text className="text-textMuted text-[10px] uppercase tracking-widest mb-0.5">Volumen</Text>
              <Text className="text-textMain font-bold">14.2k kg</Text>
            </View>
          </View>

          {/* Exercise Summary */}
          <View className="bg-background rounded-2xl p-4 gap-3 border border-surfaceBorder/50">
            <View className="flex-row justify-between items-center">
              <Text className="text-textMain text-sm"><Text className="text-primary font-bold">3x</Text> Barbell Bench Press</Text>
              <Text className="text-textMuted text-xs font-semibold">100kg x 5</Text>
            </View>
            <View className="h-[1px] bg-surfaceBorder/50 w-full" />
            <View className="flex-row justify-between items-center">
              <Text className="text-textMain text-sm"><Text className="text-primary font-bold">3x</Text> Incline DB Press</Text>
              <Text className="text-textMuted text-xs font-semibold">36kg x 8</Text>
            </View>
            <Text className="text-textMuted text-xs italic mt-1">+ 4 ejercicios más...</Text>
          </View>
        </TouchableOpacity>

        {/* Session Card 2 */}
        <TouchableOpacity className="bg-surface border border-surfaceBorder rounded-3xl p-5 shadow-lg shadow-black/20">
          <View className="flex-row justify-between items-start mb-4">
            <View>
              <Text className="text-textMuted text-[10px] font-bold uppercase tracking-widest mb-1">Jueves, 6:30 AM</Text>
              <Text className="text-textMain text-2xl font-condensed">Pull Day <Text className="text-textMuted font-sans text-sm tracking-normal">• PPL de Verano</Text></Text>
            </View>
          </View>

          <View className="flex-row gap-6 mb-5">
            <View>
              <Text className="text-textMuted text-[10px] uppercase tracking-widest mb-0.5">Duración</Text>
              <Text className="text-textMain font-bold">1h 05m</Text>
            </View>
            <View>
              <Text className="text-textMuted text-[10px] uppercase tracking-widest mb-0.5">Volumen</Text>
              <Text className="text-textMain font-bold">11.8k kg</Text>
            </View>
          </View>

          {/* Exercise Summary */}
          <View className="bg-background rounded-2xl p-4 gap-3 border border-surfaceBorder/50">
            <View className="flex-row justify-between items-center">
              <Text className="text-textMain text-sm"><Text className="text-primary font-bold">4x</Text> Pull Ups</Text>
              <Text className="text-textMuted text-xs font-semibold">BW x 12</Text>
            </View>
            <View className="h-[1px] bg-surfaceBorder/50 w-full" />
            <View className="flex-row justify-between items-center">
              <Text className="text-textMain text-sm"><Text className="text-primary font-bold">3x</Text> Barbell Row</Text>
              <Text className="text-textMuted text-xs font-semibold">80kg x 10</Text>
            </View>
            <Text className="text-textMuted text-xs italic mt-1">+ 3 ejercicios más...</Text>
          </View>
        </TouchableOpacity>

      </View>

      <View className="h-24" />
    </ScrollView>
  );
}
