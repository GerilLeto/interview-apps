import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import logo from './assets/logo.svg';
import { getCurrentTime } from '../../redux/ui';
import { Link } from "react-router-dom";
import './index.scss';

const Home:React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentTime());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/miller-columns">Miller columns app</Link>
      </header>
    </div>
  );
};

export default React.memo(Home);

