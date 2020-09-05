# Introduction

## Code block

<br>

```md
Use `console.log`
```

Use `console.log`

---

## Code block with highlight

<br>

<pre>
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
</pre>

<br>

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Code block with figure (fig), headerCode e figcaption (figcap)

<br>

```
:::: fig code
::: headerCode
index.html
:::
<small>
  <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">
    Creative Commons Attribution Share-alike license
  </a>
</small>
::: figcap
Using Using &lt;small&gt; around a [Creative Commons license](http://creativecommons.org/choose/) link with `rel="license"`
:::
::::
```

<br />

:::: fig code
::: headerCode
index.html
:::
```html
<small>
  <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">
    Creative Commons Attribution Share-alike license
  </a>
</small>
```
::: figcap
Using Using &lt;small&gt; around a [Creative Commons license](http://creativecommons.org/choose/) link with `rel="license"`
:::
::::

## Link

<br>

```md
[Internal Link](/guide)
```
[Internal Link](/guide)

---

## Figure and blockquote

<br />

```markdown
:::: fig
::: bq
VuePress is composed of two parts: a minimalistic static site generator with a Vue-powered theming system and Plugin API, and a default theme optimized for writing technical documentation.
:::
::: figcap
[W3C, HTML draft documentation 2020](https://google.com)
:::
::::
```

<br />

:::: fig bq
::: bq
VuePress is composed of two parts: a minimalistic static site generator with a Vue-powered theming system and Plugin API, and a default theme optimized for writing technical documentation.
:::
::: figcap
[W3C, HTML draft documentation 2020](https://google.com)
:::
::::

---

## Notes

<br>

```md
::: alert tip
This is a tip
:::
```

<br>

::: alert tip
This is a tip
:::

<br>

```md
::: alert warning
This is a warning
:::
```

<br>

::: alert warning
This is a warning
:::

<br>

```md
::: alert danger
This is a dangerous warning
:::
```

<br>

::: alert danger
This is a dangerous warning
:::

<br>

---

## Table

<br>

```md
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

<br>

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

<br>

---

## Emojis

<br>

```md
:tada: :100:
```

:tada: :100:

---

## External link

<br>

```md
[External Link](https://google.com)
```

[External Link](https://google.com)
