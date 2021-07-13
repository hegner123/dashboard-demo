import styled from "styled-components";

export const Body = styled.main`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;



export const Dashboard = styled.section`
  display: flex;
  flex-direction: column;
  background: var(--bg-accent);
  width: 100%;
  flex: 15;
`;

export const MenuBar = styled.nav`
  display: flex;
  align-items: center;
  padding: var(--spacing-x);
  width: 100%;
  background: var(--accent1);
  height: 5%;
`;

export const Section = styled.section`
  width: 100%;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
`;

export const CardList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || "var(--card-width)"};
  background: var(--accent3);
  margin: var(--spacing);
`;

export const CardRow = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CardTitle = styled.h3`
  padding: 1px 5px;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};
  width: 100%;
  background: var(--accent2);
  border-bottom: 1px solid #00000057;
`;

export const CardBody = styled.div`
  display: flex;
  padding: 1px 5px;
`;

export const CardBodyText = styled.p`
  font-size: 12px; ;
`;
