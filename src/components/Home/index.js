import styled from "styled-components";

import GridButton from "./GridButton";

import useSounds from "hooks/useSounds";

export default function Home() {
  const { buttonsList } = useSounds();
  return (
    <Wrapper>
      <Grid>
        {buttonsList.map(({ soundPlay }, index) => {
          return <GridButton key={index} soundPlay={soundPlay}></GridButton>;
        })}
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Grid = styled.div`
  border-radius: 20px;
  display: grid;
  width: 400px;
  height: 400px;
  border: solid 1px;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;
  row-gap: 12px;
  padding: 24px;
  margin: auto;

  @media (max-width: 640px) {
    width: 300px;
    height: 300px;
  }
`;
