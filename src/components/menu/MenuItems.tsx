'use client';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import { menuData } from '@/data/menu';

type Props = {
  category: string;
};

export default function MenuItems({ category }: Props) {
  const sections =
    category === 'الكل'
      ? menuData
      : menuData.filter((s) => s.category === category);

  return (
    <Box sx={{ px: 2, pb: 4 }}>
      {sections.map((section) => (
        <Box key={section.category} sx={{ mb: 4 }}>
          {/* عنوان القسم يظهر فقط في "الكل" */}
          {category === 'الكل' && (
            <Typography
              sx={{
                fontSize: {
                  xs: 18,
                  sm: 20,
                  md: 22,
                },
                fontWeight: 800,
                mb: 2,
                borderRight: '4px solid #C62828',
                pr: 1,
              }}
            >
              {section.category}
            </Typography>
          )}

          {/* GRID RESPONSIVE */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                lg: '1fr 1fr 1fr',
              },
              gap: 2,
            }}
          >
            {section.items.map((item) => (
              <Card
                key={item.id}
                sx={{
                  display: 'flex',
                  alignItems: 'stretch',
                  borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                  backgroundColor: '#fff',
                  overflow: 'hidden',
                }}
              >
                {/* 🟨 IMAGE WRAPPER (حجم ثابت لكل المنتجات) */}
                <Box
                  sx={{
                    width: {
                      xs: 110,
                      sm: 120,
                      md: 140,
                    },
                    height: {
                      xs: 110,
                      sm: 120,
                      md: 140,
                    },
                    flexShrink: 0,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover', // 👈 هنا السحر
                    }}
                  />
                </Box>

                {/* محتوى الصنف */}
                <CardContent
                  sx={{
                    flex: 1,
                    textAlign: 'right',
                    p: {
                      xs: 1.5,
                      sm: 2,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: {
                        xs: 15,
                        sm: 16,
                        md: 17,
                      },
                    }}
                  >
                    {item.name}
                  </Typography>

                  {item.description && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      {item.description}
                    </Typography>
                  )}

                  <Typography
                    sx={{
                      color: '#C62828',
                      fontWeight: 800,
                      mt: 1,
                      fontSize: {
                        xs: 14,
                        sm: 15,
                        md: 16,
                      },
                    }}
                  >
                    {item.price} SAR
                  </Typography>

                  {'calories' in item && item.calories && (
                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      {item.calories} سعرة حرارية
                    </Typography>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
