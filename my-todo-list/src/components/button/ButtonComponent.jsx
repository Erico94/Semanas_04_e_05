import React from "react";
import PropTypes from "prop-types";

const ButtonComponent = (onClick, disabled, loading, children) => {
  return <button onClick={onClick} disabled={disabled}>
        {loading ? 'Carregando' : children}
    </button>;
};

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default ButtonComponent;
