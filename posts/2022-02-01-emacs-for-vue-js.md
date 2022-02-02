---
title: Emacs for VueJs
slug: emacs-for-vuejs
feature_image: null
featured: false
created_at: '2020-02-02T14:30:38.000+00:00'
updated_at: '2020-02-02T03:20:44.000+00:00'
published_at: '2022-02-01'
tags:
  - name: tailwind
  - name: vuepress
url: '/posts/the-coldest-sunset'
excerpt: >-
  The reality is that VSCode has a lot of great tooling for [Java/Type]script, and lot of tools (ie. language servers) are built for VSCode first, and then adapted by the community for various editors. As a result, the quality of the tooling for emacs can be questionable, and some of it left unmaintained. (Not that I can really judge, I have no idea how to write that stuff)
---

## Just use VSCode
The reality is that VSCode has a lot of great tooling for [Java/Type]script, and lot of tools (ie. language servers) are built for VSCode first, and then adapted by the community for various editors. As a result, the quality of the tooling for emacs can be questionable, and some of it left unmaintained. (Not that I can really judge, I have no idea how to write that stuff)

You'll likely have an easier time using VSCode, or another editor with better tooling and so if you're not deadset on using emacs, i'd recommend going that route.

# Part 1: Basic Setup
Just as a note, I use Doom Emacs, which comes with a bunch of preconfigured packages. This is just the work I did on top of that.

`web-mode` comes with support for syntax highlighting within Vue Single File Components. All you have to do is make sure that it is enable for vue files. (Doom does this automatically)

```lisp
(require 'web-mode)
(add-to-list 'auto-mode-alist '("\\.vue\\'" . web-mode))
```

The ESLint package that comes with doom will also automatically work if you use it with the Vue-CLI ESLint config.

In addition, here are some indent settings I use in order to play nicely with ESLint.

```lisp
(defun my-web-mode-hook ()
  (setq web-mode-code-indent-offset 2)
  (setq web-mode-markup-indent-offset 2)
  (setq web-mode-css-indent-offset 2)
  (setq web-mode-script-padding 0)
  (setq web-mode-style-padding 0)
  )
(add-hook `web-mode-hook `my-web-mode-hook)
```

This provides us with basic syntax highlighting and linting, which is enough for some people, but what about that juicy autocomplete??

# Part 2: Autocomplete
For Vue, there are two main options. Vetur has been the standard for Vue and doesn't require setup with lsp-mode. However, a newer option, Volar, has been developed with support for `<script setup>` syntax and typescript.

## Volar
Personally, I use Volar. In my experienced it has been a lot nicer after using the new composition API, I have started using it everywhere. The only issue is, it is still new and requires a custom lsp client which still has some hiccoughs.

In `packages.el`:

```lisp
(package! lsp-volar :recipe (:host github :repo "jadestrong/lsp-volar"))
```

In `config.el`:

```lisp
(use-package! lsp-volar)
```


Also remember to install the language server:
```sh
npm install -g @volar/server
```

## TailwindCSS
In addition, I use TailwindCSS, and getting tailwind autocomplete is great so I don't have to remember class names. For this, the I use the `lsp-tailwindcss` plugin in add-on mode to work with other language servers. Its important to note that this language server can be quite slow and can often delay keypresses when searching through classes.

In `packages.el`:
```lisp
(package! lsp-tailwindcss :recipe (:host github :repo "merrickluo/lsp-tailwindcss"))
```

In `config.el`:
```lisp
(use-package! lsp-tailwindcss
  :init
  (setq! lsp-tailwindcss-add-on-mode t)
  (setq! lsp-tailwindcss-major-modes '(web-mode css-mode))
  )
```

And again, remember to install you language server.

```shell
npm install -g @tailwindcss/language-server
```
