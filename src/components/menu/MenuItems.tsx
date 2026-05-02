"use client";

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { menuData } from "@/data/menu";

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
  const sections =
    category === "الكل"
      ? menuData
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
              <RestaurantMenuIcon
                sx={{
                  color: "#1f6f43",
                  fontSize: { xs: 22, md: 26 },
                  opacity: 0.9,
                  flexShrink: 0,
                }}
              />

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
            {section.items.map((item) => (
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
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
