module.exports = {
  types: [
    { value: '✨特性', name: '特性:    一个新的特性' },
    { value: '🐛修复', name: '修复:    修复一个Bug' },
    { value: '📝文档', name: '文档:    变更的只有文档' },
    { value: '💄格式', name: '格式:    空格, 分号等格式修复' },
    { value: '♻️重构', name: '重构:    代码重构，注意和特性、修复区分开' },
    { value: '⚡️性能', name: '性能:    提升性能' },
    { value: '✅测试', name: '测试:    添加一个测试' },
    { value: '🔧工具', name: '工具:    开发工具变动(构建、脚手架工具等)' },
    { value: '⏪回滚', name: '回滚:    代码回退' }
  ],
  scopes: [
    { name: 'CI' },
    { name: 'kvh' },
    { name: 'database' },
    { name: 'storage' },
    { name: 'engine' },
    { name: 'typings' },
    { name: 'test' }
  ],
  // it needs to match the value for field type. Eg.: 'fix'
  /*  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },  */
  // override the messages, defaults are as follows
  messages: {
    ticketNumber: '请输入关联的 ISSUE ID:',
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    subject: '简短描述: ',
    body: '详细描述，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?'
  },
  hasChinese: true,
  allowCustomScopes: true,
  allowBreakingChanges: ['特性', '修复'],
  // limit subject length
  subjectLimit: 100,
  ticketNumberPrefix: '#',
  allowTicketNumber: true,
  isTicketNumberRequired: true,
  skipQuestions: ['body', 'footer']
}
