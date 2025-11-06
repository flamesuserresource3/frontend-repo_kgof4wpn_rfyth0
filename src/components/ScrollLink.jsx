import { useEffect } from 'react';

export default function ScrollLink({ to, children, className = '', onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.querySelector(to);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onClick && onClick(e);
  };

  // enable scroll margin for fixed navbar
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = '[id]{scroll-margin-top:80px;}';
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
