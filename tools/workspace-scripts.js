module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
        description: ` 🔻 Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo:android',
          description: '⚆  Run Android  🤖',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` 🔻 Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: '⚆  Run Android  🤖',
        },
      },
    },
    '⚙️': {
      script: `npx cowsay "@esolution/* packages will keep your ⚙️ cranking"`,
      description: '_____________  @esolution/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@esolution': {
      // @esolution/nativescript-sentry
      'nativescript-sentry': {
        build: {
          script: 'nx run nativescript-sentry:build.all',
          description: '@esolution/nativescript-sentry: Build',
        },
      },
      // @esolution/nativescript-sentry
      'nativescript-sentry': {
        build: {
          script: 'nx run nativescript-sentry:build.all',
          description: '@esolution/nativescript-sentry: Build',
        },
      },
      // @esolution/nativescript-sentry
      'nativescript-sentry': {
        build: {
          script: 'nx run nativescript-sentry:build.all',
          description: '@esolution/nativescript-sentry: Build',
        },
      },
      // @esolution/nativescript-sentry
      'nativescript-sentry': {
        build: {
          script: 'nx run nativescript-sentry:build.all',
          description: '@esolution/nativescript-sentry: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      'nativescript-sentry': {
        script: 'nx run nativescript-sentry:focus',
        description: 'Focus on @esolution/nativescript-sentry',
      },
      'nativescript-sentry': {
        script: 'nx run nativescript-sentry:focus',
        description: 'Focus on @esolution/nativescript-sentry',
      },
      'nativescript-sentry': {
        script: 'nx run nativescript-sentry:focus',
        description: 'Focus on @esolution/nativescript-sentry',
      },
      'nativescript-sentry': {
        script: 'nx run nativescript-sentry:focus',
        description: 'Focus on @esolution/nativescript-sentry',
      },
      reset: {
        script: 'nx g @esolution/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
