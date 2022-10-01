import React, { useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { mediaQuery } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function SimpleMediaQuery() {
  const dispatch = useDispatch();
  const matches = useMediaQuery('(min-width:1000px)');
  useEffect(() => {
    dispatch(mediaQuery(matches));
  },[matches]);
  console.log('Working Query')
  return <span></span>;
}
