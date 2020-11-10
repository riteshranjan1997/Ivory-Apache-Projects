import React from 'react'
import Styled from 'styled-components'
import Divider from '@material-ui/core/Divider'
import data from '../../data.json'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
        width: 151,
      },
 
   
  }));

const MenuWrapper=Styled.div`
    display:flex;
    margin-top:-40px;
    margin-left:400px;
    .delivary{
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    .marginChange{
        margin-left:20px;
    }
`

function MenuPage()
{
    const classes = useStyles();
    const theme = useTheme();
    console.log(data[0].menu_items)
    return(
        <div>
        <MenuWrapper>
            <div className="delivary">
                <div>Delivary,ASAP(20-30m)</div>
                <div>Free delivary</div>
            </div>
            <div className="marginChange">
                Change
            </div>
            <Divider/>            
        </MenuWrapper>
        <div>
        {data[0].menu_items && data[0].menu_items.map(item=>(
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        {item.name}
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={item.image}
                    title="Live from space album cover"
                />
            </Card>
        
        ))}
     </div>
     </div>
    )
}

export default MenuPage