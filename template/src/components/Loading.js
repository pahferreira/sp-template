import React from 'react';
import { PulseLoader } from 'react-spinners';
import { Colors } from '../theme/Theme';

const Loading = props => {
  return <PulseLoader color={Colors.PRIMARY} loading={props.loading} />;
};

export default Loading;
