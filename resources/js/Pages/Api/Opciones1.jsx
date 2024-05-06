import React, { useEffect, useState } from 'react';
import Layout from "@/Layouts/Layout.jsx";
import axios from "axios";
import Tabla from "@/Components/Tabla.jsx";

export default function Index({lenguajes=[]) {
    //Confirmamos datos
    console.log("Opciones.jsx" );
    console.log(lenguajes);

    return (
        <Layout>
                <div className="flex justify-center items-center h-full">
                        <div className="grid grid-cols-2 gap-4 ">
                            {/*Card de usuarios de git de un lenguaje*/}
                            <div className="card w-96 bg-base-100 shadow-xl image-full">
                                <figure className="filter brightness-200"><img src="images/GIT_Repository.jpg"
                                </figure>
                                <div className="card-body">
                                    <h2 className="mt-7 card-title">Git access</h2>
                                    <p>Repos de lenguajes</p>
                                    <div className="card-actions justify-end">
                                            {lenguajes.length>0 &&(
                                                <select onChange={handleChangeLanguaje}>
                                                    {lenguajes.map((lenguaje, index)=> (
                                                    <option key={index} value={lenguaje}>{lenguaje}</option>
                                                ))}
                                                </select>
                                            )}
                                        <button onClick={getUserLang} className="btn btn-primary">Obtener datos</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-xl image-full">
                                <figure className="filter brightness-200">
                                    <img src="images/PELICULAS_the_movil_db.png" alt="films the movil db"/></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Películas </h2>
                                    <p>Películas The Movil DB</p>
                                    <div className="card-actions justify-end">
                                        <button onClick={getFilms} className="btn btn-primary">Obtener datos</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-xl image-full">

                                <figure>
                                    <img src="images/GIT_Users.jpeg" alt="Users Git"/>
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Git access</h2>
                                    <p>Usuarios de git</p>
                                    <div className="card-actions justify-end">
                                        <button onClick={getUsuariosGit} className="btn btn-primary">Obtener datos
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-xl image-full">
                                <figure>
                                    <img src="images/IMAGES_Unsplash.jpeg" alt="Users Git"/>
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Imágenes de unsplash</h2>
                                    <p>Imágenes</p>
                                    <div className="card-actions justify-end">
                                        <button onClick={getImages} className="btn btn-primary">Obtener imágenes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            )}
            {usuarios.length > 0 && (
                <div onClick={handleClose} className="flex flex-col justify-center items-center h-full">
                    <button className="btn btn-primary">Cerrar</button>
                    <Tabla nombre="Usuarios" campos={['login', 'url']}
                           filas={usuarios.map(user => ({
                               id: user.id,
                               login: user.login,
                               url: user.html_url
                           }))}/>
                </div>
            )}
            {usuariosLenguajes.length>0 && (
                <div onClick={handleClose} className="flex flex-col justify-center items-center h-full">
                    <button className="btn btn-primary">Cerrar</button>
                    <Tabla nombre={`Usuarios con repos de ${lenguajeSeleccionado}`}
                           campos={['avatar','login', 'url']}
                           filas={usuariosLenguajes.map((user => ({
                               id: user.id,
                               avatar: user.avatar_url,
                               login: user.login,
                               url: user.html_url
                           })))} crud={false}/>
                </div>
            )}
        </Layout>
    );
}
