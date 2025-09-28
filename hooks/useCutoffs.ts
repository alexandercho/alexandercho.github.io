import { Cutoffs } from '@/constants/Cutoffs';
import { useWindowDimensions } from 'react-native';


/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
export function useCutoffs() {
    const { width } = useWindowDimensions();
    const isMobile = width <= Cutoffs.mobile;
    return { isMobile };
}
