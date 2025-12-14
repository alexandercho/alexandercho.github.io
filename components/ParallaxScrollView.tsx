import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Animated, {
    interpolate,
    useAnimatedRef,
    useAnimatedStyle,
    useScrollOffset
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useScroll } from '@/contexts/ScrollContext';

type Props = PropsWithChildren<{
    headerImage: ReactElement;
    headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
    children,
    headerImage,
    headerBackgroundColor
}: Props) {
    const { setScrollY } = useScroll();
    const { width } = useWindowDimensions();
    const HEADER_HEIGHT = width / 3;
    const backgroundColor = useThemeColor({}, 'background');
    const colorScheme = useColorScheme() ?? 'light';
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
            onScroll={(e) => setScrollY(e.nativeEvent.contentOffset.y)}
            ref={scrollRef}
            style={{ backgroundColor, flex: 1 }}
            scrollEventThrottle={16}>
            <Animated.View
                style={[
                    {
                        height: HEADER_HEIGHT,
                        overflow: 'hidden'
                    },
                    { backgroundColor: headerBackgroundColor[colorScheme] },
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
        padding: 32,
        gap: 16,
        overflow: 'hidden'
    }
});
