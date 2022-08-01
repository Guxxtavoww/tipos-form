import { SidebarBox } from "./styles";

interface Props {
    sidebarItems: {
        id: number;
        titulo: string;   
    }[];
    title: string;
}

const Sidebar = ({ sidebarItems, title }: Props) => {
    return (
        <SidebarBox>
            <h2 style={{ marginBottom: "1.5rem" }}>{title}</h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", listStyle: "none" }}>
                {
                    sidebarItems?.map(item => (
                        <li key={item.id}>{item.titulo}</li>
                    ))
                }
            </ul>
        </SidebarBox>
    );
}

export default Sidebar;