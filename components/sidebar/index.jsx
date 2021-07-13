import { Sidebar, Brand, BrandLink, SidebarList, SidebarItem } from "./style";


export default function SidebarP() {
  return (
    <Sidebar>
      <div
        css={
          "height: 5%;color:#fff;display:flex;justify-content:center;align-items:center;width:100%;"
        }
      >
        <Brand css={"font-size:16px;"}>
          <BrandLink href="#">PRS Dash</BrandLink>
        </Brand>
      </div>
      <SidebarList>
        <SidebarItem>Section</SidebarItem>
        <SidebarItem>Section</SidebarItem>
        <SidebarItem>Section</SidebarItem>
        <SidebarItem>Section</SidebarItem>
        <SidebarItem>Section</SidebarItem>
      </SidebarList>
    </Sidebar>
  );
}
