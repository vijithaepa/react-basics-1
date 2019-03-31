import React from 'react'
import loaderSrc from '../../assets/LoadingIndicators-spinkit.gif'

const Loader = props => (
  <div>
      <img src={loaderSrc} alt='Loader Icon' style={{width: 155}}/>
  </div>
);

export default Loader;