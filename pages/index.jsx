import styled from "styled-components";
import SidebarP from "../components/sidebar";
import Activity from "../components/activity";
import Stats from "../components/stats";
import Menu from "../public/menu.svg";
import { Pie } from "../components/pie";
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

const values = [
  { title: "One", value: 10, color: "#FC6868" },
  { title: "Two", value: 15, color: "#3182CE" },
  { title: "Three", value: 20, color: "#FEFCBF" },
];

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
              <Card width={"50%"}>
                <CardRow>
                  <CardTitle>My page</CardTitle>
                </CardRow>
                <CardRow>
                  <CardBody>
                    <Pie values={values} radius={"40"} />
                    <div css={"width:100%;"}>
                      <ul
                        css={
                          "display:flex;flex-direction:column;justify-content:center;height:100%;align-items:center;"
                        }
                      >
                        {values.map((value) => (
                          <li key={value.title}>
                            <div
                              css={
                                "background:" + value.color + "; padding:0 1px;"
                              }
                            >
                              {value.title}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardBody>
                </CardRow>
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
