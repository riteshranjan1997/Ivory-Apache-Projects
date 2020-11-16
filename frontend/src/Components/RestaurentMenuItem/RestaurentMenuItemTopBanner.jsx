import React from 'react'
import Styled from 'styled-components'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import zIndex from '@material-ui/core/styles/zIndex';



const useStyles = makeStyles((theme) => ({   
    closeMark: {
      color: "#2B8282",
      fontWeight: "bolder",
    },
    modelHeading: {
      color: "black",
      fontSize: "18px",
      fontWeight: "bolder",
    },
    design: {
      height: "10px",
      width: "108%",
      marginLeft: "-20px",
      borderRadius: "3px",
      background: " #f7f7f7",
      boxShadow: "34px 34px 68px #f5f5f5,-34px -34px 68px #f9f9f9",
    },
   
    buttons:{
      display:"flex",
      flexDirection:"flex-start",
      padding:"20px",
      fontWeight:"bolder",
    },
    icons:{
        color:"#2B8282",
        padding:"10px",
    }
  }));

const BannerWrapper = Styled.div`
        position:relative;     
      img{
          height:170px;
          z-index:10;
          width:100vw;
      }

`
const BackArrow=Styled.div`
      border : none;
      position:absolute;
      top : 20px;
      left:160px;
      z-index:1;
      i{
          margin-top:65px;
          background :#2B8282;
          border-radius:50%;
          font-size:40px;
          color:white;
          z-index:15;
      }
`
const SaveRestaurent = Styled.div`
    border : none;
    margin-top:65px;
    position:absolute;
    top : 20px;
    right:160px;    
    height:40px;
    width:40px;
    background:white;
    border-radius:50%;
    z-index:15;
    i{
        position:relative;
        top:10px;
        left:15px;        
        color:grey;       
    }
`

const ShareRestaurent = Styled.div`
    margin-top:65px;
    border : none;
    position:absolute;
    top : 20px;
    right:100px;
    z-index:15;
    height:40px;
    width:40px;
    background:white;
    border-radius:50%;
    i{       
        color:#2B8282;        
        border-radius:50%;
        font-size:22px;
        position:relative;
        top:10px;
        left:10px; 
    }
`

const RestaurentIcon = Styled.div`
    width:max-content;    
    position:relative;
         top:-40px;
         left:80%;
    img{
               
        height:100px;
        width:100px;
        z-index:20;
    }

`

function RestaurentMenuItemTopBanner(){
    const classes = useStyles();
    const ParamsId =useParams()
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
    const restaurantsData = useSelector((state)=>state.app.restaurantsData)
    console.log("params id",ParamsId)
    const item = restaurantsData.find(item =>item.restaurant_id == ParamsId.id)
    // console.log("data",data)
    // console.log("in banner page",data)
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    //   console.log(data.restaurant_id)
    return(
        <div>
                <BannerWrapper>
                    <img className="img-fluid" src ={`../${item.restaurant_images}`} style={{marginTop:"65px",objectFit:"cover",zIndex:"2"}} alt = "ImageBanner"/>
                    <BackArrow>
                        <Link to="/search"><i class="fas fa-chevron-circle-left"></i></Link>
                    </BackArrow>
                    <SaveRestaurent>
                        <i class="fas fa-bookmark"></i>
                    </SaveRestaurent>
                    <ShareRestaurent>
                        <div  onClick={handleClickOpen} ><i class="fas fa-share-alt"></i></div>
                    </ShareRestaurent>
                    <RestaurentIcon>
                        <img src={`../hotel.png`} style={{width:100}} alt="restaurentIcon"/>
                    </RestaurentIcon>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        fullWidth="fullwidth"
                        maxWidth="xs"
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                        >
                        <DialogTitle id="responsive-dialog-title">
                            <h4 className={classes.closeMark} onClick={handleClose}>
                            {<i class="fas fa-times"></i>}
                            </h4>
                        </DialogTitle>

                        <DialogContent>
                            <h4 className={classes.modelHeading}>Share {item.restaurant_name}</h4>

                            <DialogContentText>
                            <div className={classes.design}></div>
                                <div className={classes.icons}><i class="fab fa-facebook-square"></i>{" "}FaceBook</div>
                                <div className={classes.icons}><i class="fab fa-twitter"></i> {" "}Twitter</div>
                                <div className={classes.icons}><i class="fas fa-envelope"></i> {" "}Email</div>
                                <div className={classes.icons}><i class="fas fa-bolt"></i> {" "}Copy Link</div>
                            </DialogContentText>
                        </DialogContent>
                        </Dialog>
                </BannerWrapper>
 
        </div>
    )
}

export default RestaurentMenuItemTopBanner