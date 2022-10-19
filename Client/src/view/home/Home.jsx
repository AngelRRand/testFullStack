import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllTest } from '../../redux/actions';

const Home = () => {
  const Tests = useSelector((state) => state.Tests);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTest())
  }, [dispatch])
  console.log(Tests)

  return (
    <div>Home</div>
  )
}

export default Home