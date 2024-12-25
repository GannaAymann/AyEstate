
import { useEffect, useState } from "react";
function useWindowSize() {
    const [windowSize, setWindowSize] = useState<{
        width: number | undefined;
        height: number | undefined;
    }>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            // Set window width/height to state
            if (typeof window !== "undefined") {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}
export default useWindowSize;
