"use client";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Badge, Box, Button } from "@mui/material";
import { keyframes } from "@mui/system";
import { useCartStore } from "@/store/cart-store";

type Props = {
  onClick: () => void;
  hidden?: boolean;
};

const softFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
`;

export default function CartButton({ onClick, hidden = false }: Props) {
  const totalItems = useCartStore((state) => state.totalItems());

  if (hidden || totalItems === 0) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        right: { xs: 18, sm: 28, md: 42, lg: 72 },
        bottom: { xs: 96, sm: 100, md: 104, lg: 112 },
        zIndex: 1300,
      }}
    >
      <Badge
        badgeContent={totalItems}
        overlap="circular"
        sx={{
          "& .MuiBadge-badge": {
            minWidth: 20,
            height: 20,
            borderRadius: 999,
            backgroundColor: "#d2242a",
            color: "#fff",
            fontWeight: 900,
            fontSize: 11,
            border: "2px solid #fff",
            top: 4,
            right: 4,
          },
        }}
      >
        <Button
          onClick={onClick}
          aria-label="فتح السلة"
          startIcon={<ShoppingBagOutlinedIcon />}
          sx={{
            minWidth: 0,
            width: { xs: 52, md: 50 },
            height: { xs: 52, md: 50 },
            borderRadius: { xs: "18px", md: "16px" },
            backgroundColor: "#1f6f43",
            color: "#fff",
            boxShadow: "0 10px 24px rgba(31,111,67,0.16)",
            animation: `${softFloat} 3.2s ease-in-out infinite`,

            "& .MuiButton-startIcon": { m: 0 },
            "& .MuiButton-startIcon svg": {
              fontSize: { xs: 24, md: 25 },
            },

            "&:hover": {
              backgroundColor: "#185a36",
              boxShadow: "0 12px 26px rgba(31,111,67,0.2)",
            },
          }}
        />
      </Badge>
    </Box>
  );
}