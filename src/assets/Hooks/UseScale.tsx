import React from 'react';

type ratios = {
  width: number | undefined;
  height: number | undefined;
  currentHeight: number | undefined;
};

export default function useWindowSize(): ratios {
  const [windowSize, setWindowSize] = React.useState<ratios>({
    width: undefined,
    height: undefined,
    currentHeight: undefined,
  });

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        currentHeight: window.scrollY,
      });
    }

    function handleScroll() {
      setWindowSize((prevState) => ({
        ...prevState,
        currentHeight: window.scrollY,
      }));
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return windowSize;
}
