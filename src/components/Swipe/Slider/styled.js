import styled from 'styled-components';
import { imageHeight } from '../constants';

import { buttonMixin } from '../../base/Mixins';

export const Wrapper = styled.div`
  position: relative;
  height: ${(props) => props.height || '355px'};
  width: 100%;
  border-radius: ${(props) => props.border || '8px'};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.regular};
`;

export const ImageSlider = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(${({ total }) => total}, 1fr);
  width: ${({ total }) => total * 100}%;
  top: 0;
  left: ${({ current }) => (current - 1) * -100}%;
  transition: 0.4s;
  & img {
    display: block;
    height: ${` (props) => props.height || ${imageHeight}px  `};
    width: 100%;
    object-fit: cover;
    background: ${({ theme }) => theme.colors.whiteOpacity};
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 0.9;
    }
  }
`;

export const Control = styled.button`
  ${buttonMixin};
  position: absolute;
  top: 0;
  ${({ position }) => position}: 0;
  margin: 0 10px;
  margin-top: ${imageHeight / 2}px;
  height: 30px;
  display: flex;
  align-items: center;
  transition: 0.3s;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  filter: drop-shadow(1px 1px 1px #666);
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
