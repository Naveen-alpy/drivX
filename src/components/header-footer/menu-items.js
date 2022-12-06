import { ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./dropdown";

const MenuItems = ({ ddMenuStrcut }) => {
  return (
    <ListItem>
      {ddMenuStrcut.submenu ? (
        <>
          <Link role="button" aria-haspopup="menu">
            {ddMenuStrcut.title}{" "}
          </Link>
          <DropDown submenus={ddMenuStrcut.title} />
        </>
      ) : (
        <Link to={ddMenuStrcut.url}>{ddMenuStrcut.title}</Link>
      )}
    </ListItem>
  );
};

export default MenuItems;
