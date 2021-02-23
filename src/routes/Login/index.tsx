import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Button  from '@material-ui/core/Button';

import { AnimationComponent } from "../../components/index"
import "./style.scss"

const useStyles = makeStyles({

  root: {
    minWidth: 400,
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
    textAlign: "center"
  },
  pos: {
    marginBottom: 12,
  },
  inputsWrap: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },
  inputItem: {
    margin: "20px 0",
    width: "80%",
    height: 40
  },
  actionButton: {
    width: "80%",
    margin: "20px 0",
    height: "48px"

  }
});

export default function LoginCard() {

  const [account, setAccount] = useState({
    name: "",
    password: ""
  })


  const classes = useStyles();


  const handleLogin = () => {

  }


  const handlePwdChange = (e:any ) => {

    console.log(e);


  }


  const handleNameChange = (e:any) => {
    console.log(e);
  }


  return (
    <>
      <AnimationComponent/>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              欢迎登录这个神奇的网站
            </Typography>
            <Typography variant="h5" component="h2" />


        <div className={ classes.inputsWrap}>
        <TextField
              id="outlined-error"
              label="账号"
              defaultValue=""
              variant="outlined"
              placeholder="************"
              className={classes.inputItem}
              onChange={ (e) => handleNameChange(e)}
        />

        <TextField
          id="outlined-error-helper-text"
          label="密码"
          placeholder="************"
              variant="outlined"
              type="password"
              className={classes.inputItem}

              onChange={ (e) => handlePwdChange(e)}


              />
              <Button onClick={handleLogin} variant="contained" color="primary" className={ classes.actionButton}>
              登录网站
            </Button>
              </div>


        </CardContent>

        </Card>

    </>
  );
}
