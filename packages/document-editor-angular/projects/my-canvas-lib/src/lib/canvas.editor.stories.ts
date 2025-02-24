import { Meta, StoryFn } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CanvasEditorComponent } from './components/canvas-editor/canvas-editor.component';
import { EditorFooterComponent } from './components/editor-footer/editor-footer.component';
import { EditorToolbarComponent } from './components/editor-toolbar/editor-toolbar.component';
import { MyLibComponent } from './my-lib.component';

export default {
  title: 'App/CanvasEditor',
  component: MyLibComponent, // ✅ Use the main component
  decorators: [
    moduleMetadata({
      imports: [
        CanvasEditorComponent, // ✅ Import standalone components correctly
        EditorFooterComponent,
        EditorToolbarComponent,
      ],
    }),
  ],
  argTypes: {
    title: { control: 'text', defaultValue: 'Canvas Editor' },
  },
} as Meta<MyLibComponent>;

const Template: StoryFn<MyLibComponent> = (args: MyLibComponent) => ({
  props: args,
});

export const DefaultView = Template.bind({});
DefaultView.args = {
  documentId: 'Canavas',
};
