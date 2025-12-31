/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

export const Colors = {
    light: {
        primaryText: '#11181C',
        secondaryText: '#4B5563',
        background: '#F5F6FA',
        surface: '#FFFFFF',
        highlight: '#60A5FA',
        border: '#E5E7EB',
        tint: '#3B82F6',
        icon: '#687076',
        tabIconDefault: '#687076',
        tabIconSelected: '#3B82F6',
        headerBackground: '#A1CEDC'
    },
    dark: {
        primaryText: '#F9FAFB',
        secondaryText: '#9CA3AF',
        background: '#111827',
        surface: '#1E293B',
        highlight: '#F87171',
        border: '#374151',
        tint: '#EF4444',
        icon: '#9BA1A6',
        tabIconDefault: '#9BA1A6',
        tabIconSelected: '#EF4444',
        headerBackground: '#1D3D47'
    },
    neutralBackground: '#2a2a2a',
    paletteColor1: '#3b82f6',
    links: '#0a7ea4',
    email: '#EA4335',
    Instagram: '#D62976',
    LinkedIn: '#0A66C2',
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Ruby: '#701516',
    Go: '#00ADD8',
    Rust: '#dea584',
    Swift: '#ffac45',
    Kotlin: '#A97BFF',
    PHP: '#4F5D95',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    Shell: '#89e051',
    Dart: '#00B4AB',
    defaultLanguage: '#888'
};

export const Fonts = Platform.select({
    ios: {
        /** iOS `UIFontDescriptorSystemDesignDefault` */
        sans: 'system-ui',
        /** iOS `UIFontDescriptorSystemDesignSerif` */
        serif: 'ui-serif',
        /** iOS `UIFontDescriptorSystemDesignRounded` */
        rounded: 'ui-rounded',
        /** iOS `UIFontDescriptorSystemDesignMonospaced` */
        mono: 'ui-monospace'
    },
    default: {
        sans: 'normal',
        serif: 'serif',
        rounded: 'normal',
        mono: 'monospace'
    },
    web: {
        sans: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif',
        serif: 'Georgia, \'Times New Roman\', serif',
        rounded: '\'SF Pro Rounded\', \'Hiragino Maru Gothic ProN\', Meiryo, \'MS PGothic\', sans-serif',
        mono: 'SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'
    }
});
