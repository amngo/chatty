import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

const Transition = ({ show, children, url, history }) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show && url) {
      setRender(false);
      history.push(url);
    }
  };

  return (
    shouldRender && (
      <div
        style={{ animation: `${show ? 'zoomIn' : 'zoomOut'} .4s` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default withRouter(Transition);
