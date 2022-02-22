import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';

export default function App() {
  return (
    <Button
      variant="outlined" 
      startIcon={<GitHubIcon />}
      onClick={()=>location.href = '/github/auth'}
    >
      github
    </Button>
  );
}