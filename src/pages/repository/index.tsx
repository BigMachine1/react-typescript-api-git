import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FiChevronsLeft } from "react-icons/fi";
import icon from "../../assets/iconWebSite.jpg";
import {Header, RepositoryList} from "./styles";

import api from '../../services/api';

interface Repository{
    full_name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
}

const Repository: React.FC = () =>{
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(()=>{
        api.get('users/BigMachine1/repos')
        .then((reponse) =>{
            setRepositories(reponse.data);
        })
    },[]);

    return(
        <>
            <Header>
                <Link to="/">
                    <img src={icon} alt="icon" />
                    <h3>Luiz Marcelo</h3>
                </Link>
                <Link to="/">
                    <FiChevronsLeft size={25} />
                    Profile
                </Link>
            </Header>
            <RepositoryList>
                <h2>My Repositories</h2>
                {repositories.map((repository) => (
                    <a href={`https://www.github.com/${repository.full_name}`}>
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                            <ul>
                                <li>
                                    <strong>{repository.stargazers_count}</strong>
                                    <span>stars</span>
                                </li>
                                <li>
                                    <strong>{repository.forks_count}</strong>
                                    <span>forks</span>
                                </li>
                                <li>
                                    <strong>{repository.open_issues_count}</strong>
                                    <span>issues</span>
                                </li>
                            </ul>
                        </div>
                    </a>
                ))}
            </RepositoryList>
        </>
    );
};

export default Repository;