# This is laravel and vue 3 template, uses sail.

First, we have to install packages and build our frontend assets

```shell
composer install
pnpm install
pnpm run build
```

And you should run this command in a separate terminal:
```shell
pnpm run dev
```

To run the project, you have to use default context of the docker. You can switch to default context using this command:

```shell
docker context use default
```

After that, you run this command:

```shell
sail up -d
```

After container build, you have to create tables and seed database if you want using this command:

```shell
sail artisan migrate:fresh
sail artisan db:seed
```

After everything done, you must see your website running on localhost:8000.

## Frontend Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/)

- 🗂 [File based routing](./resources/vue/src/pages)

- 📦 [Components auto importing](./resources/vue/src/components)

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- 📑 [Layout system](./resources/vue/src/layouts)

- 🎨 [TailwindCss](https://tailwindcss.com/) - A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup

- 😃 [Use icons using Icon component](./resources/vue/src/components/ui/icon/)

- 🌍 [I18n ready](./resources/vue/locales)

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- 🦾 TypeScript, of course

<br>
