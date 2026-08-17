import type { PropsWithChildren, ReactNode } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { HoverPressable } from '@/components/HoverPressable';
import { Spacing } from '@/constants/spacing';
import { useThemeColor } from '@/hooks/useThemeColor';

type BentoCardProps = PropsWithChildren<{
    action?: () => void;
    footer?: ReactNode;
    style?: StyleProp<ViewStyle>;
}>;

export function BentoCard({ action, children, footer, style }: BentoCardProps) {
    const backgroundColor = useThemeColor({}, 'glassSurface');
    const borderColor = useThemeColor({}, 'subtleBorder');
    const shadowColor = useThemeColor({}, 'shadow');

    const content = (
        <>
            <View style={styles.content}>{children}</View>
            {footer ? <View style={styles.footer}>{footer}</View> : null}
        </>
    );

    if (action) {
        return (
            <HoverPressable
                accessibilityRole='button'
                containerStyle={styles.clickable}
                onPress={action}
                style={[
                    styles.card,
                    { backgroundColor, borderColor, boxShadow: `0 12px 32px ${shadowColor}` },
                    style
                ]}
            >
                {content}
            </HoverPressable>
        );
    }

    return (
        <View
            style={[
                styles.card,
                { backgroundColor, borderColor, boxShadow: `0 12px 32px ${shadowColor}` },
                style
            ]}
        >
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 18,
        borderCurve: 'continuous',
        padding: Spacing.md,
        minHeight: 160,
        overflow: 'hidden',
        transform: [{ translateY: 0 }]
    },
    clickable: {
        borderRadius: 18
    },
    content: {
        flex: 1,
        gap: Spacing.sm
    },
    footer: {
        paddingTop: Spacing.sm
    }
});
