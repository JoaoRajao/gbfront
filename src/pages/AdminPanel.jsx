// src/pages/AdminPanel.jsx

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import routes from '../utils/routes';
import styles from '../assets/css/adminPanel.module.css';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const AdminPanel = () => {
  return (
    <>
      <Head>
        <title>Menu do Administrador</title>
        <link rel="shortcut icon" href="/assets/images/logo.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/a81368914c.js" async></script>
      </Head>

      <main className={styles.container}>
        <header>
          <h1 className={styles.welcomeMessage}>Painel do Administrador</h1>
          <p className={styles.welcomeMessage}>
            Bem-vindo, <span id="admin-name">Admin</span>
          </p>
        </header>

        <div className={styles.cardContainer}>
          {/* Cadastrar Aluno */}
          <Card className={styles.menuItem}>
            <CardHeader>
              <CardTitle>
                <i className="fas fa-user-plus" style={{ color: 'var(--primary-color)' }}></i> Cadastrar Aluno
              </CardTitle>
              <CardDescription>Adicione novos alunos ao sistema</CardDescription>
            </CardHeader>
            
            <CardFooter>
              <Link href={routes.cadastroAluno} passHref>
                Cadastrar
              </Link>
            </CardFooter>
          </Card>

          {/* Visualizar Alunos */}
          <Card className={styles.menuItem}>
            <CardHeader>
              <CardTitle>
                <i className="fas fa-users" style={{ color: 'var(--primary-color)' }}></i> Visualizar Alunos
              </CardTitle>
              <CardDescription>Veja a lista de todos os alunos</CardDescription>
            </CardHeader>
           
            <CardFooter>
              <Link href={routes.exibirAlunos} passHref>
                Visualizar
              </Link>
            </CardFooter>
          </Card>

          {/* Visualizar Pagamentos */}
          <Card className={styles.menuItem}>
            <CardHeader>
              <CardTitle>
                <i className="fas fa-money-bill-wave" style={{ color: 'var(--primary-color)' }}></i> Visualizar Pagamentos
              </CardTitle>
              <CardDescription>Acompanhe os pagamentos dos alunos</CardDescription>
            </CardHeader>
           
            <CardFooter>
              <Link href={routes.pagamentoAluno} passHref>
                Visualizar
              </Link>
            </CardFooter>
          </Card>

          {/* Agendar Treinos */}
          <Card className={styles.menuItem}>
            <CardHeader>
              <CardTitle>
                <i className="fas fa-calendar-alt" style={{ color: 'var(--primary-color)' }}></i> Agendar Treinos
              </CardTitle>
              <CardDescription>Gerencie os horários de treinos</CardDescription>
            </CardHeader>
           
            <CardFooter>
              <Link href={routes.agendamento} passHref>
                Agendar
              </Link>
            </CardFooter>
          </Card>

          {/* Gerenciar Planos */}
          <Card className={styles.menuItem}>
            <CardHeader>
              <CardTitle>
                <i className="fas fa-file-invoice-dollar" style={{ color: 'var(--primary-color)' }}></i> Gerenciar Planos
              </CardTitle>
              <CardDescription>Cadastre e gerencie os planos</CardDescription>
            </CardHeader>
            
            <CardFooter>
              <Link href={routes.planosCadastro} passHref>
                Gerenciar
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>
    </>
  );
};

export default AdminPanel;
