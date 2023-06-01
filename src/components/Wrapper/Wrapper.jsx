import { Div } from './Wrapper.styled';
import PropTypes from 'prop-types';
const Wrapper = ({ children }) => <Div> {children}</Div>;

Wrapper.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Wrapper;