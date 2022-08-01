import { ChangeEvent, useState } from "react";
import styled from "styled-components";

import { Sidebar, Navbar } from "./components";

const AppWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
`;

const routeStyles = { padding: "1.5rem", minHeight: "150vh" };

const itens = [
    {
        id: 0,
        titulo: "Sobre"
    },
    {
        id: 1,
        titulo: "VCoisas"
    },
    {
        id: 2,
        titulo: "Trecos"
    }
];

const App = () => {
    const [ formData, setFormData ] = useState({
       email: "",
       password: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(formData.email !== "") {
            alert("Foi");
        } else {
            alert("Não deixe campos vazios");
        }
    }
    
    return (
        <AppWrapper>
            <Navbar />
            <div className="app_grid">
                <Sidebar title={"Sidebar"} sidebarItems={itens} />
                <div className="route" style={routeStyles}>
                    <form className="form" onSubmit={handleSubmit}>
                        <input type="email" placeholder="Seu E-mail" name="email" onChange={handleChange} />
                        <input type="password" placeholder="Sua Senha" name="password" onChange={handleChange}  />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </AppWrapper>
    );
}

export default App;