--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: filmes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.filmes (
    id integer NOT NULL,
    nome character varying(30) NOT NULL,
    descricao character varying(500),
    status boolean DEFAULT false NOT NULL,
    "plataformaId" integer NOT NULL,
    "generoId" integer NOT NULL
);


--
-- Name: filmes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.filmes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: filmes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.filmes_id_seq OWNED BY public.filmes.id;


--
-- Name: genero; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.genero (
    id integer NOT NULL,
    nome character varying(30) NOT NULL
);


--
-- Name: genero_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.genero_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: genero_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.genero_id_seq OWNED BY public.genero.id;


--
-- Name: plataforma; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.plataforma (
    id integer NOT NULL,
    nome character varying(30) NOT NULL
);


--
-- Name: plataforma_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.plataforma_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: plataforma_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.plataforma_id_seq OWNED BY public.plataforma.id;


--
-- Name: filmes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.filmes ALTER COLUMN id SET DEFAULT nextval('public.filmes_id_seq'::regclass);


--
-- Name: genero id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genero ALTER COLUMN id SET DEFAULT nextval('public.genero_id_seq'::regclass);


--
-- Name: plataforma id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.plataforma ALTER COLUMN id SET DEFAULT nextval('public.plataforma_id_seq'::regclass);


--
-- Data for Name: filmes; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.filmes VALUES (3, 'A vida depois', 'chato dmais', true, 1, 3);
INSERT INTO public.filmes VALUES (10, 'A luta do dev junior', 'Chora, ri, se frusta, chora, acerta, fica feliz', true, 4, 3);


--
-- Data for Name: genero; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.genero VALUES (1, 'terror');
INSERT INTO public.genero VALUES (2, 'comedia');
INSERT INTO public.genero VALUES (3, 'drama');
INSERT INTO public.genero VALUES (4, 'aventura');
INSERT INTO public.genero VALUES (5, 'ação');


--
-- Data for Name: plataforma; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.plataforma VALUES (1, 'netflix');
INSERT INTO public.plataforma VALUES (2, 'prime video');
INSERT INTO public.plataforma VALUES (3, 'amazon prime');
INSERT INTO public.plataforma VALUES (4, 'HBO max');
INSERT INTO public.plataforma VALUES (5, 'Disney+');
INSERT INTO public.plataforma VALUES (6, 'globoplay');


--
-- Name: filmes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.filmes_id_seq', 11, true);


--
-- Name: genero_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.genero_id_seq', 5, true);


--
-- Name: plataforma_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.plataforma_id_seq', 6, true);


--
-- Name: filmes filmes_nome_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.filmes
    ADD CONSTRAINT filmes_nome_key UNIQUE (nome);


--
-- Name: filmes filmes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.filmes
    ADD CONSTRAINT filmes_pkey PRIMARY KEY (id);


--
-- Name: genero genero_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genero
    ADD CONSTRAINT genero_pkey PRIMARY KEY (id);


--
-- Name: plataforma plataforma_nome_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.plataforma
    ADD CONSTRAINT plataforma_nome_key UNIQUE (nome);


--
-- Name: plataforma plataforma_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.plataforma
    ADD CONSTRAINT plataforma_pkey PRIMARY KEY (id);


--
-- Name: filmes filmes_generoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.filmes
    ADD CONSTRAINT "filmes_generoId_fkey" FOREIGN KEY ("generoId") REFERENCES public.genero(id);


--
-- Name: filmes filmes_plataformaId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.filmes
    ADD CONSTRAINT "filmes_plataformaId_fkey" FOREIGN KEY ("plataformaId") REFERENCES public.plataforma(id);


--
-- PostgreSQL database dump complete
--

