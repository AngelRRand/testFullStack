import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { infoTest } from '../../redux/actions';
import Container from '../../component/Container.jsx'

const Home = () => {
  const InfoTests = useSelector((state) => state.InfoTests);
  const [count, setCount] = useState(0)
  const [localTest, setLocalTest] = useState([])
  const dispatch = useDispatch();

  const getData = () => {
    let data = localStorage.getItem('tests')
    setLocalTest(data.split(','))
  }
  useEffect(() => {
     getData()
    if (count < 7) {
      dispatch(infoTest(localTest[count]))
      setCount(count + 1)
    } else {
      return
    }
  }, [dispatch, count])
 console.log(InfoTests)
  return (
    <Container>
      <main>
        <h2>sada</h2>
      </main>
    </Container>
  )
}

export default Home