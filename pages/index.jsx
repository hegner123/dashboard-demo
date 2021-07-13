import styled from "styled-components";
import SidebarP from "../components/sidebar";
import Activity from "../components/activity";
import Stats from "../components/stats";
import Menu from "../public/menu.svg";
import {
  Body,
  Dashboard,
  MenuBar,
  StatsBar,
  StatsList,
  StatsItem,
  Section,
  Row,
  CardList,
  Card,
  CardRow,
  CardTitle,
  CardBody,
  CardBodyText,
} from "./styled";

export default function Home() {
  return (
    <Body>
      <SidebarP />
      <Dashboard>
        <MenuBar>
          <a href="#">
            <Menu css={"width:24px;height:24px;"} />
          </a>
        </MenuBar>
        <Stats />
        <Section>
          <Row>
            <Card width={"100%"}>
              <CardRow>
                <CardTitle>Activity</CardTitle>
              </CardRow>
              <CardRow>
                <Activity />
              </CardRow>
            </Card>
          </Row>
          <Row>
            <CardList>
              <Card>
                <CardRow>
                  <CardTitle>News Letter Signups</CardTitle>
                </CardRow>
                <CardRow>
                  <CardBody>
                    <CardBodyText>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus, repellendus?
                    </CardBodyText>
                  </CardBody>
                </CardRow>
              </Card>
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
