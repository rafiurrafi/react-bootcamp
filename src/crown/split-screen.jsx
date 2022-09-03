import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;
const Pane = styled.div`
  flex: ${({ weight }) => weight};
`;
const SplitScreen = ({ children, leftWeight = 3, rightWeight = 1 }) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};

export default SplitScreen;
