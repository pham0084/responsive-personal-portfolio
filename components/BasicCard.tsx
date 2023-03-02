import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

interface BasicCardProps {
  project: string;
  tag: string;
  description: string;
  url: string;
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const BasicCard: React.FC<BasicCardProps> = ({ project, tag, description, url }) => {
  return (
    <Card sx={{ minWidth: 200, height: 160, backgroundColor: 'transparent', boxShadow: 0, border: 1, borderColor: '#cbd5e1' }}>
      <CardContent>
      <Typography sx={{ fontSize: 18 }} color="#5C9EAD" gutterBottom>
  <Link href={url}>
    <Typography sx={{textDecoration: 'underline',fontWeight: 'bold'  }} component="span">{project}</Typography>
    <span  style={{ display: 'inline-flex' }}> &nbsp;</span>
    <span className='text-gray-400 rounded-full border border-gray-300 border-x-2 text-sm font-semibold' style={{ display: 'inline-flex' }}> &nbsp;Public&nbsp;</span>
  </Link>
</Typography>


        <Typography variant="body2" color="#4b5563" sx={{
          display: '-webkit-box',
          '-webkit-line-clamp': 3,
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          '@media screen and (max-width: 767px)': {
            '-webkit-line-clamp': 'unset',
            display: 'block',
            maxHeight: '4em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }
        }}>
          {description}
        </Typography>

      </CardContent>



    </Card>





  );
};

export default BasicCard;
