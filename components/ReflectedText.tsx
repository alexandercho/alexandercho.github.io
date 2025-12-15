import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Fonts } from '@/constants/theme';
interface ReflectedTextProps {
    text: string;
    color?: string;
    fontSize?: number;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export default function ReflectedText({
    text,
    color = '#fff',
    fontSize = 32,
    style,
    textStyle
}: ReflectedTextProps) {
    return (
        <View style={[styles.container, style]}>
            <Text style={[styles.text, { color, fontSize }, textStyle]}>{text}</Text>
            <View style={[styles.reflectionContainer, styles.container]}>
                <LinearGradient
                    colors={[`${color}80`, 'transparent']}
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
                            transform: [{ scaleY: -1 }],
                            opacity: 0.35
                        },
                        textStyle
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
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontFamily: Fonts.sans
    },
    reflectionContainer: {
        height: 40,
        width: '100%'
    }
});
