import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'large' | 'massive';
}

export function Button({ 
  title, 
  variant = 'primary', 
  size = 'default', 
  className,
  onPress,
  ...props 
}: ButtonProps) {
  
  const handlePress = (e: any) => {
    // Dopamine hit: Haptic feedback on every button press
    if (variant === 'primary') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } else {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onPress?.(e);
  };

  const baseClasses = "items-center justify-center rounded-2xl active:scale-95 transition-transform";
  
  const variantClasses = {
    primary: "bg-primary shadow-lg shadow-primary/20",
    secondary: "bg-surfaceBorder",
    ghost: "bg-transparent",
  };

  const sizeClasses = {
    default: "py-3 px-6",
    large: "py-4 px-8",
    massive: "py-6 px-10",
  };

  const textBaseClasses = "font-sans font-semibold";
  
  const textVariantClasses = {
    primary: "text-background",
    secondary: "text-textMain",
    ghost: "text-primary",
  };

  const textSizeClasses = {
    default: "text-base",
    large: "text-lg",
    massive: "text-2xl font-condensed tracking-wide",
  };

  return (
    <TouchableOpacity 
      activeOpacity={0.8}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`}
      onPress={handlePress}
      {...props}
    >
      <Text className={`${textBaseClasses} ${textVariantClasses[variant]} ${textSizeClasses[size]}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
