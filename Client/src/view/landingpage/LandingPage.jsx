import React from 'react'
import { useEffect } from 'react'
import { getAllTest } from '../../redux/actions';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Container from '../../component/Container.jsx'
import Button from '../../component/Button.jsx';

const LandingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTest())
  }, [dispatch])
  return (
    <Container>
      <Button>
        <Link to='home'>
          asd
        </Link>
      </Button>
    </Container>
  )
}

export default LandingPage