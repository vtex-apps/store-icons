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
| ![](/bnd-logo.svg)  | bnd-logo | 
| ![](/hpa-arrow-from-bottom.svg)  | hpa-arrow-from-bottom | 
| ![](/hpa-arrow-to-bottom.svg)  | hpa-arrow-to-bottom | 
| ![](/hpa-arrow-back.svg)  | hpa-arrow-back | 
| ![](/hpa-calendar.svg)  | hpa-calendar | 
| ![](/hpa-cart.svg)  | hpa-cart | 
| ![](/hpa-delete.svg)  | hpa-delete | 
| ![](/hpa-play.svg)  | hpa-play | 
| ![](/hpa-profile.svg)  | hpa-profile | 
| ![](/hpa-save.svg)  | hpa-save | 
| ![](/hpa-search.svg)  | hpa-search | 
| ![](/hpa-hamburguer-menu.svg)  | hpa-hamburguer-menu | 
| ![](/hpa-location-marker.svg)  | hpa-location-marker | 
| ![](/hpa-telemarketing.svg)  | hpa-telemarketing | 
| ![](/mpa-globe.svg)  | mpa-globe | 
| ![](/mpa-filter-settings.svg)  | mpa-filter-settings | 
| ![](/mpa-single-item.svg)  | mpa-single-item | 
| ![](/mpa-gallery.svg)  | mpa-gallery | 
| ![](/mpa-list-items.svg)  | mpa-list-items | 
| ![](/mpa-heart.svg)  | mpa-heart | 
| ![](/mpa-clone--outline.svg)  | mpa-clone--outline | 
| ![](/mpa-clone--filled.svg)  | mpa-clone--filled | 
| ![](/mpa-edit--outline.svg)  | mpa-edit--outline | 
| ![](/mpa-bookmark--filled.svg)  | mpa-bookmark--filled | 
| ![](/mpa-bookmark--outline.svg)  | mpa-bookmark--outline | 
| ![](/mpa-edit--filled.svg)  | mpa-edit--filled | 
| ![](/mpa-external-link--line.svg)  | mpa-external-link--line | 
| ![](/mpa-external-link--outline.svg)  | mpa-external-link--outline | 
| ![](/mpa-eyesight--outline--off.svg)  | mpa-eyesight--outline--off | 
| ![](/mpa-eyesight--filled--off.svg)  | mpa-eyesight--filled--off | 
| ![](/mpa-eyesight--outline--on.svg)  | mpa-eyesight--outline--on | 
| ![](/mpa-eyesight--filled--on.svg)  | mpa-eyesight--filled--on | 
| ![](/mpa-filter--outline.svg)  | mpa-filter--outline | 
| ![](/mpa-filter--filled.svg)  | mpa-filter--filled | 
| ![](/mpa-minus--line.svg)  | mpa-minus--line | 
| ![](/mpa-minus--outline.svg)  | mpa-minus--outline | 
| ![](/mpa-minus--filled.svg)  | mpa-minus--filled | 
| ![](/mpa-plus--line.svg)  | mpa-plus--line | 
| ![](/mpa-plus--outline.svg)  | mpa-plus--outline | 
| ![](/mpa-plus--filled.svg)  | mpa-plus--filled | 
| ![](/mpa-remove.svg)  | mpa-remove | 
| ![](/mpa-swap.svg)  | mpa-swap | 
| ![](/mpa-arrows.svg)  | mpa-arrows | 
| ![](/mpa-bag.svg)  | mpa-bag | 
| ![](/mpa-bars.svg)  | mpa-bars | 
| ![](/mpa-cog.svg)  | mpa-cog | 
| ![](/mpa-columns.svg)  | mpa-columns | 
| ![](/mpa-credit-card.svg)  | mpa-credit-card | 
| ![](/mpa-elypsis.svg)  | mpa-elypsis | 
| ![](/mpa-exchange.svg)  | mpa-exchange | 
| ![](/mpa-export.svg)  | mpa-export | 
| ![](/mpa-link.svg)  | mpa-link | 
| ![](/mpa-settings.svg)  | mpa-settings | 
| ![](/mpa-store.svg)  | mpa-store | 
| ![](/mpa-angle--down.svg)  | mpa-angle--down | 
| ![](/mpa-angle--up.svg)  | mpa-angle--up | 
| ![](/mpa-location-input.svg)  | mpa-location-input | 
| ![](/inf-star.svg)  | inf-star | 
| ![](/inf-help--outline.svg)  | inf-help--outline | 
| ![](/inf-help--filled.svg)  | inf-help--filled | 
| ![](/inf-tooltip--outline.svg)  | inf-tooltip--outline | 
| ![](/inf-tooltip--filled.svg)  | inf-tooltip--filled | 
| ![](/inf-warning--outline.svg)  | inf-warning--outline | 
| ![](/inf-warning--filled.svg)  | inf-warning--filled | 
| ![](/nav-caret--down.svg)  | nav-caret--down | 
| ![](/nav-caret--left.svg)  | nav-caret--left | 
| ![](/nav-caret--right.svg)  | nav-caret--right | 
| ![](/nav-caret--up.svg)  | nav-caret--up | 
| ![](/nav-thin-caret--left.svg)  | nav-thin-caret--left | 
| ![](/nav-thin-caret--right.svg)  | nav-thin-caret--right | 
| ![](/nav-arrow--left.svg)  | nav-arrow--left | 
| ![](/nav-arrow--right.svg)  | nav-arrow--right | 
| ![](/nav-home.svg)  | nav-home | 
| ![](/nav-plus.svg)  | nav-plus | 
| ![](/nav-minus.svg)  | nav-minus | 
| ![](/sti-loading.svg)  | sti-loading | 
| ![](/sti-check--line.svg)  | sti-check--line | 
| ![](/sti-check--outline.svg)  | sti-check--outline | 
| ![](/sti-check--filled.svg)  | sti-check--filled | 
| ![](/sti-close--line.svg)  | sti-close--line | 
| ![](/sti-close--outline.svg)  | sti-close--outline | 
| ![](/sti-close--filled.svg)  | sti-close--filled | 
| ![](/sti-clock.svg)  | sti-clock | 
| ![](/sti-equals.svg)  | sti-equals | 
| ![](/sti-discount.svg)  | sti-discount | 
