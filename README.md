# Ok-ish Blog Hugo Theme

An ok-ish blog theme based on [Vanilla](https://vanillaframework.io/). The theme
is responsive and supports multi-language mode, multi-author posts, and many
more. It's suitable for all types of blog posts.

![Screenshot of the theme](https://github.com/kongdivin/hugo-theme-okayish-blog/blob/master/images/screenshot.png)

## Getting Started

> I assume that you already have a Hugo site project. If not, you can create one
> by following [Quick Start](https://gohugo.io/getting-started/quick-start/).

To use the theme, add it to your site's theme directory:

```sh
git submodule add https://github.com/kongdivin/hugo-theme-okayish-blog.git themes/hugo-theme-okayish-blog
```

Then tell Hugo to use `hugo-theme-okayish-blog` by adding/updating the following
in `config.toml`

```toml
theme = "hugo-theme-okayish-blog"
```

### Cloning an existing repository

If you have an existing repository that was setup with the steps above, you have
to pull in the theme submodule after cloning your repository using the following
command:

```sh
git submodule update --init
```

## Usage

Head over to [Content Managment](https://gohugo.io/content-management/) to learn
more how to manage your content.

### Custom Home Page

The default homepage is showing the list of pages in the main sections. In case
you want a custom homepage, you can create `layouts/index.html`. For example,

```html
<!-- File: layouts/index.html -->

{{ define "main"}}
<h1>My New Home Page</h1>
{{ end }}
```

Since the theme is using Vanilla. You can use all its available components. See
its [docs](https://docs.vanillaframework.io/) for more details. Need
inspirations? There you go, https://vanillaframework.io/showcase.

### Custom Style

To provide a custom stylesheet, create `layouts/partials/head-extension.html` in
your site directory to override the one the theme's created. Then put the link
to your stylesheet in that file. For example,

```html
<!-- File: layouts/partials/head-extension.html -->

<link href={{ "css/custom.css" | absURL }} rel="stylesheet"><link>

<link href="https://fonts.googleapis.com/css?family=Hanuman:400,700|Inconsolata|Roboto:400,400i,700,700i&display=swap&subset=khmer" rel="stylesheet"><link>
```

N.B. The theme includes fonts here. You might want to copy the `<link>`
over; otherwise, the fonts will be default to Vanilla's default fonts 
([Ubuntu font](https://design.ubuntu.com/font/)).

## Contributing

If you spot any bugs, please use
[Issue Tracker](https://github.com/kongdivin/hugo-theme-okayish-blog/issues).
Or if you want to add a new feature directly, please create a new
[Pull Request](https://github.com/kongdivin/hugo-theme-okayish-blog/pulls).

## License

Licensed under
[The MIT License](https://github.com/kongdivin/hugo-theme-okayish-blog/blob/master/LICENSE).
