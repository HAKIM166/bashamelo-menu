'use client';

import { useState } from 'react';
import { Box } from '@mui/material';

import Header from '@/components/header/Header';
import Categories from '@/components/categories/Categories';
import MenuItems from '@/components/menu/MenuItems';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('الكل');

  return (
    <Box>
      <Header />
      <Categories
        active={activeCategory}
        onChange={setActiveCategory}
      />
      <MenuItems category={activeCategory} />
    </Box>
  );
}
