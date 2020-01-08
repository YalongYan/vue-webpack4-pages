// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-return-assign': 'off',
    'no-useless-call': 'off',
    'no-new': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    "no-callback-literal": 0,
    camelcase: 'off'
    // camelcase: ['error', {
    //   ignoreDestructuring: true,
    //   allow: [
    //     'launch_new',
    //     'param_circulate_user', 'param_addApprove',
    //     'pk_bo', 'pk_boins', 'cross_url', 'success_action_status',
    //     'pk_workflownote', 'pk_user', 'param_copyTo', 'param_note',
    //     'object_id', 'member_id', 'pk_temp', 'pk_procdef', 'user_dept',
    //     'param_reject_activity', 'param_reaassign_user', 'param_jump_activity']
    // }]
  },
  globals: {
    jQuery: 'on',
    WebOffice2015: 'on',
    $: 'on',
    BUILD_TYPE: 'on',
    YYCooperationBridge: 'on'
  }
}
