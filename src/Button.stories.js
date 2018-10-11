import React from 'react';

import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('with red background', () => (
    <Button bg="red">Click me</Button>
  ))
  .add('with blue background', () => (
    <Button bg="blue">Click me</Button>
  ));
