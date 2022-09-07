import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
`;
const Pane = styled.div`
  flex: ${({ weight }) => weight};
`;
const SplitScreen = ({
  children,
  direction,
  leftWeight = 1,
  rightWeight = 1,
}) => {
  const [left, right] = children;
  return (
    <Container direction={direction}>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};

export default SplitScreen;
