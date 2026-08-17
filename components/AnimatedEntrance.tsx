import { type PropsWithChildren, useEffect, useState } from 'react';
import { AccessibilityInfo, Animated, type StyleProp, type ViewStyle } from 'react-native';

type AnimatedEntranceProps = PropsWithChildren<{
    delay?: number;
    style?: StyleProp<ViewStyle>;
}>;

export function AnimatedEntrance({ children, delay = 0, style }: AnimatedEntranceProps) {
    const [opacity] = useState(() => new Animated.Value(0));
    const [translateY] = useState(() => new Animated.Value(16));

    useEffect(() => {
        let active = true;

        AccessibilityInfo.isReduceMotionEnabled().then((reduceMotion) => {
            if (!active || reduceMotion) {
                opacity.setValue(1);
                translateY.setValue(0);
                return;
            }

            Animated.parallel([
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 420,
                    delay,
                    useNativeDriver: true
                }),
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: 420,
                    delay,
                    useNativeDriver: true
                })
            ]).start();
        });

        return () => {
            active = false;
        };
    }, [delay, opacity, translateY]);

    return (
        <Animated.View style={[style, { opacity, transform: [{ translateY }] }]}>
            {children}
        </Animated.View>
    );
}
