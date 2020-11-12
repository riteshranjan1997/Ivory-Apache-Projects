import React from 'react'
import Bar from "../common/AppBar"
import SideBar from "./SideBar"
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
                                <div>Restaurent</div>
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
                                                <option>Restaurent(A-Z)</option>
                                                <option>Restaurent(Z-A)</option>
                                            </select>
                                        </div>
                                </div>
                                
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            </main>
        </div>
        </div>
    )
}

export default PastOrders