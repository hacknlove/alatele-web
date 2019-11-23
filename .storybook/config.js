import { configure, addDecorator } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'
import '../src/styles/style.sass'

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

const req = require.context('../src', true, /\.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
