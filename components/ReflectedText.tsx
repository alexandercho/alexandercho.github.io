import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface ReflectedTextProps {
    text: string;
    color?: string;
    fontSize?: number;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export default function ReflectedText({
    text,
    color = "#fff",
    fontSize = 32,
    style,
    textStyle,
}: ReflectedTextProps) {
    return (
        <View style={[styles.container, style]}>
            {/* Original text */}
            <Text style={[styles.text, { color, fontSize }, textStyle]}>{text}</Text>

            {/* Reflection */}
            <View style={[styles.reflectionContainer, styles.container]}>
                <LinearGradient
                    colors={[`${color}80`, "transparent"]} // 50% opacity fade
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={StyleSheet.absoluteFillObject}
                />
                <Text
                    style={[
                        styles.text,
                        {
                            color,
                            fontSize,
                            transform: [{ scaleY: -1 }], // flip vertically
                            opacity: 0.35, // dim reflection
                        },
                        textStyle,
                    ]}
                >
                    {text}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    text: {
        fontWeight: "bold",
    },
    reflectionContainer: {
        height: 40, // shorter than text height
        overflow: "hidden",
        width: "100%",
    },
});
