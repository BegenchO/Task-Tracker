import PropTypes from 'prop-types'

const Button = ({color, text}) => {
    return <button style={{backgroundColor:color}} className='btn'>{text}</button>
}

Button.defaultProps = {
    color: 'navy'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string
}

export default Button