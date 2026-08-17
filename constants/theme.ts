/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

export const Colors = {
    light: {
        primaryText: '#10172A',
        secondaryText: '#46536F',
        background: '#EEF3FB',
        surface: '#F8FAFF',
        glassSurface: 'rgba(248, 250, 255, 0.82)',
        elevatedSurface: '#FFFFFF',
        highlight: '#C9DDFF',
        border: '#AAB9D4',
        subtleBorder: 'rgba(66, 88, 130, 0.18)',
        tint: '#2855B6',
        accent: '#7148A6',
        accentSoft: '#E7DBF5',
        icon: '#445274',
        tabIconDefault: '#68738C',
        tabIconSelected: '#2855B6',
        headerBackground: 'rgba(238, 243, 251, 0.94)',
        links: '#174EA6',
        inverseText: '#F7F9FF',
        shadow: 'rgba(27, 38, 66, 0.16)'
    },
    dark: {
        primaryText: '#F4F7FF',
        secondaryText: '#B7C3DB',
        background: '#080D1B',
        surface: '#111A2D',
        glassSurface: 'rgba(17, 26, 45, 0.84)',
        elevatedSurface: '#17233A',
        highlight: '#274A78',
        border: '#526989',
        subtleBorder: 'rgba(168, 190, 226, 0.2)',
        tint: '#8CB7FF',
        accent: '#C29BE8',
        accentSoft: '#392C50',
        icon: '#C4D2EC',
        tabIconDefault: '#91A0BB',
        tabIconSelected: '#8CB7FF',
        headerBackground: 'rgba(8, 13, 27, 0.94)',
        links: '#A9C9FF',
        inverseText: '#0A1020',
        shadow: 'rgba(0, 0, 0, 0.42)'
    },
    paletteColor1: '#3b82f6',
    neutralBackground: '#080D1B',
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
