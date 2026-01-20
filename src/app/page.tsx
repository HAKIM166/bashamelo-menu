'use client';

import { useState } from 'react';
import { Fade, Box } from '@mui/material';

import Header from '@/components/header/Header';
import Categories from '@/components/categories/Categories';
import MenuItems from '@/components/menu/MenuItems';
import SplashScreen from '@/components/SplashScreen';
import Footer from '@/components/footer/Footer';

import QuickActions from '@/components/QuickActions';

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);
  const [category, setCategory] = useState('الكل');

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <Fade in timeout={700}>
      {/* pb مهم عشان الـ QuickActions اللي تحت مايغطيش آخر المنيو */}
      <Box sx={{ pb: 10 }}>
        <Header />

        <Categories selected={category} onSelect={setCategory} />

        <MenuItems category={category} />

        <Footer />

        <QuickActions
          mapsUrl="https://maps.app.goo.gl/on4e9BQkAVsMrrE87"
          phone="+966507922020"
          whatsappPhone="+966507922020"
        />
      </Box>
    </Fade>
  );
}
