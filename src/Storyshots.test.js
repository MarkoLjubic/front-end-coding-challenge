import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';

initStoryshots({
  framework: 'react',
  test: multiSnapshotWithOptions({
    storybookUrl: 'http://my-specific-domain.com:9010'
  }),
});
