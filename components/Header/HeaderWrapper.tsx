import { HeaderProps } from "./Header.props";
import { Header } from "./Header";
import { getMenu } from "@/api/menu";

export async function HeaderWrapper(): Promise<React.ReactNode>{
    const menu = await getMenu(0);
    return   <Header menu={menu} />

}