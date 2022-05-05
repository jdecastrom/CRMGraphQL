import React from 'react';

import styles from './myapp.scss';

export interface myappProps {
  prop?: string;
}

export function myapp({prop = 'default value'}: myappProps) {
  return <div className={styles.myapp}>myapp {prop}</div>;
}
