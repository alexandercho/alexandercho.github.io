import { PropsWithChildren, useState } from 'react';
import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/theme';

import { ThemedText } from '@/components/StandardComponents/ThemedText';
import { ThemedView } from '@/components/StandardComponents/ThemedView';
import { IconSymbol } from '@/components/StandardComponents/IconSymbol';
import { HoverPressable } from '@/components/HoverPressable';

import { useColorScheme } from '@/hooks/useColorScheme';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useColorScheme() ?? 'light';

    return (
        <ThemedView>
            <HoverPressable
                containerStyle={styles.headingContainer}
                lift={2}
                style={styles.heading}
                onPress={() => setIsOpen((value) => !value)}
            >
                <IconSymbol
                    name='chevron.right'
                    size={18}
                    weight='medium'
                    color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                    style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
                />
                <ThemedText type='defaultSemiBold'>{title}</ThemedText>
            </HoverPressable>
            {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 8
    },
    headingContainer: {
        alignSelf: 'flex-start',
        borderRadius: 8
    },
    content: {
        marginTop: 6,
        marginLeft: 24
    }
});
