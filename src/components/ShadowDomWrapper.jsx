import { createRoot } from 'react-dom/client'
import { useRef, useEffect } from 'react';
import { DevtoolsProvider } from '../context/Devtools'

const ShadowDomWrapper = ({ children }) => {
  const shadowRootRef = useRef(null);

  useEffect(() => {
    if (shadowRootRef.current && !shadowRootRef.current.shadowRoot) {
      // Crear el Shadow DOM en el modo 'open'
      const shadowRoot = shadowRootRef.current.attachShadow({ mode: 'open' });
    }
  }, []);

  useEffect(() => {
    if (shadowRootRef.current) {
      // Renderizar los hijos de React en el shadowRoot
      createRoot(shadowRootRef.current.shadowRoot).render(
          <DevtoolsProvider>{children}</DevtoolsProvider>
      );
    }
  }, [children, DevtoolsProvider]);

  return <div className='shadow-root' ref={shadowRootRef}></div>;
};

export default ShadowDomWrapper;
