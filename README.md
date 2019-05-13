# Store Icons

[![Build Status](https://travis-ci.org/vtex-apps/store-icons.svg?branch=master)](https://travis-ci.org/vtex-apps/store-icons)

## Description

All Store icons components.

**Disclaimer:** Don't fork this project, use, contribute, or open issue with your feature request.

## Release schedule

| Release |       Status        | Initial Release | Maintenance LTS Start | End-of-life | Store Compatibility |
| :-----: | :-----------------: | :-------------: | :-------------------: | :---------: | :-----------------: |
|  [0.x]  | **Current Release** |   2019-01-30    |      -----------      | ----------  |         2.x         |

## Table of Contents

- [Store Icons](#store-icons)
  - [Description](#description)
  - [Release schedule](#release-schedule)
  - [Table of Contents](#table-of-contents)
  - [Concept](#concept)
  - [Usage](#usage)
    - [Generic Icon](#generic-icon)
  - [Icons](#icons)
    - [Props](#props)
    - [Icons List](#icons-list)
      - [Brand](#brand)
      - [High Priority Actions](#high-priority-actions)
      - [Middle Priority Actions](#middle-priority-actions)
      - [Informational](#informational)
      - [Navigation](#navigation)
      - [Status Indicators](#status-indicators)
  - [Customize](#customize)
  - [Troubleshooting](#troubleshooting)
  - [Contributing](#contributing)
  - [Tests](#tests)

## Concept

This project is based on [SVG fragment identifiers](https://css-tricks.com/svg-fragment-identifiers-work/). All store icons are served by Render SDK, and with HTML tag `<use>` we can render a fragment from our icon pack. If you want to know the complete list of fragment SVG's, [see here](https://github.com/vtex-apps/store-icons/blob/master/ICONPACK.md)

## Usage

To use an icon of this project follows the steps below:

1. Add into the dependencies of your `manifest.json` and use it like an npm module.

   ```json
   "dependencies": {
    "vtex.store-icons": "0.x"
   }
   ```

2. Import and use it into your code, for example:
   ```js
   import { IconMenu } from 'vtex.store-icons'
   
   const YourComponent = props => (   
    <IconMenu />
   )
   ```

You can see [here](#icon-list) a list of every available icon.

### Generic Icon

The API provides a generic icon, The `Icon` component. You can choose from any other icon passing only the `id` from the respective one you want to add.

For example:

```js
import { Icon } from 'vtex.store-icons'

const YourComponent = props => (
  <Icon id="hpa-cart"/>
)
```

## Icons

### Props

Any icon can receive the following props:
| Property | Description | Type | Default value |
| --- | --- | --- | --- |
| size | Desired size | `Number` | 16 | 
| isActive | desc | `Boolean` | true |
| activeClassName | The className it should have if active | `String` | 🚫 |
| mutedClassName | The className it should have if not active | `String` | 🚫 |

Obs: **...props**: It is important to notice that any other `<svg>` prop passed will work with an icon as well.

#### Enhanced Props

Some components support modifiers. These are props that define the icon type, orientation, state or shape.

| Modifier | Possible values |
| --- | --- |
| type | `filled` `line` `outline` |
| orientation | `up` `down` `left` `right` |
| state | `on` `off` |
| shape | `square` `rounded` `circle` |

### Icon List

#### Brand
| Component | id | Type | Orientation | State| Shape |
| --- | --- | --- | --- | --- | --- |
| [IconSocial](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconSocial.js) | `social` | 🚫 | 🚫 | 🚫 | square \| rounded \| circle |

#### High Priority Actions
| Component | id | Type | Orientation | State| Shape |
| --- | --- | --- | --- | --- | --- |
| [IconArrowBack](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconArrowBack.js) | `arrow-back` |  🚫 | 🚫 | 🚫 | 🚫 |
| [IconAssistantSales](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconAssistantSales.js) |`assistant-sales` | 🚫 | 🚫 | 🚫 | 🚫 |
| [IconProfile](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconProfile.js) | `profile` | 🚫 | 🚫 |  🚫 | 🚫 |
| [IconCart](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconCart.js) | `cart` | 🚫 | 🚫 | 🚫 | 🚫 |
| [IconSearch](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconSearch.js)  | `search` | 🚫  | 🚫 | 🚫 | 🚫 |
| [IconDelete](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconDelete.js) | `delete` | 🚫 | 🚫 | 🚫 | 🚫 |
| [IconMenu](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconMenu.js) | `menu` | 🚫 | 🚫 | 🚫 | 🚫 |
| [IconLocationMarker](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconLocationMarker.js) | `location-marker` | 🚫  |  🚫 | 🚫 | 🚫 |

#### Middle Priority Actions
| Component | id | Type | Orientation | State| Shape |
| --- | --- | --- | --- | --- | --- |
| [IconEyesight](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconEyesight.js) | `eyesight` | filled \| outline | 🚫 | on \| off | 🚫 |
| [IconMinus](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconMinus.js) | `minus` | filled \| outline \| line | 🚫 | 🚫 brands
| [IconPlus](https://github.com/vtex-apps/store-icons/blobrandseact/IconPlus.js) | `plus` | filled \| outline \| line | 🚫 | 🚫 | 🚫 |brands
| [IconSingleItem](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconSingleItem.js) | `single-item` | 🚫 | 🚫 | 🚫 | 🚫 |
| [IconList](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconList.js) | `list` | 🚫 | 🚫 | 🚫 | 🚫 |
| [IconGallery](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconGallery.js) | `gallery` | 🚫 | 🚫 | 🚫 | 🚫 |
| [IconRemove](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconRemove.js) | `remove` | 🚫 |     🚫 |  🚫 | 🚫 |
| [IconSwap](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconSwap.js) | `swap` | 🚫 | 🚫 | 🚫 | 🚫 |
| [IconHeart](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconHeart.js) | `heart` | 🚫 | 🚫 | 🚫 | 🚫 |

#### Informational
| Component | id | Type | Orientation | State| Shape |
| --- | --- | --- | --- | --- | --- |

#### Navigation
| Component | id | Type | Orientation | State| Shape |
| --- | --- | --- | --- | --- | --- |
| [IconCaret](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconCaret.js) | `caret` | 🚫 | up \| down \| left \| right | 🚫 | 🚫 | true \| false |

#### Status Indicators
| Component | id | Type | Orientation | State| Shape |
| --- | --- | --- | --- | --- | --- |
| [IconClose](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconClose.js) | `close` | filled \| outline | 🚫 | 🚫 | 🚫 |
| [IconCheck](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconCheck.js) | `check` | filled \| outline \| line | 🚫 | 🚫 | 🚫 |

## Customize

#### Icon Intention
`bnd` **Brand** - Display logos, brands or advertisements.

`hpa` **High priority actions** - Actions that are important to the global context.

`mpa` **Mild priority actions** - Actions that are important only to the current component context.

`inf` **Informational** - Represents information display or actions that, when triggered, reveal further details about the current context. 

`nav` **Navigation** - Actions that triggers navigation.

`sti` **Status indicators** - Indicates the current item/component semantic status.

#### Nomenclature


## Troubleshooting

You can check if others are passing through similar issues [here](https://github.com/vtex-apps/store-icons/issues). Also feel free to [open issues](https://github.com/vtex-apps/store-icons/issues/new) or contribute with pull requests.

## Contributing

Check it out [how to contribute](https://github.com/vtex-apps/awesome-io#contributing) with this project. 

## Tests

To execute our tests go to `react/` folder and run `yarn test`
