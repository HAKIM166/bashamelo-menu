'use client';

import { Box, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box
      sx={{
        px: 2,
        pt: 3,
        pb: 2,
        backgroundColor: 'background.default',
      }}
    >
      <Typography
        variant="h4"
        color="primary"
        sx={{ fontWeight: 700 }}
      >
        بشاملو 🍔
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 0.5 }}
      >
        برجر · ساندوتشات · وجبات
      </Typography>
    </Box>
  );
}
