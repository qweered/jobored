import { ReactComponent as Logo } from "../assets/header-logo.svg";
import { List, Navbar } from "@mantine/core";

export const Header = () => {
  return (
    <Navbar height="10em">
      <List listStyleType="none" center>
        <List.Item
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
            margin: "0 auto",
          }}
        >
          <Logo />
          <span>Jobored</span>
        </List.Item>
      </List>
    </Navbar>
  );
};
