import React from 'react';
import PropTypes from 'prop-types';
import { StyledLoader } from './styled';

const Spinner = ({ show }) =>
  show && (
    <StyledLoader data-testid="spinner">
      <div className="loading">
        <div className="spinner">
          <div className="mask">
            <div className="maskedCircle" />
          </div>
        </div>
      </div>
    </StyledLoader>
  );

Spinner.defaultProps = {
  show: false
};

Spinner.propTypes = {
  show: PropTypes.bool
};

export default React.memo(Spinner);
