import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { MyLibComponent } from './my-lib.component';
import { CanvasEditorComponent } from './components/canvas-editor/canvas-editor.component';
import { EditorFooterComponent } from './components/editor-footer/editor-footer.component';
import { EditorToolbarComponent } from './components/editor-toolbar/editor-toolbar.component';

export default {
  title: 'App/CanvasEditor',
  component: MyLibComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CanvasEditorComponent,
        EditorFooterComponent,
        EditorToolbarComponent,
      ],
    }),
  ],
  argTypes: {
    value: { control: 'text', defaultValue: 'Default text' },
    toolbar: { control: 'object', defaultValue: '{}' },
    toolbar_class: { control: 'object', defaultValue: {} },
    canvas_class: { control: 'object', defaultValue: {} },
    on_change: { action: 'onChange' },
    on_select: { action: 'onSelect' },
  },
} as Meta<MyLibComponent>;

const Template: StoryFn<MyLibComponent> = args => ({
  props: {
    ...args,
  },
});

export const DefaultView = Template.bind({});
DefaultView.args = {
  value: 'Canvas Editor',
  toolbar: '{}',
  toolbar_class: {},
  canvas_class: {},
};
