import { Cutoffs } from '@/constants/Cutoffs';
import { useWindowDimensions } from 'react-native';


/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
export function useCutoffs() {
    const { width } = useWindowDimensions();
    const isMobile = width <= Cutoffs.mobile;
    const isTablet = width > Cutoffs.mobile && width <= Cutoffs.tablet;
    const isDesktop = width > Cutoffs.tablet;
    return { width, isMobile, isTablet, isDesktop };
}
