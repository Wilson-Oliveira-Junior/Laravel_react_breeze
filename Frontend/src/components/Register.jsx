import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        // Validação dos campos
        if (!name || !email || !password || !passwordConfirmation) {
            setErrors({ global: "Todos os campos são obrigatórios." });
            return;
        }
        
        if (password !== passwordConfirmation) {
            setErrors({ passwordConfirmation: "As senhas não correspondem." });
            return;
        }
        console.log("Registro realizado com sucesso!");
    };

    return (
        <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="relative max-w-[525px] mx-auto overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
                            <div className="mb-10 text-center md:mb-16">
                                <img src="/img/logo.png" alt="Logo da Intranet" className="logo" />
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Nome"
                                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Senha"
                                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        value={passwordConfirmation}
                                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                                        placeholder="Confirme sua senha"
                                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary"
                                    />
                                </div>
                                {errors.global && (
                                    <div className="text-red-400 text-sm m-2 p-2">{errors.global}</div>
                                )}
                                {errors.passwordConfirmation && (
                                    <div className="text-red-400 text-sm m-2 p-2">{errors.passwordConfirmation}</div>
                                )}
                                <div className="mb-10">
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white"
                                    >
                                        Registrar
                                    </button>
                                </div>
                            </form>
                            <p className="text-base text-[#adadad]">
                                Já possui conta?{" "}
                                <Link to="/login" className="text-primary hover:underline">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
