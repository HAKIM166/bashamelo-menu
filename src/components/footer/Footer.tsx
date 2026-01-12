'use client';

import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 4,
        py: 2,
        textAlign: 'center',
        color: 'text.secondary',
        fontSize: 13,
      }}
    >
      <Typography variant="caption">
        © {new Date().getFullYear()} Bashamelo
      </Typography>

      <Typography
        variant="caption"
        sx={{ display: 'block', mt: 0.5 }}
      >
        نتمنى لكم تجربة طعام ممتعة
      </Typography>
    </Box>
  );
}
