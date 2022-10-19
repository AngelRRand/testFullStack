import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllTest, infoTest } from '../../redux/actions';

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



  console.log(InfoTests, 'INFOOOOO TEST')
  console.log(Tests)
  return (
    <div>Home</div>
  )
}

export default Home