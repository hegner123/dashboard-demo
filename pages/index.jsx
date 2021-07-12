import styled from "styled-components";
import Activity from "../components/activity";
import Social from "../components/social";

const Body = styled.main`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

const Sidebar = styled.aside`
  display: flex;
  flex: 1;
  width: 100%;
  background: ${({ theme }) => theme.colors.dark};
`;

const Dashboard = styled.section`
  display: flex;
  flex-direction: column;
  background: var(--bg-accent);
  width: 100%;
  flex: 15;
`;

const MenuBar = styled.nav`
  display: flex;
  width: 100%;
  background: var(--accent1);
  height: 5%;
`;

const StatsBar = styled.div`
  display: flex;
  width: 100%;
  background: var(--accent2);
  height: 10%;
`;

const StatsList = styled.ul`
width:100%;
  list-style: none;
  display:flex;
`;

const StatsItem = styled.li`
width:100%;
`

const Section = styled.section`
  width: 100%;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
`;

const CardList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${(props) => props.width || "var(--card-width)"};
  background: var(--accent3);
  padding: var(--spacing);
  margin: var(--spacing);
`;

const CardTitle = styled.h3`
  padding: var(--spacing-x);
  font-size: 20px;
  color: ${({ theme }) => theme.colors.dark};
`;

const CardBody = styled.div`
  display: flex;
  padding: var(--spacing-x);
`;

const CardBodyText = styled.p`
  font-size: var(--font-size);
`;

export default function Home() {
  return (
    <Body>
      <Sidebar>
        <div css={"color:#fff;"}>section</div>
      </Sidebar>
      <Dashboard>
        <MenuBar></MenuBar>
        <StatsBar>
          <StatsList>
            <StatsItem>
              <Social />
            </StatsItem>
            <StatsItem>
              <Social />
            </StatsItem>
            <StatsItem>
              <Social />
            </StatsItem>
            <StatsItem>
              <Social />
            </StatsItem>
          </StatsList>
        </StatsBar>
        <Section>
          <Row>
            <Card width={"100%"}>
              <CardTitle>Activity</CardTitle>
              <Activity />
            </Card>
          </Row>
          <Row>
            <CardList>
              <Card>
                <CardTitle>My page</CardTitle>
              </Card>
              <Card>
                <CardTitle>My page</CardTitle>
              </Card>
              <Card>
                <CardTitle>My page</CardTitle>
              </Card>
            </CardList>
          </Row>
        </Section>
      </Dashboard>
    </Body>
  );
}
