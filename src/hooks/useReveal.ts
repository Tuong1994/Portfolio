import { MutableRefObject, useEffect, useState } from "react";

type RevealOptions = {
  margin: number;
  interval: boolean;
};

const useReveal = (
  ref: MutableRefObject<HTMLElement | null>,
  options: RevealOptions = { margin: 300, interval: false }
) => {
  const [reveal, setReveal] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      if (ref.current === null) return;
      const scrollY = window.scrollY;
      const top = ref.current.offsetTop - options.margin;
      const height = ref.current.offsetHeight;
      if (scrollY > top && scrollY < top + height) {
        setReveal(true);
      } else if (options.interval) setReveal(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return reveal;
};

export default useReveal;
