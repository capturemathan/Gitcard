import React, { useRef, useEffect } from 'react';
import '../../assets/themes/gitcard-light.css';

export function GitCard({ token, username }) {
  const ref = useRef();

  useEffect(() => {
    GitCard(token, username).then((html) => {
      ref.current.innerHTML = html;
    });
  }, []);

  return <div ref={ref} />;
}
