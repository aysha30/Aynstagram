import React, { useEffect, useState } from 'react'
import { 
  Container, 
  Typography, 
  Grow, 
  useScrollTrigger,
  Slide,
  Grid, 
  AppBar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './Styles';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
function App(props) {

  const classes = useStyles();
  const dispatch = useDispatch();

  const [ currentId, setCurrentId ] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <React.Fragment>
    <Container maxWidth="lg">
      <HideOnScroll {...props}>
      <AppBar className={classes.appBar}>
        <Typography className={classes.heading} variant="h3">Aynstagram</Typography>
      </AppBar>
      </HideOnScroll>
    <Grow in>
      <Container>
        <Grid container className={classes.content} justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
    </Container>
    </React.Fragment>
  );
}

export default App;
