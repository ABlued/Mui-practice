import { Box, Button } from '@mui/material';
import React from 'react';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
// Box는 div를 대체하는 강력하고 편리한 컴포넌트로 tailwind CSS 방식이다.
// Box 컴포넌트는 특정 컴포넌트를 감싸면서 스타일을 적용시키는데 자주 사용한다.
function BoxPractice1() {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        // backgroundColor: 'primary.dark',
        '&:hover': {
          // backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Button variant="outlined" endIcon={<ArrowForwardTwoToneIcon />}>
        View complete reportbutton
      </Button>
    </Box>
  );
}

export default BoxPractice1;
