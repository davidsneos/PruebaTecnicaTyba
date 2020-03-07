const commonPlugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ['./app'],
      alias: {
        app: './app',
        Config: './app/Config',
        // 'Data': './app/Data',
        Reducers: './app/Data/Reducers',
        Globals: './app/Globals',
        Logic: './app/Logic',
        Components: './app/UI/Components',
        Screens: './app/UI/Screens',
      },
    },
  ],
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [...commonPlugins],
};
