"use client";

import { useState } from "react";

import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import { offersData, type OfferItem, type OfferVariant } from "@/data/offers";
import { menuData, type MenuItem, type MenuItemVariant } from "@/data/menu";
import { useCartStore } from "@/store/cart-store";

type Props = {
  category: string;
};

type ProductItem = MenuItem | OfferItem;
type ProductVariant = MenuItemVariant | OfferVariant;

function PriceText({
  price,
  variants,
  compact = false,
}: {
  price?: number;
  variants?: ProductVariant[];
  compact?: boolean;
}) {
  if (variants?.length) {
    return (
      <Box
        sx={{
          mt: compact ? 0.9 : 1.6,
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 0.65,
          direction: "rtl",
          alignSelf: "flex-start",
          position: "relative",
          zIndex: 1,
        }}
      >
        {variants.map((variant, index) => (
          <Box
            key={variant.id}
            component="span"
            sx={{
              display: "inline-flex",
              alignItems: "baseline",
              gap: 0.45,
              direction: "rtl",
              unicodeBidi: "isolate",
              whiteSpace: "nowrap",
            }}
          >
            <Typography
              component="span"
              sx={{
                color: "#111",
                fontWeight: 950,
                fontSize: { xs: 14.5, md: 16.5 },
                whiteSpace: "nowrap",
              }}
            >
              {variant.label}
            </Typography>

            <Typography
              component="span"
              sx={{
                color: "#d2242a",
                fontWeight: 950,
                fontSize: { xs: 16.5, md: 18.5 },
                whiteSpace: "nowrap",
              }}
            >
              {variant.price}
            </Typography>

            <Typography
              component="span"
              sx={{
                color: "#506c5c",
                fontWeight: 900,
                fontSize: { xs: 12.5, md: 14 },
                whiteSpace: "nowrap",
              }}
            >
              ريال
            </Typography>

            {index < variants.length - 1 && (
              <Typography
                component="span"
                sx={{
                  mx: 0.15,
                  color: "#999",
                  fontWeight: 900,
                  fontSize: { xs: 13, md: 15 },
                }}
              >
                |
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        mt: compact ? 0.9 : 1.6,
        display: "flex",
        alignItems: "baseline",
        gap: 0.7,
        direction: "ltr",
        alignSelf: "flex-start",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Typography
        component="span"
        sx={{
          color: "#506c5c",
          fontWeight: 900,
          fontSize: { xs: 13.5, md: 15 },
        }}
      >
        ريال
      </Typography>

      <Typography
        component="span"
        sx={{
          color: "#d2242a",
          fontWeight: 950,
          fontSize: { xs: 19, md: 22 },
        }}
      >
        {price}
      </Typography>
    </Box>
  );
}
function getCartId(productId: number, variantId?: number) {
  if (!variantId) return productId;
  return productId * 100000 + variantId;
}

export default function MenuItems({ category }: Props) {
  const addItem = useCartStore((state) => state.addItem);

  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(
    null,
  );

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

  const handleAddClick = (item: ProductItem) => {
    if (item.variants?.length) {
      setSelectedProduct(item);
      return;
    }

    if (typeof item.price !== "number") return;

    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      description: item.description,
      available: item.available,
    });
  };

  const handleVariantSelect = (variant: ProductVariant) => {
    if (!selectedProduct) return;

    addItem({
      id: getCartId(selectedProduct.id, variant.id),
      name: `${selectedProduct.name} - ${variant.label}`,
      price: variant.price,
      image: selectedProduct.image,
      description:
        "description" in variant
          ? variant.description
          : selectedProduct.description,
      available: selectedProduct.available,
    });

    setSelectedProduct(null);
  };

  return (
    <>
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
                const cleanNameLength = item.name.replace(/\s/g, "").length;
                const hasDescription = Boolean(item.description);
                const isLongName = cleanNameLength > 11;
                const isVeryLongName = cleanNameLength > 15;
                const isCompactCard =
                  hasDescription ||
                  isLongName ||
                  Boolean(item.variants?.length);

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
                          fontSize: isVeryLongName
                            ? { xs: 15, sm: 15.5, md: 18 }
                            : isLongName ||
                                hasDescription ||
                                item.variants?.length
                              ? { xs: 16.5, sm: 17, md: 20 }
                              : { xs: 19, md: 23 },
                          color: "#111",
                          lineHeight: 1.15,
                          letterSpacing: "-0.3px",
                          mb: 0.45,
                          maxWidth: "100%",
                          whiteSpace: "normal",
                          overflow: "visible",
                          wordBreak: "normal",
                          overflowWrap: "break-word",
                          position: "relative",
                          zIndex: 1,
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
                          flexShrink: 0,
                          position: "relative",
                          zIndex: 1,
                        }}
                      />

                      <PriceText
                        price={item.price}
                        variants={item.variants}
                        compact={isCompactCard}
                      />

                      {item.description && (
                        <Typography
                          sx={{
                            mt: item.variants?.length ? 0.8 : 0.45,
                            color: "#666",
                            fontSize: { xs: 12, md: 13 },
                            lineHeight: 1.35,
                            fontWeight: 700,
                            maxHeight: 34,
                            overflow: "hidden",
                          }}
                        >
                          {item.description}
                        </Typography>
                      )}

                      <Button
                        disabled={!isAvailable}
                        onClick={() => handleAddClick(item)}
                        startIcon={<AddShoppingCartIcon />}
                        sx={{
                          mt: isCompactCard ? 0.6 : 1,
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
                        {isAvailable
                          ? item.variants?.length
                            ? "اختيار"
                            : "إضافة"
                          : "غير متوفر"}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>
          </Box>
        ))}
      </Box>

      <Dialog
        open={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            direction: "rtl",
            borderRadius: "22px",
            p: 0.5,
          },
        }}
      >
        <DialogContent sx={{ p: 2.2 }}>
          <Stack
            direction="row"
            alignItems="flex-start"
            justifyContent="space-between"
            gap={1}
            sx={{ mb: 1.6 }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#111",
                  fontWeight: 950,
                  fontSize: 20,
                }}
              >
                {selectedProduct?.name}
              </Typography>

              <Typography
                sx={{
                  mt: 0.4,
                  color: "#777",
                  fontWeight: 800,
                  fontSize: 13,
                }}
              >
                اختار الحجم المناسب قبل الإضافة
              </Typography>
            </Box>

            <IconButton
              onClick={() => setSelectedProduct(null)}
              size="small"
              sx={{ color: "#777" }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Stack>

          <Stack spacing={1}>
            {selectedProduct?.variants?.map((variant) => (
              <Button
                key={variant.id}
                onClick={() => handleVariantSelect(variant)}
                sx={{
                  justifyContent: "space-between",
                  borderRadius: "16px",
                  px: 1.8,
                  py: 1.25,
                  border: "1px solid rgba(31,111,67,0.18)",
                  backgroundColor: "#fffdfb",
                  color: "#111",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "rgba(31,111,67,0.06)",
                    boxShadow: "none",
                  },
                }}
              >
                <Typography sx={{ fontWeight: 950 }}>
                  {variant.label}
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 950,
                    color: "#d2242a",
                    direction: "ltr",
                  }}
                >
                  ريال {variant.price}
                </Typography>
              </Button>
            ))}
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
}
