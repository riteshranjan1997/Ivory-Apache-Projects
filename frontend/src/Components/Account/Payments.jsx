import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
  closeMark:{
    color:"#2B8282",
    fontWeight:"bolder"
  },
  modelHeading:{
      color:"black",
      fontSize:"18px",
      fontWeight:"bolder",
  },
  design:{
    height:"10px",
    width:"108%",
    marginLeft:"-20px",
    borderRadius: "3px",
    background:" #f7f7f7",
    boxShadow: "34px 34px 68px #f5f5f5,-34px -34px 68px #f9f9f9",
  },
  buttons:{
    display:"flex",
    flexDirection:"flex-start",
    padding:"20px",
    fontWeight:"bolder",
  },
  cardNumber:{
    background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9ZNXfc4_B0l22XpjnRKVB7ZRQ3F48RtiYlA&usqp=CAU')",
    paddingLeft:"30px",
  },
  floatLeft:{
    float:"left",
    color:"grey"
}
}));


function Payments(){
    const classes =  useStyles()
    const [AddCreditCardDetails,setAddCreditCardDetails]=React.useState(false)
    return(
      <div className={classes.root}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <Card className={classes.root}>
                <Typography className={classes.title}>
                    CreditCards
                 </Typography>
                    <CardContent>
                        {!AddCreditCardDetails ? 
                        <div>                            
                            <Typography  style={{textAlign:"left",padding:"5px",fontSize:"13px",color:"#3B5998"}} onClick={AddCreditCardDetails=>setAddCreditCardDetails(true)}>
                                + Add New CreditCard 
                            </Typography>
                        </div>
                        :
                        <div>
                           <form>
                              <div className="form-row">
                                <div className="form-group col-4">
                                  <label for="cardNumber" className={classes.floatLeft}>Card Number</label>
                                  <input type="password" className={`form-control ${classes.cardNumber}`} id="cardNumber"/>
                                </div>
                              </div>
                           </form>
                        </div> }
                    </CardContent>
            </Card>
          </main>
        </div>
    )
}

export default Payments