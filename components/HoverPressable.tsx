import { type PropsWithChildren, useState } from 'react';
import {
    Animated,
    Pressable,
    type PressableProps,
    type StyleProp,
    type ViewStyle
} from 'react-native';

type HoverPressableProps = PropsWithChildren<PressableProps & {
    containerStyle?: StyleProp<ViewStyle>;
    lift?: number;
}>;

export function HoverPressable({
    children,
    containerStyle,
    lift = 4,
    onHoverIn,
    onHoverOut,
    onPressIn,
    onPressOut,
    style,
    ...props
}: HoverPressableProps) {
    const [hover] = useState(() => new Animated.Value(0));
    const [press] = useState(() => new Animated.Value(0));

    const animate = (value: Animated.Value, toValue: number, duration: number) => {
        Animated.timing(value, {
            toValue,
            duration,
            useNativeDriver: true
        }).start();
    };

    return (
        <Animated.View
            style={[
                containerStyle,
                {
                    transform: [
                        {
                            translateY: hover.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -lift]
                            })
                        },
                        {
                            scale: Animated.multiply(
                                hover.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 1.018]
                                }),
                                press.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 0.975]
                                })
                            )
                        }
                    ]
                }
            ]}
        >
            <Pressable
                {...props}
                onHoverIn={(event) => {
                    animate(hover, 1, 150);
                    onHoverIn?.(event);
                }}
                onHoverOut={(event) => {
                    animate(hover, 0, 190);
                    onHoverOut?.(event);
                }}
                onPressIn={(event) => {
                    animate(press, 1, 90);
                    onPressIn?.(event);
                }}
                onPressOut={(event) => {
                    animate(press, 0, 160);
                    onPressOut?.(event);
                }}
                style={style}
            >
                {children}
            </Pressable>
        </Animated.View>
    );
}
