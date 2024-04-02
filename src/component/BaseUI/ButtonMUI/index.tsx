'use client';
import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
interface Prop {
    pill?: boolean;
}
export const Button = styled(MuiButton)(({ pill }: Prop) => ({
    borderRadius: pill ? 50 : 4,
}));
