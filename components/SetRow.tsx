import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

interface SetRowProps {
  setNumber: number;
  previousWeight?: string;
  previousReps?: string;
}

export function SetRow({ setNumber, previousWeight, previousReps }: SetRowProps) {
  const [weight, setWeight] = useState(previousWeight || '');
  const [reps, setReps] = useState(previousReps || '');
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleComplete = () => {
    const newState = !isCompleted;
    setIsCompleted(newState);
    
    if (newState) {
      // Big dopamine hit when completing a set
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
  };

  return (
    <View className={`flex-row items-center justify-between py-2 px-4 mb-2 rounded-xl border ${isCompleted ? 'bg-primary/10 border-primary/30' : 'bg-surface border-surfaceBorder'}`}>
      
      {/* Set Number */}
      <View className="w-8 items-center">
        <Text className="text-textMuted font-condensed text-xl">{setNumber}</Text>
      </View>

      {/* Weight Input */}
      <View className="flex-1 px-2 items-center">
        <View className="bg-background rounded-lg flex-row items-center justify-center px-4 py-3 w-full border border-surfaceBorder">
          <TextInput
            className={`text-2xl font-condensed text-center w-full ${isCompleted ? 'text-primary' : 'text-textMain'}`}
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
            placeholder="0"
            placeholderTextColor="#475569"
            editable={!isCompleted}
          />
        </View>
        <Text className="text-textMuted text-[10px] mt-1 uppercase">kg</Text>
      </View>

      {/* Reps Input */}
      <View className="flex-1 px-2 items-center">
        <View className="bg-background rounded-lg flex-row items-center justify-center px-4 py-3 w-full border border-surfaceBorder">
          <TextInput
            className={`text-2xl font-condensed text-center w-full ${isCompleted ? 'text-primary' : 'text-textMain'}`}
            keyboardType="numeric"
            value={reps}
            onChangeText={setReps}
            placeholder="0"
            placeholderTextColor="#475569"
            editable={!isCompleted}
          />
        </View>
        <Text className="text-textMuted text-[10px] mt-1 uppercase">reps</Text>
      </View>

      {/* Massive Checkbox */}
      <TouchableOpacity 
        onPress={toggleComplete}
        activeOpacity={0.7}
        className={`w-14 h-14 ml-2 rounded-2xl items-center justify-center border-2 ${isCompleted ? 'bg-primary border-primary' : 'bg-surface border-surfaceBorder'}`}
      >
        {isCompleted && <Ionicons name="checkmark-sharp" size={32} color="#020617" />}
      </TouchableOpacity>
    </View>
  );
}
