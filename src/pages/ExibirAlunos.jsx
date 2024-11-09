import React, { useState, useEffect } from 'react';
import { listarUsuarios } from '../utils/api';
import styles from '../assets/css/ExibirAlunos.module.css';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"; 

const ExibirAlunos = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    const fetchAlunos = async () => {
      const data = await listarUsuarios();
      setAlunos(Array.isArray(data) ? data : []);
    };
    fetchAlunos();
  }, []);

  return (
    <div className={styles.tableContainer}>
      <Table>
        <TableCaption>Lista de Alunos Registrados</TableCaption>
        <TableHeader>
          <TableRow className={styles.tableHeader}>
            
            <TableHead>Nome</TableHead>
            <TableHead>CPF</TableHead>
            <TableHead>Número</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alunos.map((aluno) => (
            <TableRow key={aluno.id} className={styles.tableRow}>
              
              <TableCell className={styles.tableCell}>{aluno.nome}</TableCell>
              <TableCell className={styles.tableCell}>{aluno.cpf}</TableCell>
              <TableCell className={styles.tableCell}>{aluno.telefone}</TableCell>
              <TableCell className={styles.tableCell}>{aluno.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5} className={styles.tableFooter}>
              Total de Alunos: {alunos.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default ExibirAlunos;
