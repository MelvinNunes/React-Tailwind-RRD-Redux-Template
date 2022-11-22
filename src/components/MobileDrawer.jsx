import { useState } from "react";
import { Drawer, Button, Group } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons";
import { NavLink } from "react-router-dom";
import { navbar_links } from "../data/links";

export default function MobileDrawer() {
  const [opened, setOpened] = useState(false);
  const activeLink = "text-enviro border border-enviro py-3 px-8";
  const standardLink = "hover:text-enviro";

  const closeDrawer = () => {
    setOpened(false);
  };

  return (
    <>
      <Drawer opened={opened} onClose={closeDrawer} padding="xl" size="lg">
        <aside className="flex ml-5 text-xl font-medium">
          <ul className="flex flex-col gap-6">
            {navbar_links.map((link) => (
              <NavLink to={link.path}>
                {({ isActive }) => (
                  <span className={isActive ? activeLink : standardLink}>
                    {link.name}
                  </span>
                )}
              </NavLink>
            ))}
          </ul>
        </aside>
      </Drawer>

      <Group position="center">
        <div onClick={() => setOpened(true)}>
          <IconMenu2 color="black" size={30} className="cursor-pointer" />
        </div>
      </Group>
    </>
  );
}
