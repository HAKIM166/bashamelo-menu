'use client';

import { useState } from 'react';
import { Fade, Box } from '@mui/material';

import Header from '@/components/header/Header';
import Categories from '@/components/categories/Categories';
import MenuItems from '@/components/menu/MenuItems';
import SplashScreen from '@/components/SplashScreen';
import Footer from '@/components/footer/Footer';

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);
  const [category, setCategory] = useState('الكل');

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <Fade in timeout={700}>
      <Box>
        <Header />

        <Categories
          selected={category}
          onSelect={setCategory}
        />

        <MenuItems category={category} />

        <Footer />
      </Box>
    </Fade>
  );
}
