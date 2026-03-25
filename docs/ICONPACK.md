# Icon Pack list

Check out the available icons for your store in the [Store Icon](https://developers.vtex.com/docs/apps/vtex.store-icons) guide.

## Usage

Add the `vtex.store-icons` to your dependencies in `manifest.json`. 

This is an example that shows you how to use it: 

```javascript
  import React from 'react'

  import Icon from 'vtex.store-icons'

  const IconSearch = ({ ...props }) => {
    return <Icon id="hpa-search" {...props} />
  }

  IconSearch.propTypes =  {
    /** Icon size, aspect ratio 1:1 */
    size: PropTypes.number,
    /** Icon viewBox. Default 0, 0, 16, 16 */
    viewBox: PropTypes.string,
    /** Define if will be used a active or muted className */
    isActive: PropTypes.bool,
    /** Active color class */
    activeClassName: PropTypes.string,
    /** Muted color class */
    mutedClassName: PropTypes.string,
  }
  export default IconSearch

 ```


 
## SVG Prefixes 

The following prefixes help to understand what a specific icon means. 

| Prefix | Meaning |
| ------ | ------- |
|  bnd   | Brand                  |
|  hpa   | High Priority Actions  |
|  mpa   | Midle Priority Actions |
|  sti   | Status Indicator       |
|  inf   | Informative            |
|   nav  | Navigation             |

  
### SVG Fragments

| Icon                                    | ID                         |
| --------------------------------------- | -------------------------- |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/bnd-logo.svg" alt="bnd-logo" width="24" height="24" /> | bnd-logo |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-expand.svg" alt="mpa-expand" width="24" height="24" /> | mpa-expand |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/hpa-arrow-back.svg" alt="hpa-arrow-back" width="24" height="24" /> | hpa-arrow-back |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/hpa-arrow-from-bottom.svg" alt="hpa-arrow-from-bottom" width="24" height="24" /> | hpa-arrow-from-bottom |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/hpa-arrow-to-bottom.svg" alt="hpa-arrow-to-bottom" width="24" height="24" /> | hpa-arrow-to-bottom |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/hpa-calendar.svg" alt="hpa-calendar" width="24" height="24" /> | hpa-calendar |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/hpa-cart.svg" alt="hpa-cart" width="24" height="24" /> | hpa-cart |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/hpa-delete.svg" alt="hpa-delete" width="24" height="24" /> | hpa-delete |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/hpa-hamburguer-menu.svg" alt="hpa-hamburguer-menu" width="24" height="24" /> | hpa-hamburguer-menu |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/hpa-location-marker.svg" alt="hpa-location-marker" width="24" height="24" /> | hpa-location-marker |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/hpa-play.svg" alt="hpa-play" width="24" height="24" /> | hpa-play |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/hpa-profile.svg" alt="hpa-profile" width="24" height="24" /> | hpa-profile |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/hpa-save.svg" alt="hpa-save" width="24" height="24" /> | hpa-save |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/hpa-search.svg" alt="hpa-search" width="24" height="24" /> | hpa-search |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/hpa-telemarketing.svg" alt="hpa-telemarketing" width="24" height="24" /> | hpa-telemarketing |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/inf-help--filled.svg" alt="inf-help--filled" width="24" height="24" /> | inf-help--filled |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/inf-help--outline.svg" alt="inf-help--outline" width="24" height="24" /> | inf-help--outline |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/inf-star.svg" alt="inf-star" width="24" height="24" /> | inf-star |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/inf-tooltip--filled.svg" alt="inf-tooltip--filled" width="24" height="24" /> | inf-tooltip--filled |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/inf-tooltip--outline.svg" alt="inf-tooltip--outline" width="24" height="24" /> | inf-tooltip--outline |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/inf-warning--filled.svg" alt="inf-warning--filled" width="24" height="24" /> | inf-warning--filled |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/inf-warning--outline.svg" alt="inf-warning--outline" width="24" height="24" /> | inf-warning--outline |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-angle--down.svg" alt="mpa-angle--down" width="24" height="24" /> | mpa-angle--down |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-angle--up.svg" alt="mpa-angle--up" width="24" height="24" /> | mpa-angle--up |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-arrows.svg" alt="mpa-arrows" width="24" height="24" /> | mpa-arrows |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-bag.svg" alt="mpa-bag" width="24" height="24" /> | mpa-bag |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-bars.svg" alt="mpa-bars" width="24" height="24" /> | mpa-bars |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-bookmark--filled.svg" alt="mpa-bookmark--filled" width="24" height="24" /> | mpa-bookmark--filled |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-bookmark--outline.svg" alt="mpa-bookmark--outline" width="24" height="24" /> | mpa-bookmark--outline |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-clone--filled.svg" alt="mpa-clone--filled" width="24" height="24" /> | mpa-clone--filled |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-clone--outline.svg" alt="mpa-clone--outline" width="24" height="24" /> | mpa-clone--outline |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-cog.svg" alt="mpa-cog" width="24" height="24" /> | mpa-cog |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-columns.svg" alt="mpa-columns" width="24" height="24" /> | mpa-columns |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-credit-card.svg" alt="mpa-credit-card" width="24" height="24" /> | mpa-credit-card |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-edit--filled.svg" alt="mpa-edit--filled" width="24" height="24" /> | mpa-edit--filled |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-edit--outline.svg" alt="mpa-edit--outline" width="24" height="24" /> | mpa-edit--outline |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-elypsis.svg" alt="mpa-elypsis" width="24" height="24" /> | mpa-elypsis |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-exchange.svg" alt="mpa-exchange" width="24" height="24" /> | mpa-exchange |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-export.svg" alt="mpa-export" width="24" height="24" /> | mpa-export |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-external-link--line.svg" alt="mpa-external-link--line" width="24" height="24" /> | mpa-external-link--line |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-external-link--outline.svg" alt="mpa-external-link--outline" width="24" height="24" /> | mpa-external-link--outline |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-eyesight--filled--off.svg" alt="mpa-eyesight--filled--off" width="24" height="24" /> | mpa-eyesight--filled--off |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-eyesight--filled--on.svg" alt="mpa-eyesight--filled--on" width="24" height="24" /> | mpa-eyesight--filled--on |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-eyesight--outline--off.svg" alt="mpa-eyesight--outline--off" width="24" height="24" /> | mpa-eyesight--outline--off |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-eyesight--outline--on.svg" alt="mpa-eyesight--outline--on" width="24" height="24" /> | mpa-eyesight--outline--on |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-filter--filled.svg" alt="mpa-filter--filled" width="24" height="24" /> | mpa-filter--filled |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-filter--outline.svg" alt="mpa-filter--outline" width="24" height="24" /> | mpa-filter--outline |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-filter-settings.svg" alt="mpa-filter-settings" width="24" height="24" /> | mpa-filter-settings |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-gallery.svg" alt="mpa-gallery" width="24" height="24" /> | mpa-gallery |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-globe.svg" alt="mpa-globe" width="24" height="24" /> | mpa-globe |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-heart.svg" alt="mpa-heart" width="24" height="24" /> | mpa-heart |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-link.svg" alt="mpa-link" width="24" height="24" /> | mpa-link |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-list-items.svg" alt="mpa-list-items" width="24" height="24" /> | mpa-list-items |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-location-input.svg" alt="mpa-location-input" width="24" height="24" /> | mpa-location-input |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-minus--filled.svg" alt="mpa-minus--filled" width="24" height="24" /> | mpa-minus--filled |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-minus--line.svg" alt="mpa-minus--line" width="24" height="24" /> | mpa-minus--line |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-minus--outline.svg" alt="mpa-minus--outline" width="24" height="24" /> | mpa-minus--outline |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-plus--filled.svg" alt="mpa-plus--filled" width="24" height="24" /> | mpa-plus--filled |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-plus--line.svg" alt="mpa-plus--line" width="24" height="24" /> | mpa-plus--line |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-plus--outline.svg" alt="mpa-plus--outline" width="24" height="24" /> | mpa-plus--outline |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-remove.svg" alt="mpa-remove" width="24" height="24" /> | mpa-remove |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-settings.svg" alt="mpa-settings" width="24" height="24" /> | mpa-settings |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-single-item.svg" alt="mpa-single-item" width="24" height="24" /> | mpa-single-item |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-store.svg" alt="mpa-store" width="24" height="24" /> | mpa-store |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/mpa-swap.svg" alt="mpa-swap" width="24" height="24" /> | mpa-swap |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/nav-arrow--left.svg" alt="nav-arrow--left" width="24" height="24" /> | nav-arrow--left |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/nav-arrow--right.svg" alt="nav-arrow--right" width="24" height="24" /> | nav-arrow--right |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/nav-caret--down.svg" alt="nav-caret--down" width="24" height="24" /> | nav-caret--down |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/nav-caret--left.svg" alt="nav-caret--left" width="24" height="24" /> | nav-caret--left |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/nav-caret--right.svg" alt="nav-caret--right" width="24" height="24" /> | nav-caret--right |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/nav-caret--up.svg" alt="nav-caret--up" width="24" height="24" /> | nav-caret--up |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/nav-home.svg" alt="nav-home" width="24" height="24" /> | nav-home |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/nav-minus.svg" alt="nav-minus" width="24" height="24" /> | nav-minus |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/nav-plus.svg" alt="nav-plus" width="24" height="24" /> | nav-plus |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/nav-thin-caret--left.svg" alt="nav-thin-caret--left" width="24" height="24" /> | nav-thin-caret--left |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/nav-thin-caret--right.svg" alt="nav-thin-caret--right" width="24" height="24" /> | nav-thin-caret--right |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/sti-check--filled.svg" alt="sti-check--filled" width="24" height="24" /> | sti-check--filled |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/sti-check--line.svg" alt="sti-check--line" width="24" height="24" /> | sti-check--line |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/sti-check--outline.svg" alt="sti-check--outline" width="24" height="24" /> | sti-check--outline |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/sti-clock.svg" alt="sti-clock" width="24" height="24" /> | sti-clock |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/sti-close--filled.svg" alt="sti-close--filled" width="24" height="24" /> | sti-close--filled |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/sti-close--line.svg" alt="sti-close--line" width="24" height="24" /> | sti-close--line |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/sti-close--outline.svg" alt="sti-close--outline" width="24" height="24" /> | sti-close--outline |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/sti-discount.svg" alt="sti-discount" width="24" height="24" /> | sti-discount |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/sti-equals.svg" alt="sti-equals" width="24" height="24" /> | sti-equals |
| <img src="https://raw.githubusercontent.com/vtex-apps/store-icons/242bd829fb6ba7e0ba417a8feef4b67ce62cbe82/docs/sti-loading.svg" alt="sti-loading" width="24" height="24" /> | sti-loading |
