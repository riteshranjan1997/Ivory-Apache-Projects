import React from 'react'
import Styled from 'styled-components'
import data from '../../data.json'
import Button from '@material-ui/core/Button';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

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
          background :#2B8282;
          border-radius:50%;
          font-size:40px;
          color:white;
      }
`
const SaveRestaurent = Styled.div`
    border : none;
    position:absolute;
    top : 20px;
    right:160px;
    z-index:1;
    height:40px;
    width:40px;
    background:white;
    border-radius:50%;
    i{
        margin-top:10px;
        color:grey;
    }
`

const ShareRestaurent = Styled.div`
    border : none;
    position:absolute;
    top : 20px;
    right:100px;
    z-index:1;
    height:40px;
    width:40px;
    background:white;
    border-radius:50%;
    i{
        margin-top:10px;
        color:#2B8282;
        font-size:22px;
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
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return(
        <div>
            {data && data.map(item=>(            
                <BannerWrapper>
                    <img className="img-fluid" src ={item.restaurant_images} style={{marginTop:"63px",objectFit:"cover"}} alt = "ImageBanner"/>
                    <BackArrow>
                        <i class="fas fa-chevron-circle-left"></i>
                    </BackArrow>
                    <SaveRestaurent>
                        <i class="fas fa-bookmark"></i>
                    </SaveRestaurent>
                    <ShareRestaurent>
                        <div  onClick={handleClickOpen} ><i class="fas fa-share-alt"></i></div>
                    </ShareRestaurent>
                    <RestaurentIcon>
                        <img src={item.restaurent_logo}  alt="restaurentIcon"/>
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
                            <h4 className={classes.modelHeading}>Share {item.name}</h4>

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
        ))}
        </div>
    )
}

export default RestaurentMenuItemTopBanner