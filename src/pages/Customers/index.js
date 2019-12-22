/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Spinner } from 'components';
import { actions } from './store/actions';
import { Container } from './styled';
import { selectors } from './store/reducer';

const Customers = () => {
   /* istanbul ignore next */
  const loaders = useSelector(state => selectors.getLoaders(state));
   /* istanbul ignore next */
  const customers = useSelector(state => selectors.getCustomers(state));

  const dispatch = useDispatch();
  const getCustomers = () => dispatch(actions.fetchCustomers.request());

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <Container data-testid="customers">
      <>
        <h1>CUSTOMERS:</h1>
        <Spinner show={loaders.customersList} />
        <ul>
          {customers.length > 0 &&
            !loaders.customersList &&
            customers.map(({ name, login, picture }) => (
              <li key={login.uuid}>
                <img src={picture.thumbnail} alt={name.first} />
                <p>{`${name.title} ${name.first} ${name.last}`}</p>
              </li>
            ))}
        </ul>
        <Link to="/">Home</Link>
      </>
    </Container>
  );
};

export default Customers;
