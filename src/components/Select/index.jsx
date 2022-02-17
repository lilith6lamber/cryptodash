import Select from "react-select";
import styled from "styled-components";

export const StyledSelect = styled(Select)`
  .Select__control {
    height: 40px;
    border: none;
    cursor: pointer;
    transition: .3s ease-in-out;
    background-color: rgba(26, 17, 29, 0.7);
    border-radius: 10px;
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 700;
  }
  .Select__control:hover {
    border-color: #fff;
  }
  .Select__control--is-focused {
    box-shadow: none;
    outline: none;
    border-color: #fff;
  }
  .Select__indicator {
    color: #c70f61;
  }
  .Select__indicator-separator {
    display: none;
  }
  .Select__menu {
    color: #3c3d3e;
  }
  
  .Select__input-container, .Select__input-container::placeholder {
    color: #fff;
  }
`;