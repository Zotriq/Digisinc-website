import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ scrollInstance }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Native scroll reset
        window.scrollTo(0, 0);

        // Locomotive Scroll reset — scroll to top and update after route change
        if (scrollInstance?.current) {
            scrollInstance.current.scrollTo(0, { duration: 0, disableLerp: true });
            // Small delay to let the new page render before updating scroll calculations
            const timer = setTimeout(() => {
                scrollInstance.current?.update();
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;
