/* eslint-disable @next/next/no-img-element */
'use client';

import { Box, Fade } from '@mui/material';
import { useEffect, useState } from 'react';

type Props = {
  onFinish: () => void;
};

export default function SplashScreen({ onFinish }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // مدة الظهور الكلية
    const totalDuration = 1600;

    // نخفي قبل النهاية بشوية عشان الـ Fade
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 1100);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, totalDuration);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <Fade in={visible} timeout={500}>
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          bgcolor: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1300,
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            width: {
              xs: 160,
              sm: 180,
              md: 200,
            },
            animation: 'logoFloat 1.6s ease-in-out',
          }}
        >
          <img
            src="/images/bashamelo-logo.png"
            alt="Bashamelo"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </Box>

        {/* Animation */}
        <style jsx>{`
          @keyframes logoFloat {
            0% {
              opacity: 0;
              transform: scale(0.92);
            }
            40% {
              opacity: 1;
              transform: scale(1);
            }
            80% {
              opacity: 1;
              transform: scale(1);
            }
            100% {
              opacity: 0;
              transform: scale(1.03);
            }
          }
        `}</style>
      </Box>
    </Fade>
  );
}
