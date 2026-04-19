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
  const [rir, setRir] = useState('');
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
    <View className={`flex-row items-center justify-between py-1.5 px-3 mb-2 rounded-xl border ${isCompleted ? 'bg-primary/10 border-primary/30' : 'bg-surface border-surfaceBorder'}`}>
      
      {/* Set Number */}
      <View className="w-8 items-center justify-center">
        <Text className={`font-condensed text-xl ${isCompleted ? 'text-primary' : 'text-textMuted'}`}>{setNumber}</Text>
      </View>

      {/* Inputs Container */}
      <View className="flex-1 flex-row gap-2 px-3">
        {/* Weight Input */}
        <View className="flex-1 bg-background rounded-lg border border-surfaceBorder py-2 justify-center">
          <TextInput
            className={`text-xl font-condensed text-center w-full p-0 m-0 ${isCompleted ? 'text-primary' : 'text-textMain'}`}
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
            placeholder="-"
            placeholderTextColor="#475569"
            editable={!isCompleted}
          />
        </View>

        {/* Reps Input */}
        <View className="flex-1 bg-background rounded-lg border border-surfaceBorder py-2 justify-center">
          <TextInput
            className={`text-xl font-condensed text-center w-full p-0 m-0 ${isCompleted ? 'text-primary' : 'text-textMain'}`}
            keyboardType="numeric"
            value={reps}
            onChangeText={setReps}
            placeholder="-"
            placeholderTextColor="#475569"
            editable={!isCompleted}
          />
        </View>

        {/* RIR Input (Optional) */}
        <View className="flex-1 bg-background rounded-lg border border-surfaceBorder py-2 justify-center">
          <TextInput
            className={`text-xl font-condensed text-center w-full p-0 m-0 ${isCompleted ? 'text-primary' : 'text-textMain'}`}
            keyboardType="numeric"
            value={rir}
            onChangeText={setRir}
            placeholder="-"
            placeholderTextColor="#475569"
            editable={!isCompleted}
          />
        </View>
      </View>

      {/* Checkbox */}
      <TouchableOpacity 
        onPress={toggleComplete}
        activeOpacity={0.7}
        className={`w-11 h-11 rounded-xl items-center justify-center border-2 ${isCompleted ? 'bg-primary border-primary' : 'bg-surface border-surfaceBorder'}`}
      >
        {isCompleted && <Ionicons name="checkmark-sharp" size={24} color="#020617" />}
      </TouchableOpacity>
    </View>
  );
}
