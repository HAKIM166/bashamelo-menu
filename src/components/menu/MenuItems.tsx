"use client";

import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import { offersData } from "@/data/offers";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { menuData } from "@/data/menu";
import { useCartStore } from "@/store/cart-store";

type Props = {
  category: string;
};

function PriceText({ price }: { price: number | string }) {
  const value = String(price);
  const sizes = value.match(/S\s*(\d+)\s*\|\s*L\s*(\d+)/i);

  if (sizes) {
    return (
      <Box
        sx={{
          mt: 2,
          display: "flex",
          alignItems: "baseline",
          gap: 0.7,
          direction: "ltr",
        }}
      >
        <Typography
          component="span"
          sx={{
            color: "#506c5c",
            fontWeight: 900,
            fontSize: { xs: 14, md: 16 },
          }}
        >
          SAR
        </Typography>

        <Typography
          component="span"
          sx={{
            color: "#d2242a",
            fontWeight: 950,
            fontSize: { xs: 18, md: 21 },
          }}
        >
          S {sizes[1]}
        </Typography>

        <Typography
          component="span"
          sx={{ color: "#999", fontWeight: 800, fontSize: { xs: 14, md: 16 } }}
        >
          |
        </Typography>

        <Typography
          component="span"
          sx={{ color: "#111", fontWeight: 950, fontSize: { xs: 18, md: 21 } }}
        >
          L {sizes[2]}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        mt: 2,
        display: "flex",
        alignItems: "baseline",
        gap: 0.7,
        direction: "ltr",
      }}
    >
      <Typography
        component="span"
        sx={{ color: "#506c5c", fontWeight: 900, fontSize: { xs: 14, md: 16 } }}
      >
        SAR
      </Typography>

      <Typography
        component="span"
        sx={{ color: "#d2242a", fontWeight: 950, fontSize: { xs: 19, md: 22 } }}
      >
        {value}
      </Typography>
    </Box>
  );
}

export default function MenuItems({ category }: Props) {
  const addItem = useCartStore((state) => state.addItem);

  const offerSection =
    offersData.length > 0
      ? [
          {
            category: "العروض",
            items: offersData,
          },
        ]
      : [];

  const sections =
    category === "العروض"
      ? offerSection
      : category === "الكل"
        ? [...offerSection, ...menuData]
        : menuData.filter((s) => s.category === category);

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, pb: 12, maxWidth: 1280, mx: "auto" }}>
      {sections.map((section) => (
        <Box key={section.category} sx={{ mb: { xs: 5, md: 7 } }}>
          {category === "الكل" && (
            <Box
              sx={{
                mb: 3,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 1,
                direction: "rtl",
              }}
            >
              {section.category === "العروض" ? (
                <LocalOfferIcon
                  sx={{
                    color: "#1f6f43",
                    fontSize: { xs: 22, md: 26 },
                    opacity: 0.9,
                    flexShrink: 0,
                  }}
                />
              ) : (
                <RestaurantMenuIcon
                  sx={{
                    color: "#1f6f43",
                    fontSize: { xs: 22, md: 26 },
                    opacity: 0.9,
                    flexShrink: 0,
                  }}
                />
              )}

              <Typography
                sx={{
                  fontSize: { xs: 26, md: 34 },
                  fontWeight: 900,
                  color: "#1f6f43",
                  letterSpacing: "-0.5px",
                }}
              >
                {section.category}
              </Typography>
            </Box>
          )}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              gap: { xs: 2, md: 2.5 },
            }}
          >
            {section.items.map((item) => {
              const isAvailable = item.available !== false;

              return (
                <Card
                  key={item.id}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "135px 1fr",
                      sm: "145px 1fr",
                      md: "170px 1fr",
                    },
                    height: {
                      xs: 150,
                      sm: 165,
                      md: 180,
                    },
                    direction: "ltr",
                    borderRadius: "10px 0 0 10px",
                    overflow: "hidden",
                    backgroundColor: "#fff",
                    border: "1px solid #e7e7e7",
                    boxShadow: "0 10px 24px rgba(0,0,0,0.05)",
                    opacity: isAvailable ? 1 : 0.6,
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      backgroundColor: "#f2f2f2",

                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        right: -1,
                        width: 22,
                        height: "100%",
                        background:
                          "linear-gradient(to right, rgba(255,255,255,0) 0%, #fff7f2 100%)",
                        pointerEvents: "none",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.name}
                      sx={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        objectFit: "cover",
                      }}
                    />
                  </Box>

                  <CardContent
                    sx={{
                      direction: "rtl",
                      textAlign: "right",
                      p: { xs: 1.8, md: 2.4 },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      overflow: "hidden",
                      position: "relative",
                      background:
                        "linear-gradient(135deg, #ffffff 0%, #ffffff 55%, #fff7f2 100%)",
                      borderRight: "4px solid #d2242a",

                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 14,
                        left: 14,
                        width: 34,
                        height: 34,
                        borderTop: "2px solid rgba(210,36,42,0.22)",
                        borderLeft: "2px solid rgba(210,36,42,0.22)",
                      },

                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 14,
                        left: 14,
                        width: 44,
                        height: 2,
                        backgroundColor: "rgba(31,111,67,0.25)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 950,
                        fontSize: { xs: 19, md: 23 },
                        color: "#111",
                        lineHeight: 1.25,
                        letterSpacing: "-0.3px",
                        mb: 0.6,
                      }}
                    >
                      {item.name}
                    </Typography>

                    <Box
                      sx={{
                        width: 42,
                        height: 3,
                        backgroundColor: "#d2242a",
                        mb: 0.2,
                      }}
                    />

                    <PriceText price={item.price} />

                    {item.description && (
                      <Typography
                        sx={{
                          mt: 0.8,
                          color: "#666",
                          fontSize: { xs: 12, md: 13 },
                          lineHeight: 1.5,
                          fontWeight: 700,
                        }}
                      >
                        {item.description}
                      </Typography>
                    )}

                    <Button
                      disabled={!isAvailable}
                      onClick={() => addItem(item)}
                      startIcon={<AddShoppingCartIcon />}
                      sx={{
                        mt: 1,
                        width: "fit-content",
                        minWidth: 0,
                        px: 1.4,
                        py: 0.45,
                        borderRadius: 999,
                        backgroundColor: isAvailable
                          ? "rgba(31,111,67,0.08)"
                          : "#f1f1f1",
                        color: isAvailable ? "#1f6f43" : "#999",
                        border: isAvailable
                          ? "1px solid rgba(31,111,67,0.22)"
                          : "1px solid #e2e2e2",
                        fontWeight: 900,
                        fontSize: { xs: 11.5, md: 12.5 },
                        lineHeight: 1,
                        boxShadow: "none",
                        alignSelf: "flex-start",

                        "& .MuiButton-startIcon": {
                          ml: 0.5,
                          mr: 0,
                        },

                        "& .MuiButton-startIcon svg": {
                          fontSize: 15,
                        },

                        "&:hover": {
                          backgroundColor: isAvailable
                            ? "rgba(31,111,67,0.13)"
                            : "#f1f1f1",
                          boxShadow: "none",
                        },
                      }}
                    >
                      {isAvailable ? "إضافة" : "غير متوفر"}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
