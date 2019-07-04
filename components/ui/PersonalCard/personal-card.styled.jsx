import styled, { css } from "styled-components";

export const CardContent = styled.section`
  width: 100%;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  margin: 10px 0 10px;
  @media (min-width: 1024px) {
    width: 24.25%;
    margin: 10px 1% 10px 0;
  }
`;

export const HeaderCard = styled.div`
  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
    `};
  min-height: 185px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 4px 4px 0 0;

  &:before {
    transform: rotate(12deg);
  }
  &:after {
    transform: rotate(-6deg);
  }
`;

export const NameLabel = styled.span`
  display: block;
  font-size: 28px;
  line-height: 28px;
  margin: 0 0 10px 0;
  color: #171717;
  font-weight: 400;

  @media (min-width: 1024px) {
    font-size: 32px;
    color: #171717;
    line-height: 32px;
  }
`;

export const OcupationLabel = styled.span`
  display: block;
  margin: 0 0 15px 0;
  font-size: 14px;
  color: #6b6b6b;
  line-height: 14px;
  font-weight: 400;
`;

export const FooterCard = styled.div`
  margin-top: -60px;
  text-align: center;
  padding-bottom: 15px;
`;

export const Avatar = styled.img`
  width: 100%;
  height: auto;
  border: 3px solid #fff;
  border-radius: 100%;
  max-width: 150px;
`;

export const SocialNetworks = styled.div``;

const SocialIcon = styled.a`
  cursor: pointer;
  height: 30px;
  width: 30px;
  background-size: cover;
  display: inline-block;
  transition: 1s filter linear
  filter: brightness(0%);
  margin-right: 20px;
  &:hover {
    filter: brightness(50%);
  }
`;
export const IconFacebook = styled(SocialIcon)`
  background-image: url(https://estudiantes2020.sfo2.digitaloceanspaces.com/logo-redes_419x128.png);
`;

export const IconTwitter = styled(SocialIcon)`
  background-image: url(https://estudiantes2020.sfo2.digitaloceanspaces.com/logo-redes_419x128.png);
  background-position-x: -34px;
`;

export const IconInstagram = styled(SocialIcon)`
  background-image: url(https://estudiantes2020.sfo2.digitaloceanspaces.com/logo-redes_419x128.png);
  background-position-x: -68px;
  margin-right: 0px;
`;
