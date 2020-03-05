-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04-Mar-2020 às 14:20
-- Versão do servidor: 10.3.16-MariaDB
-- versão do PHP: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `wfacciolli`
--

CREATE database wfacciolli;

USE wfacciolli;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cargos`
--



CREATE TABLE `cargos` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `setor_cargo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cidade`
--

CREATE TABLE `cidade` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `estado_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `contato_empresa`
--

CREATE TABLE `contato_empresa` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `telefone` varchar(45) NOT NULL,
  `tipo_contato_id` int(11) NOT NULL,
  `unidade_contato_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `empresa`
--

CREATE TABLE `empresa` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `endereco`
--

CREATE TABLE `endereco` (
  `id` int(11) NOT NULL,
  `rua` varchar(45) NOT NULL,
  `numero` int(11) NOT NULL,
  `bairro` varchar(45) NOT NULL,
  `cidade_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `equipamento`
--

CREATE TABLE `equipamento` (
  `id` int(11) NOT NULL,
  `numero_serie` varchar(45) NOT NULL,
  `observacao` varchar(45) NOT NULL,
  `tipo_equipamento_id` int(11) NOT NULL,
  `setor_equipamento_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `estado`
--

CREATE TABLE `estado` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `uf` char(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionario`
--

CREATE TABLE `funcionario` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `observacao` varchar(45) NOT NULL,
  `cargo_funcionario_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `setor`
--

CREATE TABLE `setor` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `telefones`
--

CREATE TABLE `telefones` (
  `id` int(11) NOT NULL,
  `telefone` varchar(45) NOT NULL,
  `funcionario_telefone_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipo_contato_empresa`
--

CREATE TABLE `tipo_contato_empresa` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipo_equipamento`
--

CREATE TABLE `tipo_equipamento` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `unidade_empresa`
--

CREATE TABLE `unidade_empresa` (
  `id` int(11) NOT NULL,
  `unidade` varchar(45) NOT NULL,
  `cnpj` varchar(45) NOT NULL,
  `empresa_unidade_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `veiculo`
--

CREATE TABLE `veiculo` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `placa` varchar(45) NOT NULL,
  `numero` varchar(45) NOT NULL,
  `observacao` varchar(45) NOT NULL,
  `setor_veiculo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cargos`
--
ALTER TABLE `cargos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `setor_cargo_id_idx` (`setor_cargo_id`);

--
-- Índices para tabela `cidade`
--
ALTER TABLE `cidade`
  ADD PRIMARY KEY (`id`),
  ADD KEY `estado_id_idx` (`estado_id`);

--
-- Índices para tabela `contato_empresa`
--
ALTER TABLE `contato_empresa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `unidade_contato_id_idx` (`unidade_contato_id`),
  ADD KEY `tipo_contato_id_idx` (`tipo_contato_id`);

--
-- Índices para tabela `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `endereco`
--
ALTER TABLE `endereco`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cidade_id_idx` (`cidade_id`);

--
-- Índices para tabela `equipamento`
--
ALTER TABLE `equipamento`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tipo_equipamento_id_idx` (`tipo_equipamento_id`),
  ADD KEY `setor_equipamento_id_idx` (`setor_equipamento_id`);

--
-- Índices para tabela `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `funcionario`
--
ALTER TABLE `funcionario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cargo_funcionario_id_idx` (`cargo_funcionario_id`);

--
-- Índices para tabela `setor`
--
ALTER TABLE `setor`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `telefones`
--
ALTER TABLE `telefones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `funcionario_telefone_id_idx` (`funcionario_telefone_id`);

--
-- Índices para tabela `tipo_contato_empresa`
--
ALTER TABLE `tipo_contato_empresa`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tipo_equipamento`
--
ALTER TABLE `tipo_equipamento`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `unidade_empresa`
--
ALTER TABLE `unidade_empresa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `empresa_unidade_id_idx` (`empresa_unidade_id`);

--
-- Índices para tabela `veiculo`
--
ALTER TABLE `veiculo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `setor_veiculo_id_idx` (`setor_veiculo_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cargos`
--
ALTER TABLE `cargos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `cidade`
--
ALTER TABLE `cidade`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `contato_empresa`
--
ALTER TABLE `contato_empresa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `endereco`
--
ALTER TABLE `endereco`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `equipamento`
--
ALTER TABLE `equipamento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `funcionario`
--
ALTER TABLE `funcionario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `telefones`
--
ALTER TABLE `telefones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tipo_equipamento`
--
ALTER TABLE `tipo_equipamento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `veiculo`
--
ALTER TABLE `veiculo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `cargos`
--
ALTER TABLE `cargos`
  ADD CONSTRAINT `setor_cargo_id` FOREIGN KEY (`setor_cargo_id`) REFERENCES `mydb`.`setor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `cidade`
--
ALTER TABLE `cidade`
  ADD CONSTRAINT `estado_id` FOREIGN KEY (`estado_id`) REFERENCES `mydb`.`estados` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `contato_empresa`
--
ALTER TABLE `contato_empresa`
  ADD CONSTRAINT `tipo_contato_id` FOREIGN KEY (`tipo_contato_id`) REFERENCES `mydb`.`tipo_contato_empresa` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `unidade_contato_id` FOREIGN KEY (`unidade_contato_id`) REFERENCES `mydb`.`unidade_contato_empresa` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `endereco`
--
ALTER TABLE `endereco`
  ADD CONSTRAINT `cidade_id` FOREIGN KEY (`cidade_id`) REFERENCES `mydb`.`cidades` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `equipamento`
--
ALTER TABLE `equipamento`
  ADD CONSTRAINT `setor_equipamento_id` FOREIGN KEY (`setor_equipamento_id`) REFERENCES `mydb`.`setor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `tipo_equipamento_id` FOREIGN KEY (`tipo_equipamento_id`) REFERENCES `mydb`.`tipo_equipamento` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `funcionario`
--
ALTER TABLE `funcionario`
  ADD CONSTRAINT `cargo_funcionario_id` FOREIGN KEY (`cargo_funcionario_id`) REFERENCES `mydb`.`cargos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `telefones`
--
ALTER TABLE `telefones`
  ADD CONSTRAINT `funcionario_telefone_id` FOREIGN KEY (`funcionario_telefone_id`) REFERENCES `mydb`.`funcionario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `unidade_empresa`
--
ALTER TABLE `unidade_empresa`
  ADD CONSTRAINT `empresa_unidade_id` FOREIGN KEY (`empresa_unidade_id`) REFERENCES `mydb`.`empresa` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `veiculo`
--
ALTER TABLE `veiculo`
  ADD CONSTRAINT `setor_veiculo_id` FOREIGN KEY (`setor_veiculo_id`) REFERENCES `mydb`.`setor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
