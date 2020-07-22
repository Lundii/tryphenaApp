import React, {useState, useContext} from 'react';
import {SiteContext} from '../context/siteContext';

const useSite = () => {
  const value = useContext(SiteContext);
  return value;
};

export default useSite;
