import React from 'react';
import {Header, Footer, Description} from './styles';
import profile from "../../assets/euzinho.jpg";
import icon from "../../assets/iconWebSite.jpg";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";


import { FiChevronRight} from 'react-icons/fi';

const Profile: React.FC = () =>{
    return(
        <>
            <Header>
                <a href="/">
                    <img src={icon} alt="icon" />
                    <h3>Luiz Marcelo</h3>
                </a>
                <a href="/repository">
                    Projects
                    <FiChevronRight size={25} />
                </a>
            </Header>
            <Description>
                <img src={profile} alt="profile" />
                <p>
                    Olá, Meu Nome é Luiz Marcelo, gosto de programar, assistir filmes,
                    ouvir Musica!!
                </p>
            </Description>

            <Footer>
                <a href="https://www.linkedin.com/in/luiz-oliveira-9777bb1b4/">
                <img src={linkedin} alt="linkedin-icon" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100005410421132">
                <img src={facebook} alt="facebook-icon" />
                </a>
            </Footer>
        </>
    );
};

export default Profile;