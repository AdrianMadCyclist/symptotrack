import styled from '@xstyled/styled-components';
import { px2rem } from '../../utils';

const SFooter = styled.footer`
  position: relative;
  background-color: black;
  color: lightGreen;

  &:after {
    content: '';
    position: absolute;
    top: ${px2rem(-30)};
    right: ${px2rem(-30)};
    width: ${px2rem(90)};
    height: ${px2rem(90)};
    background: url('/static/icons/circle-orange.svg');
    animation: float 3s ease-in-out infinite;
    animation-delay: 0.5s;
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(3px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const SFooterMenu = styled.ul`
  margin: ${px2rem(0, -10)};
  padding: 0;
  list-style: none;

  li {
    display: inline-block;
    margin: ${px2rem(5, 10)};
  }
`;

export default SFooter;
