import { SidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";
import Logo from "../logo2.svg";
import cn from "classnames";
import styles from "./Sidebar.module.css";
import { Search } from "../Search/Search";
import { MenuClient } from "../Menu/MenuClient";

export function Sidebar({className, menu, ...props }: SidebarProps): React.ReactNode {
    
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <Search />
            {menu ? <MenuClient menu={menu} /> : <Menu/>}
        </div>
    )
}