module.exports = (api) => {
  // api.cache(true)

  console.log('>>> babel api.env = ', api.env())

  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  }
}
