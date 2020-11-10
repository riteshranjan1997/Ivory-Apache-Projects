import React from 'react'
import Styled from 'styled-components'
import Divider from '@material-ui/core/Divider'
import data from '../../data.json'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({    
    price:{
        background:"white",
        opacity:0.9,
        color:"black",
        height:"30px",
        width:"45px",
        display:"flex",
        alignItems:"center",
        justifyContent:"left",
        borderRadius:"10px",
        fontWeight:"bolder",
        textAlign:"center",
        position:"relative",
        left:"150px",
        zIndex:20
    },
  description:{
      fontSize:"12px",
      color:"grey"
  },
  itemName:{
      fontSize:"14px",
      fontWeight:"bolder",
      paddingBottom:"20px"
  }
   
  });

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
    // console.log(data[0].menu_items)
    return(
        <div>
        <MenuWrapper>
            <div className="delivary">
                <div style={{fontSize:"12px"}}>Delivary,ASAP(20-30m)</div>
                <div style={{fontSize:"10px",color:"green"}}>Free delivary</div>
            </div>
            <div className="marginChange" style={{color:"#2B8282"}}>
                Change
            </div>
            <Divider/>            
        </MenuWrapper>
        <div className="container">
                <div className="row">
                {data[0].menu_items && data[0].menu_items.map(item=>(            
                        <div className="col-12 col-md-5 border m-2 rounded">
                            <div className="row">
                                <div className="col-7" style={{textAlign:"left"}}>
                                    <div className={classes.itemName} style={{marginTop:"10px"}}>{item.name}</div>
                                    <div className={classes.description}>{item.description}</div>
                                </div>
                                <div className={`${classes.price}`}>₹{item.price}</div>
                                <div className="col-3" style={{position:"relative",right:"-16px"}}>
                                    <img src={item.image} alt="menu" height="120px" className="rounded-right" width="120px" style={{zIndex:1}}/> 
                                </div>
                            </div>
                        </div>
                ))}
            </div>
     </div>
     </div>
    )
}

export default MenuPage

