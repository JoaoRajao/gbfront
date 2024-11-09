

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { listarUsuarios, cadastrarUsuario } from '../utils/api';

const formSchema = z.object({
  nome: z.string().min(2, { message: "Nome completo é obrigatório e deve ter no mínimo 2 caracteres." }),
  endereco: z.string().min(5, { message: "Endereço é obrigatório e deve ter no mínimo 5 caracteres." }),
  cpf: z.string().length(11, { message: "CPF deve ter 11 dígitos." }),
  telefone: z.string().optional(),
  email: z.string().email({ message: "E-mail inválido." }),
  tempo_assinatura: z.enum(['Monthly', 'Quarterly', 'Yearly']),
  tipo_assinatura: z.string().nonempty({ message: "Tipo de assinatura é obrigatório." }),
  modalidade_luta: z.string().optional(),
  contato_emergencia_nome: z.string().optional(),
  contato_emergencia_telefone: z.string().optional(),
});

const CadastroAluno = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const data = await listarUsuarios();
        setUsuarios(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Erro ao listar usuários:', error);
      }
    };
    fetchUsuarios();
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      endereco: '',
      cpf: '',
      telefone: '',
      email: '',
      tempo_assinatura: 'Monthly',
      tipo_assinatura: '',
      modalidade_luta: '',
      contato_emergencia_nome: '',
      contato_emergencia_telefone: '',
    },
  });

  const onSubmit = async (values) => {
    try {
      await cadastrarUsuario(values);
      setShowPopup(true);
      const data = await listarUsuarios();
      setUsuarios(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Head>
        <title>Cadastro de Aluno - Gracie Barra</title>
        <link rel="shortcut icon" href="/assets/images/logo.png" />
      </Head>

      <main className="container">
        <h1>Cadastro de Aluno</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="endereco"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Endereço</FormLabel>
                  <FormControl>
                    <Input placeholder="Endereço" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input placeholder="CPF" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="telefone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="Telefone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="E-mail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tempo_assinatura"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tempo de Assinatura</FormLabel>
                  <FormControl>
                    <select {...field}>
                      <option value="Monthly">1 mês</option>
                      <option value="Quarterly">3 meses</option>
                      <option value="Yearly">1 ano</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tipo_assinatura"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de Assinatura</FormLabel>
                  <FormControl>
                    <Input placeholder="Tipo de Assinatura" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Cadastrar Aluno</Button>
          </form>
        </Form>

        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Cadastro Realizado!</h2>
              <p>O aluno foi cadastrado com sucesso.</p>
              <Button onClick={handleClosePopup}>Fechar</Button>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default CadastroAluno;
