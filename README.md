# @infusedui/toast

To add `@infusedui` to you project you need to create a `.npmrc` file at the same folder base of you `package.json` with this line :

```npmrc
@infusedui:registry=https://npm.pkg.github.com
```

## Package

`@infusedui/toast` provide to you 2 element and 1 hook with 2 functions :

- provider: `<ToastProvider>`
- component: render toast notifications
- hooks: useToast()

```tsx
<ToastProvider>{/* Some other things of your apps */}</ToastProvider>
```
