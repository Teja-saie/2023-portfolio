import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type PassedProps={
    bg:string,
    text:string
}

export default function ActionAreaCard({bg,text}:PassedProps) {
  return (
    <Card sx={{ maxWidth: 345 }} className="rounded-lg p-4 m-5 bg-glassmorph pointer-events-none">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={bg}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {text}
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}