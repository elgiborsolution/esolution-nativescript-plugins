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
      script: `npx cowsay "@elgibor-solution/* packages will keep your ⚙️ cranking"`,
      description: '_____________  @elgibor-solution/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@elgibor-solution': {
      // @elgibor-solution/fcm-custom-sound
      'fcm-custom-sound': {
        build: {
          script: 'nx run fcm-custom-sound:build.all',
          description: '@elgibor-solution/fcm-custom-sound: Build',
        },
      },
      // @elgibor-solution/nativescript-multiselect
      'nativescript-multiselect': {
        build: {
          script: 'nx run nativescript-multiselect:build.all',
          description: '@elgibor-solution/nativescript-multiselect: Build',
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
      'fcm-custom-sound': {
        script: 'nx run fcm-custom-sound:focus',
        description: 'Focus on @elgibor-solution/fcm-custom-sound',
      },
      'nativescript-multiselect': {
        script: 'nx run nativescript-multiselect:focus',
        description: 'Focus on @elgibor-solution/nativescript-multiselect',
      },
      reset: {
        script: 'nx g @elgibor-solution/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
