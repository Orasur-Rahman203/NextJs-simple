import React from 'react';
import styles from '../styles/Home.module.css'
import DummyData from '../pages/api/Dummy.json'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import {ContextApiCreate} from '../../ContextApi/ContextApi'
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const cart = () => {
    return (
        <div className={styles.main}>
            <h1>This is cart section</h1>
            <Grid container spacing={2}>
            {
            DummyData.map((data)=>(
                <Grid item xs={12} sm={6} md={4} lg={3}>
<Card sx={{ maxWidth: 345 , height:320}} key={data.id}>
        <CardMedia
          sx={{ height: 140 }}
          image={data.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom component="div">
          {data.name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {data.email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
          sx={{marginBottom:0, bgcolor:'brown', width:340, color:'white'}}
          variant='contained'> 
          <ShoppingCartIcon/>
                Add button
          </Button>
        </CardActions>
      </Card>
      </Grid>
            ))
            }
            </Grid>
        </div>
    );
};

export default cart;