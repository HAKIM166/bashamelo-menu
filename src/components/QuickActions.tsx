'use client';

import { Box, Button } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

type Props = {
  mapsUrl: string;
  phone: string;
  whatsappPhone: string;
};

function ActionButton({
  icon,
  label,
  type,
  onClick,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  type: 'whatsapp' | 'call' | 'location';
  onClick?: () => void;
  href?: string;
}) {
  const styles = {
    whatsapp: {
      main: '#25D366',
      soft: 'rgba(37, 211, 102, 0.10)',
      border: 'rgba(37, 211, 102, 0.45)',
    },
    call: {
      main: '#2563eb',
      soft: 'rgba(37, 99, 235, 0.09)',
      border: 'rgba(37, 99, 235, 0.35)',
    },
    location: {
      main: '#d2242a',
      soft: 'rgba(210, 36, 42, 0.10)',
      border: 'rgba(210, 36, 42, 0.45)',
    },
  }[type];

  const isLocation = type === 'location';

  return (
    <Button
      fullWidth
      onClick={onClick}
      component={href ? 'a' : 'button'}
      href={href}
      sx={{
        borderRadius: 999,
        py: { xs: 1.05, sm: 1.15 },
        minHeight: 46,
        backgroundColor: isLocation ? '#d2242a' : '#fff',
        color: isLocation ? '#fff' : styles.main,
        border: `1px solid ${isLocation ? '#d2242a' : styles.border}`,
        boxShadow: isLocation
          ? '0 8px 20px rgba(210,36,42,0.25)'
          : '0 6px 16px rgba(0,0,0,0.05)',
        fontWeight: 900,
        fontSize: { xs: 14, sm: 15 },
        transition: '0.2s ease',
        '&:hover': {
          backgroundColor: isLocation ? '#b91f24' : styles.soft,
          borderColor: styles.main,
          transform: 'translateY(-1px)',
        },
        '& .btnInner': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0.8,
          lineHeight: 1,
          whiteSpace: 'nowrap',
        },
        '& .iconBox': {
          width: 30,
          height: 30,
          borderRadius: '50%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isLocation ? 'rgba(255,255,255,0.16)' : styles.soft,
        },
        '& svg': {
          fontSize: 20,
          color: isLocation ? '#fff' : styles.main,
        },
      }}
    >
      <span className="btnInner">
        <span className="iconBox">{icon}</span>
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
        px: { xs: 1.2, sm: 2 },
        py: 1.1,
        backgroundColor: 'rgba(255,255,255,0.94)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(0,0,0,0.08)',
        display: 'flex',
        gap: { xs: 0.8, sm: 1.2 },
      }}
    >
      <ActionButton
        type="whatsapp"
        icon={<WhatsAppIcon />}
        label="واتساب"
        onClick={() => window.open(waLink, '_blank')}
      />

      <ActionButton
        type="call"
        icon={<CallIcon />}
        label="اتصال"
        href={`tel:${phone}`}
      />

      <ActionButton
        type="location"
        icon={<RoomIcon />}
        label="الموقع"
        onClick={() => window.open(mapsUrl, '_blank')}
      />
    </Box>
  );
}