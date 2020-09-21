import React from 'react';
import { Navbar } from '../components';

export default {
  title: 'Components',
  component: Navbar,
  parameters: { layout: 'fullscreen' }
};

export const Default = () => <Navbar />;
Default.storyName = 'Navbar';
