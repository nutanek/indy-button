# Indy Button

Modern-styled button for CSS 

[DEMO](https://nutanek.github.io/indy-button/)

<p align="center">
    <img src="https://user-images.githubusercontent.com/26755833/32036011-31ff0462-ba47-11e7-93ab-6848c3392e63.jpg" alt="indy button demo"/>
</p>

## Installation

You can download **indy-button.css** or **indy-button.min.css** and put it in header

```html
<link rel="stylesheet" href="./css/indy-button.css">
or
<link rel="stylesheet" href="./css/indy-button.min.css">
```

## Usage

Add class="**b-indy**" to <button> or <a> tag and add another styled-class you want

**Example:**
```html
<button type="button" class="b-indy --red --covex --full">Example</button>
```

#### All Properties:
| Properties  | Available Classes |
| ------------- | ------------- |
| color  | --red --orange --yellow --green --blue --purple --black --white  |
| style  | --convex --line  |
| size  | --small --large --default  |
| others  | --disabled --full  |

#### Buton Group
You can also display button group 
```html
<div class="b-indy-group">
  <button class="b-indy --red">Red</button>
  <button class="b-indy --yellow">Yellow</button>
  <button class="b-indy --blue">Blue</button>
</div>
```

## Compilation
You can also compile source file (SASS) to CSS using `gulp` follow steps:
```bash
npm install gulp -g
npm install
npm start
```

## Author

* **NutAnek** - *Owner and Developer at* [indytheme](https://www.indytheme.com)

## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT).
