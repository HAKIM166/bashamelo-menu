'use client';

import { Box, Chip } from '@mui/material';
import { menuData } from '@/data/menu';

type Props = {
  selected: string;
  onSelect: (category: string) => void;
};

export default function Categories({ selected, onSelect }: Props) {
  const categories = ['الكل', ...menuData.map((c) => c.category)];

  return (
    <Box
      sx={{
        px: 2,
        py: 1,

        /* 👇 نرفعها لفوق على الشاشات الكبيرة */
        mt: {
          xs: 0,     // ❌ موبايل (ممنوع نلمسه)
          md: -3,    // ✅ نرفعها لفوق
        },

        mb: 2,

        /* توسيطها أفقيًا على الشاشات الكبيرة */
        maxWidth: {
          xs: '100%',
          md: 900,
        },
        mx: {
          md: 'auto',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          overflowX: 'auto',
          pb: 1,

          justifyContent: {
            xs: 'flex-start', // موبايل
            md: 'center',     // ديسكتوب / تابلت
          },

          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            clickable
            onClick={() => onSelect(cat)}
            sx={{
              fontWeight: selected === cat ? 700 : 400,
              px: 1.5,

              backgroundColor:
                selected === cat ? '#C62828' : '#eee',

              color:
                selected === cat ? '#fff' : '#000',

              '&:hover': {
                backgroundColor:
                  selected === cat
                    ? '#C62828'
                    : '#e0e0e0',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
