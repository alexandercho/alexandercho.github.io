import type { PropsWithChildren } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { Spacing } from '@/constants/spacing';
import { useCutoffs } from '@/hooks/useCutoffs';

type PageContainerProps = PropsWithChildren<{
    style?: StyleProp<ViewStyle>;
}>;

export function PageContainer({ children, style }: PageContainerProps) {
    const { isMobile, isTablet } = useCutoffs();

    return (
        <View
            style={[
                styles.container,
                isTablet && styles.tablet,
                isMobile && styles.mobile,
                style
            ]}
        >
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        maxWidth: 1180,
        alignSelf: 'center',
        padding: Spacing.lg,
        gap: Spacing.lg,
        paddingTop: 112
    },
    tablet: {
        padding: Spacing.md,
        gap: Spacing.md,
        paddingTop: 108
    },
    mobile: {
        alignSelf: 'stretch',
        padding: Spacing.sm,
        paddingTop: Spacing.md,
        paddingBottom: 116,
        gap: Spacing.md
    }
});
