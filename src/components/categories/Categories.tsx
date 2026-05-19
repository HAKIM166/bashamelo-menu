"use client";

import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { Box, Chip } from "@mui/material";

import { menuData } from "@/data/menu";
import { offersData } from "@/data/offers";

type Props = {
  selected: string;
  onSelect: (category: string) => void;
};

export default function Categories({ selected, onSelect }: Props) {
  const hasOffers = offersData.length > 0;

  const categories = [
    ...(hasOffers ? ["العروض"] : []),
    "الكل",
    ...menuData.map((c) => c.category),
  ];

  return (
    <Box
      sx={{
        px: 2,
        py: 1,
        mt: { xs: 0, md: -3 },
        mb: 2,
        maxWidth: { xs: "100%", md: 900 },
        mx: { md: "auto" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          overflowX: "auto",
          pb: 1,
          direction: "rtl",
          justifyContent: { xs: "flex-start", md: "center" },
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {categories.map((cat) => {
          const isSelected = selected === cat;
          const isOffers = cat === "العروض";

          return (
            <Chip
              key={cat}
              label={cat}
              clickable
              icon={
                isOffers ? (
                  <LocalOfferOutlinedIcon
                    sx={{
                      fontSize: "16px !important",
                      color: isSelected ? "#fff !important" : "#1f6f43 !important",
                    }}
                  />
                ) : undefined
              }
              onClick={() => onSelect(cat)}
              sx={{
                height: 34,
                px: 1.4,
                borderRadius: 999,
                fontWeight: isSelected ? 800 : 500,
                fontSize: 14,
                backgroundColor: isSelected
                  ? isOffers
                    ? "#1f6f43"
                    : "#C62828"
                  : "#eee",
                color: isSelected ? "#fff" : "#111",
                border: "none",
                boxShadow: "none",

                "& .MuiChip-label": {
                  px: isOffers ? 0.6 : 0.8,
                },

                "& .MuiChip-icon": {
                  ml: 0,
                  mr: 0.7,
                },

                "&:hover": {
                  backgroundColor: isSelected
                    ? isOffers
                      ? "#1f6f43"
                      : "#C62828"
                    : "#e5e5e5",
                },
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
}