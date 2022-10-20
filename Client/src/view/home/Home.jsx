import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { infoTest } from '../../redux/actions';
import Container from '../../component/Container.jsx'
import ListFiles from '../../component/ListFiles';

const Home = () => {
  const InfoTests = useSelector((state) => state.InfoTests);
  const [count, setCount] = useState(0)
  const [localTest, setLocalTest] = useState([])
  const dispatch = useDispatch();

  const getData = () => {
    if(InfoTests.length > 0){
      return
    }
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
    <Container
      WH={'WH_home'}
      center={'container_center'}
    >
        <main>
          <ListFiles InfoTests={InfoTests}></ListFiles>
          
        </main>
    </Container>
  )
}

export default Home