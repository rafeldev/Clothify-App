import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteOpacity};
  box-shadow: ${({ theme }) => theme.shadows.regular};
  margin-bottom: 15px;
  height: 90px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Tag = styled.span`
  font-size: 14px;
  line-height: 17px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.greyLigther};
`;

export const InfoText = styled.span`
  display: block;
  font-size: 12px;
  text-align: justify;
  color: ${(props) => props.theme.colors.greyLigther};
  line-height: 1.1em;
`;

export const DescriptionContainer = styled.div`
    margin-left: 10px;
`;