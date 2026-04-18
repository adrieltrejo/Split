import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Button } from '@/components/Button';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-background pt-16 px-4">
      {/* Header */}
      <View className="mb-6 flex-row justify-between items-start">
        <View>
          <Text className="text-textMuted text-lg font-sans">Let's crush it,</Text>
          <Text className="text-textMain text-4xl font-condensed">Adriel</Text>
        </View>
        <View className="flex-row items-center mt-2">
          {/* Minimalist Streak */}
          <View className="flex-row items-center bg-surface border border-surfaceBorder rounded-full px-3 h-12 mr-3">
            <Text className="text-textMain font-condensed text-xl mr-1">12</Text>
            <Ionicons name="flame" size={18} color="#F59E0B" />
          </View>
          {/* Profile */}
          <TouchableOpacity 
            className="w-12 h-12 bg-surface border border-surfaceBorder rounded-full items-center justify-center"
            onPress={() => router.push('/profile')}
          >
            <Ionicons name="person" size={24} color="#94A3B8" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Weekly Streaks */}
      <View className="mb-8">
        <Text className="text-textMain text-xl font-condensed mb-4">Esta Semana</Text>
        <View className="flex-row justify-between">
          {[
            { id: 'L', status: 'completed' },
            { id: 'M', status: 'completed' },
            { id: 'X', status: 'past' },
            { id: 'J', status: 'current' },
            { id: 'V', status: 'future' },
            { id: 'S', status: 'future' },
            { id: 'D', status: 'future' },
          ].map((item, i) => {
            let containerStyle = "w-11 h-11 rounded-full items-center justify-center ";
            let textStyle = "font-bold text-sm ";
            
            if (item.status === 'completed') {
              containerStyle += "bg-primary shadow-lg shadow-primary/20";
              textStyle += "text-background";
            } else if (item.status === 'current') {
              containerStyle += "bg-surface border-2 border-dashed border-primary";
              textStyle += "text-primary";
            } else if (item.status === 'past') {
              containerStyle += "bg-background border border-surfaceBorder/40";
              textStyle += "text-textMuted/40";
            } else {
              containerStyle += "bg-surface border border-surfaceBorder";
              textStyle += "text-textMuted";
            }

            return (
              <View key={i} className={containerStyle}>
                <Text className={textStyle}>{item.id}</Text>
              </View>
            );
          })}
        </View>
      </View>

      {/* Main Widget (Active Workout State) */}
      <View className="bg-surface border-2 border-primary/50 rounded-3xl p-6 mb-8 shadow-lg shadow-primary/20 relative overflow-hidden">
        {/* Pulsing background effect mockup */}
        <View className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10" />
        
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-primary text-xs uppercase tracking-widest font-bold flex-row items-center">
             EN CURSO
          </Text>
          <Text className="text-textMain font-bold font-condensed text-xl">00:15:32</Text>
        </View>

        <Text className="text-textMain text-3xl font-condensed mb-2">Push Day</Text>
        <Text className="text-textMuted font-sans mb-6">2 de 6 Ejercicios Completados</Text>
        
        <TouchableOpacity 
          className="bg-primary rounded-2xl py-4 flex-row items-center justify-center gap-2 shadow-lg shadow-primary/30 active:scale-95 transition-transform"
          onPress={() => router.push('/workout')}
          activeOpacity={0.8}
        >
          <Ionicons name="play" size={20} color="#020617" />
          <Text className="text-background font-bold text-sm uppercase tracking-widest">Retomar Sesión</Text>
        </TouchableOpacity>
      </View>

      {/* Vitrina de Logros */}
      <View className="mb-8">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-textMain text-xl font-condensed">Últimos Logros</Text>
          <TouchableOpacity>
            <Text className="text-primary text-sm font-semibold">Ver todos</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-4">
          {/* Logro 1 */}
          <View className="bg-surface border border-surfaceBorder rounded-2xl p-4 w-40">
            <View className="mb-3 bg-amber-500/10 w-10 h-10 rounded-full items-center justify-center">
              <Ionicons name="trophy" size={20} color="#FBBF24" />
            </View>
            <Text className="text-textMuted text-[10px] mb-1 uppercase tracking-wider">Ayer</Text>
            <Text className="text-textMain text-lg font-condensed leading-tight">La Tonelada</Text>
            <Text className="text-textMuted text-xs mt-1">Mover +1,000kg en una sola sesión</Text>
          </View>
          
          {/* Logro 2 */}
          <View className="bg-surface border border-surfaceBorder rounded-2xl p-4 w-40">
            <View className="mb-3 bg-primary/10 w-10 h-10 rounded-full items-center justify-center">
              <Ionicons name="barbell" size={22} color="#22C55E" />
            </View>
            <Text className="text-textMuted text-[10px] mb-1 uppercase tracking-wider">Hace 3 días</Text>
            <Text className="text-textMain text-lg font-condensed leading-tight">Constancia</Text>
            <Text className="text-textMuted text-xs mt-1">Llegar a 10 entrenamientos totales</Text>
          </View>
          
          {/* Logro 3 */}
          <View className="bg-surface border border-surfaceBorder rounded-2xl p-4 w-40">
            <View className="mb-3 bg-green-500/10 w-10 h-10 rounded-full items-center justify-center">
              <Ionicons name="shield-checkmark" size={20} color="#22C55E" />
            </View>
            <Text className="text-textMuted text-[10px] mb-1 uppercase tracking-wider">Semana pasada</Text>
            <Text className="text-textMain text-lg font-condensed leading-tight">Inquebrantable</Text>
            <Text className="text-textMuted text-xs mt-1">5 rutinas completadas en 7 días</Text>
          </View>
        </ScrollView>
      </View>
      
      {/* Gráfico de Volumen Semanal (Horizontal) */}
      <View className="mb-8 bg-surface border border-surfaceBorder rounded-3xl p-6 shadow-lg shadow-primary/5">
        <View className="flex-row items-end justify-between mb-6">
          <View>
            <Text className="text-textMuted text-sm font-semibold uppercase tracking-widest mb-1">Volumen Semanal</Text>
            <Text className="text-textMain text-3xl font-condensed">12.4k kg</Text>
          </View>
          <View className="bg-primary/20 px-3 py-1 rounded-full border border-primary/30 mb-1">
            <Text className="text-primary text-xs font-bold">+5% vs mes</Text>
          </View>
        </View>

        <View className="gap-5">
          {/* Week 1 */}
          <View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-textMuted text-xs font-bold">Hace 3 semanas</Text>
              <Text className="text-textMuted text-xs font-condensed">10,000 kg</Text>
            </View>
            <View className="h-2 w-full bg-background rounded-full overflow-hidden">
              <View className="h-full bg-surfaceBorder w-[50%] rounded-full" />
            </View>
          </View>
          
          {/* Week 2 */}
          <View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-textMuted text-xs font-bold">Hace 2 semanas</Text>
              <Text className="text-textMuted text-xs font-condensed">11,200 kg</Text>
            </View>
            <View className="h-2 w-full bg-background rounded-full overflow-hidden">
              <View className="h-full bg-surfaceBorder w-[65%] rounded-full" />
            </View>
          </View>

          {/* Week 3 */}
          <View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-textMuted text-xs font-bold">Semana Pasada</Text>
              <Text className="text-textMuted text-xs font-condensed">11,800 kg</Text>
            </View>
            <View className="h-2 w-full bg-background rounded-full overflow-hidden">
              <View className="h-full bg-surfaceBorder w-[80%] rounded-full" />
            </View>
          </View>

          {/* Week 4 (Current) */}
          <View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-primary text-xs font-bold">Esta Semana</Text>
              <Text className="text-primary text-xs font-bold font-condensed">12,400 kg</Text>
            </View>
            <View className="h-2 w-full bg-background rounded-full overflow-hidden">
              <View className="h-full bg-primary w-[100%] rounded-full shadow-lg shadow-primary/50" />
            </View>
          </View>
        </View>
      </View>
      
      <View className="h-20" />
    </ScrollView>
  );
}
