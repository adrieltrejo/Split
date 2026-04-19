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
        <View className="gap-3 mb-2">
          {[
            [ {d:1, s:'completed'}, {d:2, s:'completed'}, {d:3, s:'rest'}, {d:4, s:'completed'}, {d:5, s:'missed'}, {d:6, s:'completed'}, {d:7, s:'rest'} ],
            [ {d:8, s:'completed'}, {d:9, s:'completed'}, {d:10, s:'rest'}, {d:11, s:'completed'}, {d:12, s:'completed'}, {d:13, s:'rest'}, {d:14, s:'missed'} ],
            [ {d:15, s:'completed'}, {d:16, s:'completed'}, {d:17, s:'rest'}, {d:18, s:'completed', selected: true}, {d:19, s:'future'}, {d:20, s:'future'}, {d:21, s:'future'} ],
            [ {d:22, s:'future'}, {d:23, s:'future'}, {d:24, s:'future'}, {d:25, s:'future'}, {d:26, s:'future'}, {d:27, s:'future'}, {d:28, s:'future'} ],
            [ {d:29, s:'future'}, {d:30, s:'future'}, {d:null, s:'future'}, {d:null, s:'future'}, {d:null, s:'future'}, {d:null, s:'future'}, {d:null, s:'future'} ]
          ].map((week, weekIndex) => (
            <View key={`week-${weekIndex}`} className="flex-row justify-between px-1">
              {week.map((day, dayIndex) => {
                let style = "w-8 h-8 rounded-full items-center justify-center ";
                let textStyle = "text-sm font-bold font-condensed ";
                if (day.s === 'completed') { style += 'bg-primary shadow-sm shadow-primary/30'; textStyle += 'text-background'; }
                else if (day.s === 'rest') { style += 'bg-sky-500/10 border border-sky-500/20'; textStyle += 'text-sky-500'; }
                else if (day.s === 'missed') { style += 'bg-red-500/20'; textStyle += 'text-red-400'; }
                else { textStyle += 'text-textMuted/40'; }
                
                return (
                  <View key={`day-${dayIndex}`} className="w-8 items-center relative">
                    <View className={style}>
                      {day.d ? <Text className={textStyle}>{day.d}</Text> : null}
                    </View>
                    {(day as any).selected && (
                      <View className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-textMain" />
                    )}
                  </View>
                );
              })}
            </View>
          ))}
        </View>
      </View>

      {/* Filters (Active State) */}
      <View className="mb-6">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-3">
          <TouchableOpacity className="bg-primary/20 border border-primary/50 px-5 py-2 rounded-full">
            <Text className="text-primary font-bold text-xs uppercase tracking-widest">Jueves 14</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-surface border border-surfaceBorder px-5 py-2 rounded-full flex-row items-center gap-1">
            <Ionicons name="close" size={14} color="#94A3B8" />
            <Text className="text-textMuted font-bold text-xs uppercase tracking-widest">Limpiar Filtro</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Timeline Feed */}
      <View className="gap-5">
        
        {/* Session Card (Filtered View) */}
        <TouchableOpacity className="bg-surface border border-primary/40 rounded-3xl p-5 shadow-lg shadow-primary/5 relative overflow-hidden">
          {/* Subtle glow for the filtered card */}
          <View className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10" />

          <View className="flex-row justify-between items-start mb-4">
            <View>
              <Text className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">Jueves 14, 6:30 AM</Text>
              <Text className="text-textMain text-2xl font-condensed">Pull Day <Text className="text-textMuted font-sans text-sm tracking-normal">• PPL de Verano</Text></Text>
            </View>
            <View className="bg-primary/10 border border-primary/30 px-3 py-1.5 rounded-lg flex-row items-center gap-1 shadow-sm shadow-primary/10">
              <Ionicons name="checkmark-circle" size={12} color="#22C55E" />
              <Text className="text-primary font-bold text-[10px] uppercase tracking-widest">Completado</Text>
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
