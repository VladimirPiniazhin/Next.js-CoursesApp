import { HeaderProps } from "./Header.props";


export async function Header({ ...props }: HeaderProps): Promise<React.ReactNode> {
    return (
        <div {...props}>
            Header
        </div>
    )
}