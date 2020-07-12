import {css} from "styled-components";


function media(pixels){
    const emSize = pixels / 16;
    return (...args) => css`
      @media (max-width: ${emSize}em){
          ${css(...args)}
      }
    `
}

export default media