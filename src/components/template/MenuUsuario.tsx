import { Menu } from "@mantine/core";
import { MenuDropdown } from "@mantine/core/lib/Menu/MenuDropdown/MenuDropdown";
import { MenuItem } from "@mantine/core/lib/Menu/MenuItem/MenuItem";
import { MenuTarget } from "@mantine/core/lib/Menu/MenuTarget/MenuTarget";
import { IconArrowsRightLeft } from "@tabler/icons-react";

export default function MenuUsuario() {
    return(
        <Menu>
            <MenuTarget>
                <button>opaa</button>
            </MenuTarget>
            <MenuDropdown>
                <MenuItem icon={<IconArrowsRightLeft size={14} />}>
                finanças
                </MenuItem>
            </MenuDropdown>
        </Menu>
    )
}