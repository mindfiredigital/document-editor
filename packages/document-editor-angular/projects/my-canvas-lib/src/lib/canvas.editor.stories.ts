import { Meta, Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CanvasLibModule } from './my-lib.component';
import { CanvasEditorComponent } from './components/canvas-editor/canvas-editor.component';
import { EditorFooterComponent } from './components/editor-footer/editor-footer.component';
import { EditorToolbarComponent } from './components/editor-toolbar/editor-toolbar.component';


export default {
  title: 'App/CanvasEditor',
  component: CanvasLibModule,
  decorators: [
    moduleMetadata({
      imports: [
        CanvasEditorComponent,  // Import standalone components
        EditorFooterComponent,  // Import standalone components
        EditorToolbarComponent  // Import standalone components
      ],
    }),
  ],
  argTypes: {
    title: { control: 'text', defaultValue: 'Canvas Editor' },
  },
} as Meta;

const Template: Story<CanvasLibModule> = (args: CanvasLibModule) => ({
  props: args,
});

export const DefaultView = Template.bind({});
DefaultView.args = {
  title: 'Canvas Editor',
};
