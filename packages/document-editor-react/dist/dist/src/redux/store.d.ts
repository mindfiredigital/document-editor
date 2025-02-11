export declare const store: import('@reduxjs/toolkit/dist/configureStore').ToolkitStore<
  {
    document: import('./documentReducer').DocumentState;
  },
  import('@reduxjs/toolkit').AnyAction,
  [
    import('@reduxjs/toolkit').ThunkMiddleware<
      {
        document: import('./documentReducer').DocumentState;
      },
      import('@reduxjs/toolkit').AnyAction,
      undefined
    >,
  ]
>;
export type RootState = ReturnType<typeof store.getState>;
