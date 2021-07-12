import styled from "styled-components";

const SocialBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
`;

const SocialTitle = styled.h4`
  margin: 0;
  padding: 0;
`;

const SocialP = styled.p`
  margin: 0;
  padding: 0;
`;

const SocialStat = styled.p`
  margin: 0;
  padding: 0;
`;

const SocialPercent = styled.span`
  font-weight: bolder;
  font-size: 25px;
  color: ${(props) => props.color || "#000"};
`;

export default function Social(props) {
  return (
    <SocialBody>
      <SocialTitle>Test</SocialTitle>
      <SocialP>
        <b>Network</b> <SocialPercent>25%</SocialPercent>
      </SocialP>
      <SocialStat>up from</SocialStat>
    </SocialBody>
  );
}
