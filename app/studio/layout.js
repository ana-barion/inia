import PropTypes from "prop-types";

export default function StudioLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

StudioLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
