import React from 'react'
import Styled from 'styled-components'
import Divider from '@material-ui/core/Divider'
import data from '../../data.json'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from '@material-ui/core/Button';
import { useSelector,useDispatch } from 'react-redux';
import {addCart} from '../../redux/AddToCart/action'


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
  },
  closeMark: {
    color: "#2B8282",
    fontWeight: "bolder",
  },
  dialog:{
    display:"flex",
    flexDirection:"column",   
},
quantity:{
    width:"120px",
    fontSize:"15px",
    
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
    const restaurentId = data[0].restaurant_id
    const restaurentName = data[0].restaurent_name
    const [open, setOpen] = React.useState(false);
    const [name,setName] = React.useState("")
    const [image,setImage] = React.useState("")
    const [description,setDescription] = React.useState("")
    const [quantity,setQuantity] = React.useState(1)
    const [id,setId] =React.useState("")
    const [price,setPrice] = React.useState(0)
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));   
    const cart = useSelector((state)=>state.cart.cart)
    console.log(cart)
    const dispatch = useDispatch()
    // console.log(quantity,typeof(quantity))
    const handleClickOpen = (name,image,description,price,id) => {
        setOpen(true);
        setName(name);
        setImage(image);
        setDescription(description);
        setPrice(price)
        setId(id)
      };
    
    const handleClose = () => {
        setOpen(false);        
    };

    const handleCart = () => {
        const payload={
            // restaurent_id:restaurentId,
            restaurentId:restaurentId,
            restaurentName:restaurentName,
            id:id,
            name:name,
            quantity:quantity,
            totalPrice:price*quantity
        }
        dispatch(addCart(payload))
        handleClose()
    }

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
                        <div className="col-12 col-md-5 border m-2 rounded" onClick={()=>handleClickOpen(item.name,item.image,item.description,item.price,item.id)}>
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
                <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        fullWidth="fullwidth"
                        maxWidth="sm"
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                        >
                        <DialogTitle id="responsive-dialog-title">
                            <h4 className={classes.closeMark} onClick={handleClose}>
                            {<i class="fas fa-times"></i>}
                            </h4>
                        </DialogTitle>

                        <DialogContent>
                            <div className="d-flex justify-content-center mb-3"><img src={image} alt="Menu Item" height="200px" width="450px" style={{objectFit:"cover",objectPosition:"0% 80%"}} /></div>
                            <h4 className={classes.modelHeading}>{name}</h4>
                            <h5><b>₹{price}</b></h5>
                            <DialogContentText>
                            <div className={classes.design}></div>
                              <div className="mb-4">{description}</div>
                              <div className={`border  border-dark rounded-pill d-flex justify-content-between ${classes.quantity}`}>
                                 <div className="m-2" onClick={()=>setQuantity(Number(quantity)-1)} style={{color:quantity===0?"grey":"black"}}><i class="fas fa-minus"></i></div>
                                 <div className="m-2">{quantity}</div>
                                 <div className="m-2" onClick={()=>setQuantity(Number(quantity)+1)} style={{color:"black"}}><i class="fas fa-plus"></i></div>
                              </div>
                              <hr/>
                              <Button
                                    style={{
                                        backgroundColor: "#2B8282",
                                        color: "white",
                                        width: "180px",
                                        height:"40px",
                                        borderRadius:"10px"
                                    }}
                                    onClick={handleCart}
                                    >
                                    Add to Bag : ₹{price*quantity}
                                </Button>
                            </DialogContentText>
                        </DialogContent>
                        </Dialog>
                </div>
        </div>
     </div>
    )
}

export default MenuPage

