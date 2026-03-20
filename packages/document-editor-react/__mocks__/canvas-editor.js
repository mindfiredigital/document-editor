const DOMEventHandlers = {
  register: jest.fn(() => ({ destroy: jest.fn(), listener: {} })),
  handleBold: jest.fn(),
  handleItalic: jest.fn(),
  handleUnderline: jest.fn(),
  handleSubscript: jest.fn(),
  handleSuperscript: jest.fn(),
  handleStrikeout: jest.fn(),
  handleUndo: jest.fn(),
  handleRedo: jest.fn(),
  handleAlign: jest.fn(),
  handleList: jest.fn(),
  handleFontFamily: jest.fn(),
  getContent: jest.fn(() => ({ data: { main: [{ value: 'test content' }] } })),
  getSelectedText: jest.fn(() => ''),
  getContentStyles: jest.fn(() => ({})),
  setContent: jest.fn(),
  setPaperMargins: jest.fn(),
  createHyperLink: jest.fn(),
  setSize: jest.fn(),
  increaseFontSize: jest.fn(),
  decreaseFontSize: jest.fn(),
  setTitle: jest.fn(),
  setImage: jest.fn(),
  setFontColor: jest.fn(),
  highlightText: jest.fn(),
  destroy: jest.fn(),
};

const EditorMode = { EDIT: 'edit', PREVIEW: 'preview' };
const PageMode = { PAGING: 'paging', SCROLLING: 'scrolling' };
const RowFlex = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
  ALIGNMENT: 'alignment',
};
const ListType = { UL: 'ul', OL: 'ol' };
const ListStyle = { DECIMAL: 'decimal' };

module.exports = {
  DOMEventHandlers,
  EditorMode,
  PageMode,
  RowFlex,
  ListType,
  ListStyle,
};
