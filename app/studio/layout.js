import PropTypes from "prop-types";

export default function StudioLayout({ children }) {
  return <>{children}</>;
}

StudioLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
