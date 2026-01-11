'use client';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

type Item = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
};

const items: Item[] = [
  {
    id: 1,
    name: 'تشيز برجر',
    description: 'برجر لحم، جبنة شيدر، صوص خاص',
    price: '85 EGP',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
    category: 'برجر',
  },
  {
    id: 2,
    name: 'دبل برجر',
    description: 'قطعتين لحم، جبنة، خبز طازة',
    price: '115 EGP',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    category: 'برجر',
  },
  {
    id: 3,
    name: 'ساندوتش كريسبي',
    description: 'فراخ كريسبي، خس، مايونيز',
    price: '70 EGP',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e6a2e9b5',
    category: 'ساندوتشات',
  },
];

type Props = {
  category: string;
};

export default function MenuItems({ category }: Props) {
  const filteredItems =
    category === 'الكل'
      ? items
      : items.filter((item) => item.category === category);

  return (
    <Box sx={{ px: 2, pb: 4 }}>
      {filteredItems.map((item) => (
        <Card
          key={item.id}
          sx={{
            display: 'flex',
            mb: 2,
            borderRadius: 3,
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          }}
        >
          <CardMedia
            component="img"
            image={item.image}
            alt={item.name}
            sx={{ width: 110 }}
          />

          <CardContent sx={{ flex: 1 }}>
            <Typography fontWeight={600}>
              {item.name}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ my: 0.5 }}
            >
              {item.description}
            </Typography>

            <Typography
              color="primary"
              fontWeight={600}
            >
              {item.price}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
