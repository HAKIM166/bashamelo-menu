'use client';

import { Box, Button } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

type Props = {
  mapsUrl: string;
  phone: string;          // مثال: +9665xxxxxxx
  whatsappPhone: string;  // مثال: 9665xxxxxxx
};

function ActionButton({
  icon,
  label,
  variant,
  onClick,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  variant: 'contained' | 'outlined';
  onClick?: () => void;
  href?: string;
}) {
  return (
    <Button
      fullWidth
      variant={variant}
      onClick={onClick}
      component={href ? 'a' : 'button'}
      href={href}
      sx={{
        borderRadius: 999,
        py: 1.2,
        minHeight: 44,
        // مهم جدًا لمنع اللزق:
        '& .btnInner': {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1,              // المسافة بين الأيقونة والنص
          lineHeight: 1,
          whiteSpace: 'nowrap',
        },
        '& svg': {
          fontSize: 22,
        },
      }}
    >
      <span className="btnInner">
        {icon}
        {label}
      </span>
    </Button>
  );
}

export default function QuickActions({ mapsUrl, phone, whatsappPhone }: Props) {
  const waLink = `https://wa.me/${whatsappPhone}`;

  return (
    <Box
      dir="rtl"
      sx={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        px: 1.5,
        py: 1.2,
        backgroundColor: '#fff',
        borderTop: '1px solid rgba(0,0,0,0.08)',
        display: 'flex',
        gap: 1,
      }}
    >
      <ActionButton
        variant="outlined"
        icon={<WhatsAppIcon />}
        label="واتساب"
        onClick={() => window.open(waLink, '_blank')}
      />

      <ActionButton
        variant="outlined"
        icon={<CallIcon />}
        label="اتصال"
        href={`tel:${phone}`}
      />

      <ActionButton
        variant="contained"
        icon={<RoomIcon />}
        label="الموقع"
        onClick={() => window.open(mapsUrl, '_blank')}
      />
    </Box>
  );
}
