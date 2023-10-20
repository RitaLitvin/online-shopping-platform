import { useState, useEffect, useRef } from 'react';

const useOutsideClick = (initialValue) => {
  const [isActive, setIsActive] = useState(initialValue);
  const ref = useRef(null);

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setTimeout(() => setIsActive(!isActive), 50);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  });

  return { ref, isActive, setIsActive };
};

export default useOutsideClick;