import { themes } from "@storybook/theming";
import { initialize, mswDecorator } from "msw-storybook-addon";

import "../src/styles/global.css";

// Initialize MSW
initialize({
  // não dar log das requisições que não foram tratados pelo msw
  onUnhandledRequest: 'bypass'
});

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
};
