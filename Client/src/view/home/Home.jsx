import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { infoTest } from '../../redux/actions';
import Container from '../../component/Container.jsx'

const Home = () => {
  const Tests = useSelector((state) => state.Tests);
  const InfoTests = useSelector((state) => state.InfoTests);
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();


  useEffect(() => {
    if (count < 7) {
      dispatch(infoTest(Tests[count]))
      setCount(count + 1)
    } else {
      return
    }
  }, [dispatch, count])

  return (
    <Container>
      <main>
        <h2>sada</h2>
      </main>
    </Container>
  )
}

export default Home