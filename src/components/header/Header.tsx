/* eslint-disable @next/next/no-img-element */
"use client";

import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        px: 2,
        pt: 3,
        pb: 2,
        backgroundColor: "background.default",
        direction: "rtl",
      }}
    >
      {/* Header Row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center", // 👈 أهم تعديل
        }}
      >
        {/* Text Side */}
        <Box>
          <Typography
            variant="h4"
            color="primary"
            sx={{
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            بشاملو
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            بشاميل · برجر · خلية
          </Typography>
        </Box>

        {/* Logo Side */}
        <Box
          sx={{
            width: {
              xs: 140, // موبايل
              sm: 170, // تابلت
              md: 210, // ديسكتوب
            },
            flexShrink: 0, // يمنع تصغيره
            marginInlineStart: {
              xs: 1.5,
              sm: 2,
              md: 3,
            },
          }}
        >
          <img
            src="/images/bashamelo-logo.png"
            alt="Bashamelo Logo"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
