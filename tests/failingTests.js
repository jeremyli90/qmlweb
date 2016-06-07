window.failingTests = {
  Render: {
    Async: [
      'NumberAnimationAutorun'
    ]
  },
  QMLEngine: {
    imports: [
      'RecursiveInit',
      'RecursiveInit2'
    ],
    properties: [
      'alias to id with same name',
      'ChangedExpressionSignal',
      'StringConversion'
    ],
    scope: [
      'object id should override same-named property of base object'
    ]
  },
  Initialize: {
    QtQuick: [
      'Translate',
      'Scale',
      'Rotation',
      'Font'
    ]
  }
};
