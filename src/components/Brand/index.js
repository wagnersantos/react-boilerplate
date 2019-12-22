import React from 'react';
import PropTypes from 'prop-types';

import { BrandStyled } from './styled';

const Brand = function Brand({ brandImage }) {
  return <BrandStyled data-testid="brand" src={brandImage} alt="brand" />;
};

Brand.propTypes = {
  brandImage: PropTypes.string.isRequired
};

export default React.memo(Brand);
