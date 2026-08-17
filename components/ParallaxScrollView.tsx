import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Animated, {
    interpolate,
    useAnimatedRef,
    useAnimatedStyle,
    useScrollOffset
} from 'react-native-reanimated';

import { ThemedView } from '@/components/StandardComponents/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';

type Props = PropsWithChildren<{
    headerImage: ReactElement;
}>;

export default function ParallaxScrollView({
    children,
    headerImage
}: Props) {
    const { width } = useWindowDimensions();
    const HEADER_HEIGHT = Math.max(220, Math.min(width / 3, 520));
    const backgroundColor = useThemeColor({}, 'background');
    const headerBackgroundColor = useThemeColor({}, 'headerBackground');
    const scrollRef = useAnimatedRef<Animated.ScrollView>();
    const scrollOffset = useScrollOffset(scrollRef);
    const headerAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(
                        scrollOffset.value,
                        [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                        [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
                    )
                },
                {
                    scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1])
                }
            ]
        };
    });

    return (
        <Animated.ScrollView
            contentInsetAdjustmentBehavior='automatic'
            ref={scrollRef}
            style={{ backgroundColor, flex: 1 }}
            scrollEventThrottle={16}>
            <Animated.View
                style={[
                    {
                        height: HEADER_HEIGHT,
                        overflow: 'hidden'
                    },
                    { backgroundColor: headerBackgroundColor },
                    headerAnimatedStyle
                ]}>
                {headerImage}
            </Animated.View>
            <ThemedView style={styles.content}>{children}</ThemedView>
        </Animated.ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        overflow: 'hidden'
    }
});
