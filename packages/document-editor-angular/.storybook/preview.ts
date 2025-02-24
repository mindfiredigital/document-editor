import { applicationConfig, type Preview } from '@storybook/angular';
import { provideStore } from '@ngrx/store';
import { documentReducer } from '../projects/my-canvas-lib/src/lib/store/document.reducer'; // Adjust path as needed

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    applicationConfig({
      providers: [provideStore(documentReducer)],
    }),
  ],
};

export default preview;
