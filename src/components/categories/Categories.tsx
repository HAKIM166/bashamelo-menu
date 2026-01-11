'use client';

import { Box, Chip } from '@mui/material';

const categories = [
  'الكل',
  'برجر',
  'ساندوتشات',
  'وجبات',
  'مشروبات',
];

type Props = {
  active: string;
  onChange: (category: string) => void;
};

export default function Categories({ active, onChange }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        px: 2,
        pb: 2,
        overflowX: 'auto',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {categories.map((category) => (
        <Chip
          key={category}
          label={category}
          clickable
          onClick={() => onChange(category)}
          sx={{
            fontWeight: active === category ? 600 : 400,
            backgroundColor:
              active === category ? 'primary.main' : 'grey.100',
            color:
              active === category ? '#fff' : 'text.primary',
          }}
        />
      ))}
    </Box>
  );
}
