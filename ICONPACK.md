 ## Icon Pack list

  Here we describe all our SVG fragment identifiers. 
  
 :loudspeaker: **Disclaimer:** The `svg/` folder is just to render the icons in this MD.


### How to use this fragments? 

First of all, you should add the `vtex.store-icons` to your dependencies in `manifest.json`. 

This an example that show you how to use it. 

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


 
### SVG Prefixes 

We use a series of prefixes to help us understand what an specific icon means. 

* bnd - Brand;
* hpa - High Priority Actions;
* mpa - Midle Priority Actions;
* sti - Status Indicator;
* inf - Informative;
* nav - Navigation
  

### SVG Fragments

| Icon                                    | ID                         |
| --------------------------------------- | -------------------------- |
| ![](docs/bnd-logo.svg)  | bnd-logo | 
| ![](docs/hpa-arrow-from-bottom.svg)  | hpa-arrow-from-bottom | 
| ![](docs/hpa-arrow-to-bottom.svg)  | hpa-arrow-to-bottom | 
| ![](docs/hpa-arrow-back.svg)  | hpa-arrow-back | 
| ![](docs/hpa-calendar.svg)  | hpa-calendar | 
| ![](docs/hpa-cart.svg)  | hpa-cart | 
| ![](docs/hpa-delete.svg)  | hpa-delete | 
| ![](docs/hpa-play.svg)  | hpa-play | 
| ![](docs/hpa-profile.svg)  | hpa-profile | 
| ![](docs/hpa-save.svg)  | hpa-save | 
| ![](docs/hpa-search.svg)  | hpa-search | 
| ![](docs/hpa-hamburguer-menu.svg)  | hpa-hamburguer-menu | 
| ![](docs/hpa-location-marker.svg)  | hpa-location-marker | 
| ![](docs/hpa-telemarketing.svg)  | hpa-telemarketing | 
| ![](docs/mpa-globe.svg)  | mpa-globe | 
| ![](docs/mpa-filter-settings.svg)  | mpa-filter-settings | 
| ![](docs/mpa-single-item.svg)  | mpa-single-item | 
| ![](docs/mpa-gallery.svg)  | mpa-gallery | 
| ![](docs/mpa-list-items.svg)  | mpa-list-items | 
| ![](docs/mpa-heart.svg)  | mpa-heart | 
| ![](docs/mpa-clone--outline.svg)  | mpa-clone--outline | 
| ![](docs/mpa-clone--filled.svg)  | mpa-clone--filled | 
| ![](docs/mpa-edit--outline.svg)  | mpa-edit--outline | 
| ![](docs/mpa-edit--filled.svg)  | mpa-edit--filled | 
| ![](docs/mpa-external-link--line.svg)  | mpa-external-link--line | 
| ![](docs/mpa-external-link--outline.svg)  | mpa-external-link--outline | 
| ![](docs/mpa-eyesight--outline--off.svg)  | mpa-eyesight--outline--off | 
| ![](docs/mpa-eyesight--filled--off.svg)  | mpa-eyesight--filled--off | 
| ![](docs/mpa-eyesight--outline--on.svg)  | mpa-eyesight--outline--on | 
| ![](docs/mpa-eyesight--filled--on.svg)  | mpa-eyesight--filled--on | 
| ![](docs/mpa-filter--outline.svg)  | mpa-filter--outline | 
| ![](docs/mpa-filter--filled.svg)  | mpa-filter--filled | 
| ![](docs/mpa-minus--line.svg)  | mpa-minus--line | 
| ![](docs/mpa-minus--outline.svg)  | mpa-minus--outline | 
| ![](docs/mpa-minus--filled.svg)  | mpa-minus--filled | 
| ![](docs/mpa-plus--line.svg)  | mpa-plus--line | 
| ![](docs/mpa-plus--outline.svg)  | mpa-plus--outline | 
| ![](docs/mpa-plus--filled.svg)  | mpa-plus--filled | 
| ![](docs/mpa-remove.svg)  | mpa-remove | 
| ![](docs/mpa-swap.svg)  | mpa-swap | 
| ![](docs/mpa-arrows.svg)  | mpa-arrows | 
| ![](docs/mpa-bag.svg)  | mpa-bag | 
| ![](docs/mpa-bars.svg)  | mpa-bars | 
| ![](docs/mpa-cog.svg)  | mpa-cog | 
| ![](docs/mpa-columns.svg)  | mpa-columns | 
| ![](docs/mpa-credit-card.svg)  | mpa-credit-card | 
| ![](docs/mpa-elypsis.svg)  | mpa-elypsis | 
| ![](docs/mpa-exchange.svg)  | mpa-exchange | 
| ![](docs/mpa-export.svg)  | mpa-export | 
| ![](docs/mpa-link.svg)  | mpa-link | 
| ![](docs/mpa-settings.svg)  | mpa-settings | 
| ![](docs/mpa-store.svg)  | mpa-store | 
| ![](docs/mpa-angle--down.svg)  | mpa-angle--down | 
| ![](docs/mpa-angle--up.svg)  | mpa-angle--up | 
| ![](docs/inf-star.svg)  | inf-star | 
| ![](docs/inf-help--outline.svg)  | inf-help--outline | 
| ![](docs/inf-help--filled.svg)  | inf-help--filled | 
| ![](docs/inf-tooltip--outline.svg)  | inf-tooltip--outline | 
| ![](docs/inf-tooltip--filled.svg)  | inf-tooltip--filled | 
| ![](docs/inf-warning--outline.svg)  | inf-warning--outline | 
| ![](docs/inf-warning--filled.svg)  | inf-warning--filled | 
| ![](docs/nav-caret--down.svg)  | nav-caret--down | 
| ![](docs/nav-caret--left.svg)  | nav-caret--left | 
| ![](docs/nav-caret--right.svg)  | nav-caret--right | 
| ![](docs/nav-caret--up.svg)  | nav-caret--up | 
| ![](docs/nav-thin-caret--left.svg)  | nav-thin-caret--left | 
| ![](docs/nav-thin-caret--right.svg)  | nav-thin-caret--right | 
| ![](docs/nav-arrow--left.svg)  | nav-arrow--left | 
| ![](docs/nav-arrow--right.svg)  | nav-arrow--right | 
| ![](docs/nav-home.svg)  | nav-home | 
| ![](docs/nav-plus.svg)  | nav-plus | 
| ![](docs/nav-minus.svg)  | nav-minus | 
| ![](docs/sti-loading.svg)  | sti-loading | 
| ![](docs/sti-check--line.svg)  | sti-check--line | 
| ![](docs/sti-check--outline.svg)  | sti-check--outline | 
| ![](docs/sti-check--filled.svg)  | sti-check--filled | 
| ![](docs/sti-close--line.svg)  | sti-close--line | 
| ![](docs/sti-close--outline.svg)  | sti-close--outline | 
| ![](docs/sti-close--filled.svg)  | sti-close--filled | 
| ![](docs/sti-clock.svg)  | sti-clock | 
| ![](docs/sti-equals.svg)  | sti-equals | 
| ![](docs/sti-discount.svg)  | sti-discount | 
