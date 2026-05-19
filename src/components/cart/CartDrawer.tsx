"use client";

import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import {
  createWhatsAppOrderUrl,
  type CustomerInfo,
} from "@/lib/whatsapp-order";

import { useCartStore } from "@/store/cart-store";

type Props = {
  open: boolean;
  onClose: () => void;
};

const emptyCustomer: CustomerInfo = {
  name: "",
  phone: "",
  orderType: "delivery",
  address: "",
  notes: "",
};

export default function CartDrawer({ open, onClose }: Props) {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalPrice = useCartStore((state) => state.totalPrice());

  const [customer, setCustomer] = useState<CustomerInfo>(emptyCustomer);

  const handleCheckout = () => {
    if (!items.length) return;

    const nameRegex = /^[\u0600-\u06FFa-zA-Z\s]{2,}$/;
    const phoneRegex = /^05\d{8}$/;

    const cleanName = customer.name.trim();
    const cleanPhone = customer.phone.trim();
    const cleanAddress = customer.address?.trim() || "";
    const cleanNotes = customer.notes?.trim() || "";

    if (!nameRegex.test(cleanName)) {
      alert("يرجى إدخال اسم صحيح");
      return;
    }

    if (!phoneRegex.test(cleanPhone)) {
      alert("يرجى إدخال رقم جوال سعودي صحيح مثل: 05xxxxxxxx");
      return;
    }

    if (customer.orderType === "delivery" && cleanAddress.length < 5) {
      alert("يرجى إدخال عنوان واضح للتوصيل");
      return;
    }

    const url = createWhatsAppOrderUrl(items, totalPrice, {
      ...customer,
      name: cleanName,
      phone: cleanPhone,
      address: cleanAddress,
      notes: cleanNotes,
    });

    if (!url) return;

    window.open(url, "_blank", "noopener,noreferrer");

    clearCart();
    setCustomer(emptyCustomer);
    onClose();
  };

  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          direction: "rtl",
          width: {
            xs: "calc(100% - 24px)",
            md: 560,
          },
          maxWidth: "100%",
          mx: "auto",
          mb: {
            xs: "86px",
            md: "92px",
          },
          borderRadius: "22px",
          backgroundColor: "#fff",
          boxShadow: "0 18px 60px rgba(0,0,0,0.22)",
          maxHeight: {
            xs: "calc(100dvh - 120px)",
            md: "calc(100dvh - 130px)",
          },
          overflowY: "auto",
        },
      }}
    >
      <Box
        sx={{
          p: {
            xs: 2,
            md: 2.4,
          },
          pb: {
            xs: 2.5,
            md: 2.8,
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: 21,
                  md: 23,
                },
                fontWeight: 950,
                color: "#111",
              }}
            >
              سلة الطلبات
            </Typography>

            <Typography
              sx={{
                mt: 0.4,
                fontSize: 13,
                color: "#777",
                fontWeight: 700,
              }}
            >
              راجع طلبك قبل الإرسال
            </Typography>
          </Box>

          <IconButton
            onClick={onClose}
            sx={{
              color: "#777",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>

        <Divider sx={{ my: 1.6 }} />

        {items.length === 0 ? (
          <Box
            sx={{
              py: 4,
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: 900,
                color: "#111",
              }}
            >
              السلة فاضية حاليًا
            </Typography>
          </Box>
        ) : (
          <>
            <Stack
              spacing={1.1}
              sx={{
                maxHeight: {
                  xs: "26vh",
                  md: "28vh",
                },
                overflowY: "auto",
                pb: 0.5,
              }}
            >
              {items.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    p: 1.4,
                    border: "1px solid #ededed",
                    borderRadius: "18px",
                    backgroundColor: "#fffdfb",
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="space-between"
                    gap={1.2}
                  >
                    <Box sx={{ minWidth: 0 }}>
                      <Typography
                        sx={{
                          fontWeight: 950,
                          color: "#111",
                          fontSize: 16,
                        }}
                      >
                        {item.name}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 0.4,
                          color: "#d2242a",
                          fontWeight: 950,
                        }}
                      >
                        {item.orderPrice * item.quantity} ريال
                      </Typography>
                    </Box>

                    <IconButton
                      onClick={() => removeItem(item.id)}
                      size="small"
                      sx={{
                        color: "#d2242a",
                      }}
                    >
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </Stack>

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ mt: 1.1 }}
                  >
                    <Typography
                      sx={{
                        color: "#777",
                        fontSize: 13,
                        fontWeight: 800,
                      }}
                    >
                      السعر: {item.orderPrice} ريال
                    </Typography>

                    <Stack direction="row" alignItems="center" gap={1}>
                      <Button
                        onClick={() => decreaseQuantity(item.id)}
                        sx={qtyButtonSx}
                      >
                        -
                      </Button>

                      <Typography
                        sx={{
                          minWidth: 18,
                          textAlign: "center",
                          fontWeight: 950,
                        }}
                      >
                        {item.quantity}
                      </Typography>

                      <Button
                        onClick={() => increaseQuantity(item.id)}
                        sx={qtyButtonSx}
                      >
                        +
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              ))}
            </Stack>

            <Divider sx={{ my: 1.6 }} />

            <Stack spacing={1.2}>
              <TextField
                fullWidth
                size="small"
                label="الاسم"
                value={customer.name}
                onChange={(e) =>
                  setCustomer({
                    ...customer,
                    name: e.target.value,
                  })
                }
              />

              <TextField
                fullWidth
                size="small"
                label="رقم الجوال"
                placeholder="05xxxxxxxx"
                value={customer.phone}
                onChange={(e) =>
                  setCustomer({
                    ...customer,
                    phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                  })
                }
              />

              <TextField
                select
                fullWidth
                size="small"
                label="نوع الطلب"
                value={customer.orderType}
                onChange={(e) =>
                  setCustomer({
                    ...customer,
                    orderType: e.target.value as CustomerInfo["orderType"],
                  })
                }
              >
                <MenuItem value="delivery">توصيل</MenuItem>
                <MenuItem value="pickup">استلام من الفرع</MenuItem>
              </TextField>

              {customer.orderType === "delivery" && (
                <TextField
                  fullWidth
                  size="small"
                  label="العنوان"
                  value={customer.address}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      address: e.target.value,
                    })
                  }
                />
              )}

              <TextField
                fullWidth
                multiline
                minRows={2}
                size="small"
                label="ملاحظات إضافية"
                value={customer.notes}
                onChange={(e) =>
                  setCustomer({
                    ...customer,
                    notes: e.target.value,
                  })
                }
              />
            </Stack>

            <Divider sx={{ my: 1.6 }} />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  fontWeight: 950,
                  color: "#111",
                  fontSize: 19,
                }}
              >
                الإجمالي
              </Typography>

              <Typography
                sx={{
                  fontWeight: 950,
                  color: "#d2242a",
                  fontSize: 21,
                }}
              >
                {totalPrice} ريال
              </Typography>
            </Stack>

            <Stack direction="row" gap={1} sx={{ mt: 1.6 }}>
              <Button
                onClick={clearCart}
                sx={{
                  flex: 0.8,
                  borderRadius: 999,
                  py: 1.15,
                  color: "#d2242a",
                  border: "1px solid rgba(210,36,42,0.28)",
                  fontWeight: 950,
                }}
              >
                تفريغ
              </Button>

              <Button
                onClick={handleCheckout}
                startIcon={<WhatsAppIcon />}
                sx={{
                  flex: 2,
                  borderRadius: 999,
                  py: 1.15,
                  backgroundColor: "#1f6f43",
                  color: "#fff",
                  fontWeight: 950,

                  "& .MuiButton-startIcon": {
                    ml: 1,
                    mr: 0,
                  },

                  "&:hover": {
                    backgroundColor: "#185a36",
                  },
                }}
              >
                إرسال الطلب واتساب
              </Button>
            </Stack>
          </>
        )}
      </Box>
    </Drawer>
  );
}

const qtyButtonSx = {
  minWidth: 30,
  width: 30,
  height: 30,
  borderRadius: "50%",
  p: 0,
  color: "#1f6f43",
  border: "1px solid rgba(31,111,67,0.32)",
  fontWeight: 950,
};