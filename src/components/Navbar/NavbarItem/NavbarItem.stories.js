import React from 'react';
import { storiesOf } from '@storybook/react';

import NavbarItem from './NavbarItem';

const title = 'title';
const path = 'http://link';


storiesOf('NavbarItem', module)
  .add('default', () =>
    <NavbarItem title={title} path={path}/>
  );
