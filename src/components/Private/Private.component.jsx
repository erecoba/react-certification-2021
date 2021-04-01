import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useSession } from '../../state/Provider';

function Private({ children, ...rest }) {
  const { sessionState } = useSession();

  return (
    <Route
      {...rest}
      render={() => (sessionState.user ? children : <Redirect to="/" />)}
    />
  );
}

export default Private;
