import PropTypes from 'prop-types'

export const proptypes = {
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