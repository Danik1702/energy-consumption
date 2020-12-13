import React, { useState } from "react";
import { useSpring, useSprings, animated, interpolate } from "react-spring";

import styles from "./menuItem.module.scss";

export const MenuItem = ({ background, boxShadow, borderRadius, itemOpacity, text }) => {
  const [open, setOpen] = useState(false);
  const { f, r } = useSpring({ f: open ? 0 : 1, r: open ? -3 : 3 });
  const cards = useSprings(
    5,
    [0, 1, 2, 3, 4].map((i) => ({
      opacity: 0.2 + i / 5,
      z: open ? (i / 5) * 80 : 0,
    }))
  );
  return (
    <div
      className={styles.container}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {cards.map(({ z, opacity }, index) => (
        <animated.div
          key={index}
          onClick={() => console.log("hi")}
          style={{
            opacity: itemOpacity || opacity,
            background,
            transform: interpolate(
              [z, f.interpolate([0, 0.2, 0.6, 1], [0, index, index, 0]), r],
              (z, f, r) => `translate3d(0,0,${z}px) rotateX(${f * r}deg)`
            ),
            boxShadow,
            borderRadius, 
          }}
        >
          <p className={styles.containerText}>{text}</p>
        </animated.div>
      ))}
    </div>
  );
};
