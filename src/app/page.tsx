"use client";

import { useState } from "react";
import { Fade, Box } from "@mui/material";

import Header from "@/components/header/Header";
import Categories from "@/components/categories/Categories";
import MenuItems from "@/components/menu/MenuItems";
import SplashScreen from "@/components/SplashScreen";
import Footer from "@/components/footer/Footer";
import QuickActions from "@/components/QuickActions";
import CartButton from "@/components/cart/CartButton";
import CartDrawer from "@/components/cart/CartDrawer";

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);
  const [category, setCategory] = useState("الكل");
  const [isCartOpen, setIsCartOpen] = useState(false);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <Fade in timeout={700}>
      <Box sx={{ pb: 10 }}>
        <Header />

        <Categories selected={category} onSelect={setCategory} />

        <MenuItems category={category} />

        <Footer />

        <CartButton onClick={() => setIsCartOpen(true)} hidden={isCartOpen} />

        <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />

        <QuickActions
          mapsUrl="https://maps.app.goo.gl/on4e9BQkAVsMrrE87"
          phone="+966507922020"
          whatsappPhone="+966507922020"
        />
      </Box>
    </Fade>
  );
}
