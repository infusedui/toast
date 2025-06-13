# @infusedui/toast

Utility library for displaying toast notifications in React.

## Installation

Create a `.npmrc` file at the root of your project so npm can access the GitHub
packages:

```npmrc
@infusedui:registry=https://npm.pkg.github.com
```

Then install the dependency:

```bash
npm install @infusedui/toast
```

## Usage

Wrap your application with `ToastProvider` to enable notifications everywhere.

```tsx
import { ToastProvider } from '@infusedui/toast';

const App = () => (
  <ToastProvider>
    {/* your application */}
  </ToastProvider>
);
```

In your components use the `useToasts` hook to push or clear toasts.

```tsx
import { useToasts } from '@infusedui/toast';

const Example = () => {
  const { pushToast, clearToast } = useToasts();

  const notify = () => {
    pushToast({
      content: 'Votre action est réussie',
      type: 'positive',
      title: 'Succès',
    });
  };

  return <button onClick={notify}>Show toast</button>;
};
```

### API

- `ToastProvider` – context provider that stores active toasts.
- `useToasts()` – hook returning `pushToast` and `clearToast` functions.
- `Toast` – component used internally to render each notification.

`pushToast` accepts the following options:

```ts
{
  content: string;
  type: 'positive' | 'negative' | 'neutral' | null;
  title?: string;
  format?: { icon?: 'left' | 'right' | 'both'; countdown?: boolean };
  position?: 'tl' | 'tr' | 'bl' | 'br' | 'cl' | 'cr' | 'cb' | 'ct';
  icon?: string | string[];
  loading?: boolean;
  timed?: number;        // countdown timer in seconds
  duration?: number;     // auto hide delay in seconds
  persistent?: boolean;  // disable auto hide when true
}
```

### Build

To generate the compiled files run:

```bash
npm run tsup
```

With this setup you can easily integrate toast notifications into any React
project.
