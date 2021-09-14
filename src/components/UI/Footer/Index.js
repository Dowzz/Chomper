import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <p>Dowzzy DO2MA-2021 </p>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid 1px;
`;
