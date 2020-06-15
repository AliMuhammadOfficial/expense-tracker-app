import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'
import { Divider } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            Expense Tracker
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const App = () => {
  const classes = useStyles();
  const [data, setData] = React.useState(0)

  const addBalence = () => {
  
  }

  return (
    <div textAlign='center'>
      <ButtonAppBar />
      <Container maxWidth="lg" textAlign='center'>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <h1>Hello World</h1>
              <Grid container>
                <Grid item xs={12} spacing={1}>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Balence Rs: {data.balence}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <br />
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Income Rs: {data.income}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Expense Rs: {data.expense}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid container>
          <form>
            <input type="text" id="val" placeholder="Transection Title" />
            <button type="button" onClick={addBalence}>Add</button>
          </form>
        </Grid>
      </Container>
    </div>
  )
}

export default App