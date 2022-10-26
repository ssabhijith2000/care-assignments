import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import EmailIcon from '@mui/icons-material/Email';
import { CardContent, Grid } from '@mui/material';
function DisplayCard(props) {
    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }
      
      function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }
    return ( 
        <>
        <br/><br/>
        
            <Card sx={{ minWidth: 500}} variant="outlined">
              <CardContent style={{ justifyContent: "center", display: "flex" }}>
            <Stack direction= "column" spacing={1}>
                <Grid container justifyContent="center"> <Avatar  style={{ justifyContent: "center",display: "flex" }} sx={{ width: 100, height: 100 }} {...stringAvatar(props.name)}/>
                </Grid>
                <h3>{props.name}</h3>
                <Grid container justifyContent="center" alignItems="center"><EmailIcon color = "primary"/>  {props.email}</Grid>
            </Stack>
            
            </CardContent>
            </Card>
            
        </>
     );
}

export default DisplayCard;