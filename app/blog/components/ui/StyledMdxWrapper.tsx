"use client";

import styled from 'styled-components';
import { useTheme } from "next-themes"
import { getThemeFontVariable } from '@/lib/utils';
import clsx from 'clsx';

const { theme } = useTheme();

export default function StyledMdxWrapper(children) {

    const style = styled.div`
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => getThemeFontVariable(theme)} !important;
    // Add other styling as needed
  }
`;
  
    const { theme } = useTheme();
  
    return (
      <div className=''>
        
      </div>
    );
  }


export default StyledMdxWrapper;