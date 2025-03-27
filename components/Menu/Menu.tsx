import { MenuClient } from "./MenuClient";
import { getMenu } from "@/api/menu";
export const Menu = async (): Promise<React.ReactNode> => {
    const menu = await getMenu(0);
    
    return <MenuClient menu={menu} />;
}