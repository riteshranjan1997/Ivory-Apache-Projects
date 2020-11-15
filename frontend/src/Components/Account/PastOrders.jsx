import React from 'react'
import Bar from "../common/AppBar"
import SideBar from "./SideBar"
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useSelector } from 'react-redux';
import OrderCard from "../OrderCard"

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
      },
  content:{
    flexGrow: 1,
    [theme.breakpoints.down('xs')]:{
        paddingLeft:theme.spacing(3)
    },
    paddingLeft: theme.spacing(45),
    paddingTop: theme.spacing(10),
    paddingRight:theme.spacing(5)
  },
  toolbar:{
    toolbar: theme.mixins.toolbar,
  },
  title: {
    fontSize: 16,
    fontWeight:"bolder",
    textAlign:"left",
    padding:"5px",
  },
  pos: {
    marginBottom: 12,
  },
  nameField:{
      padding:"5px",
      display:"flex",
      justifyContent:"space-between",
      fontSize:"12px",
      color:"grey"
  },
  dividerFullWidth: {
    margin: `20px 0 0 ${theme.spacing(2)}px`,
  },
  orderHistory:{
     border:"1px solid white",
     outline:"none",
  },
  orderHeader:{
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      color:"grey",
      
  },
  orderSearchFilter:{
      display:"flex",
     
  },
  floatLeft: {
    float: "left",
    color: "grey",
  },
}))
function PastOrders(){
    const classes = useStyles()
    const userOrders = useSelector((state)=>state.auth.user_data.past_orders)
    // console.timeLog(user)
    console.log("userOrders total orders",userOrders)
    return(
        <div>
            <Bar/>
            <SideBar/>
        <div className={classes.root}>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title}>
                            <div className={classes.orderHeader}>
                                <div>Orders</div>
                                <div>Restaurant</div>
                                <div className={classes.orderSearchFilter}>
                                    <div><i class="fas fa-search"></i></div>
                                    <div><input type="text" placeholder="Filter Order History" className={classes.orderHistory}/></div>
                                </div>
                                <div className={classes.orderSearchFilter}>
                                    <div style={{marginTop:"5px"}}>Sort By:</div>
                                    <div>                                       
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>Most Recent</option>
                                                <option>Ratings</option>
                                                <option>Relevance</option>
                                                <option>Restaurant(A-Z)</option>
                                                <option>Restaurant(Z-A)</option>
                                            </select>
                                        </div>
                                </div>
                                
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            </main>
        </div>
    <div style={{border:"1px solid red",width:"max-content",position:"absolute",right:250,border:"1px solid gray",maxHeight:"600px",overflowY:"scroll",maxWidth:"800px",display:"flex",flexWrap:'wrap' }}>{userOrders.map(ele=>{return <div style={{margin:"25px"}}><OrderCard {...{ele}} /></div>})}</div>
        </div>
    )
}

export default PastOrders