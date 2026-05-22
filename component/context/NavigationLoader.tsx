'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Loader from '../ui/loader/Loader';

interface NavigationContextValue {
  navigate: (href: string) => void;
}

const NavigationContext = createContext<NavigationContextValue>({
  navigate: () => {},
});

export function useNavigate() {
  return useContext(NavigationContext);
}

export function NavigationLoaderProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const pendingHref = useRef<string | null>(null);
  const isFirstRender = useRef(true);

  // Hide loader when the pathname actually changes (route resolved)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Only stop loading if the resolved path matches what we navigated to
    if (pendingHref.current === pathname || pendingHref.current === null) {
      setIsLoading(false);
      pendingHref.current = null;
    }
  }, [pathname]);

  // Safety valve: never leave the loader on-screen for more than 4 seconds
  useEffect(() => {
    if (!isLoading) return;
    const id = setTimeout(() => {
      setIsLoading(false);
      pendingHref.current = null;
    }, 4000);
    return () => clearTimeout(id);
  }, [isLoading]);

  const navigate = useCallback(
    (href: string) => {
      // Don't re-navigate to current page
      if (href === pathname) return;
      // Don't stack multiple navigations
      if (pendingHref.current !== null) return;

      pendingHref.current = href;
      setIsLoading(true);
      router.push(href);
    },
    [router, pathname],
  );

  return (
    <NavigationContext.Provider value={{ navigate }}>
      <Loader isLoading={isLoading} text="Loading..." />
      {children}
    </NavigationContext.Provider>
  );
}