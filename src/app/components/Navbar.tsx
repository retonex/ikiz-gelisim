'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <NavbarContent />
    </Suspense>
  );
};

const NavbarContent = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState('konular');

  useEffect(() => {
    const currentPath = pathname.replace('/', '');
    if (pathname === '/') {
      const tab = searchParams.get('tab');
      setActiveRoute(tab || 'konular');
    } else {
      setActiveRoute(currentPath);
    }
  }, [pathname, searchParams]);

  const handleNavigation = (route: string) => {
    switch (route) {
      case 'konular':
        router.push('/');
        break;
      case 'carkifelek':
        router.push('/carkifelek');
        break;
      case 'testler':
        router.push('/testler');
        break;
      case 'etkinlikler':
        router.push('/etkinlikler');
        break;
      case 'oyunlar':
        router.push('/oyunlar');
        break;
      case 'ebeveyn':
        router.push('/ebeveyn');
        break;
      case 'karakter-oyunu':
        router.push('/karakter-oyunu');
        break;
      default:
        router.push('/');
    }
  };

  const getButtonClass = (route: string) => {
    const isActive = activeRoute === route;
    return `px-6 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
      isActive
        ? 'bg-black text-white'
        : 'bg-black text-white hover:bg-gray-800'
    }`;
  };

  return (
    <nav className="bg-gradient-to-r from-purple-100 to-indigo-100 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center justify-start space-x-4 flex-1">
            <div className="min-w-[120px]">
              <motion.button
                onClick={() => handleNavigation('konular')}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className={getButtonClass('konular')}
              >
                <span className="relative z-10">Konular</span>
              </motion.button>
            </div>
            <div className="min-w-[120px]">
              <motion.button
                onClick={() => handleNavigation('carkifelek')}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className={getButtonClass('carkifelek')}
              >
                <span className="relative z-10">Çarkıfelek</span>
              </motion.button>
            </div>
            <div className="min-w-[120px]">
              <motion.button
                onClick={() => handleNavigation('testler')}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className={getButtonClass('testler')}
              >
                <span className="relative z-10">Testler</span>
              </motion.button>
            </div>
            <div className="min-w-[120px]">
              <motion.button
                onClick={() => handleNavigation('etkinlikler')}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className={getButtonClass('etkinlikler')}
              >
                <span className="relative z-10">Etkinlikler</span>
              </motion.button>
            </div>
            <div className="min-w-[120px]">
              <motion.button
                onClick={() => handleNavigation('oyunlar')}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className={getButtonClass('oyunlar')}
              >
                <span className="relative z-10">Oyunlar</span>
              </motion.button>
            </div>
            <div className="min-w-[120px]">
              <motion.button
                onClick={() => handleNavigation('karakter-oyunu')}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className={getButtonClass('karakter-oyunu')}
              >
                <span className="relative z-10">Karakter Oyunu</span>
              </motion.button>
            </div>
            <div className="min-w-[120px]">
              <motion.button
                onClick={() => handleNavigation('ebeveyn')}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className={getButtonClass('ebeveyn')}
              >
                <span className="relative z-10">Ebeveyn</span>
              </motion.button>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div>
              <motion.button
                onClick={() => handleNavigation('giris')}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg text-base font-bold transition-all duration-300 ${
                  activeRoute === 'giris'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50'
                }`}
              >
                Giriş
              </motion.button>
            </div>
            <div>
              <motion.button
                onClick={() => handleNavigation('kayit')}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg text-base font-bold transition-all duration-300 ${
                  activeRoute === 'kayit'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md hover:shadow-lg'
                }`}
              >
                Kayıt
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 