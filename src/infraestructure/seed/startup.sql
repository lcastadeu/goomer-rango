CREATE TABLE IF NOT EXISTS public.arquivo (
  id SERIAL NOT NULL,
  nome VARCHAR(180) NOT NULL,
  local VARCHAR(500) NOT NULL,
  content_type varchar(20) NOT NULL,
  constraint pk_arquivo primary key (id)
);

CREATE TABLE IF NOT EXISTS public.categoria_produto (
  id SERIAL NOT NULL,
  nome VARCHAR(180) NOT NULL,
  constraint pk_categoria_produto primary key (id)
);

CREATE TABLE IF NOT EXISTS public.horario_funcionamento (
  id SERIAL NOT NULL,
  dia INT NOT NULL,
  hora_inicio TIME NULL,
  hora_termino TIME NULL,
  aceitar_feriado BOOLEAN,
  constraint pk_horario_funcionamento primary key (id)
);

CREATE TABLE IF NOT EXISTS public.restaurante (
  id SERIAL NOT NULL,
  nome VARCHAR(180) NOT NULL,
  endereco VARCHAR(250) NOT NULL,
  id_foto INT NULL,
  constraint pk_restaurante primary key (id),
  constraint fk_restaurante__arquivo 
    foreign key (id_foto) 
    references arquivo(id) 
    on update cascade 
    on delete no action
);

CREATE TABLE IF NOT EXISTS public.produto (
  id SERIAL NOT NULL,
  nome VARCHAR(180) NOT NULL,
  preco DECIMAL(19,2) NOT NULL,
  id_categoria INT NOT NULL,
  id_foto INT NULL,
  constraint pk_produto primary key (id),
  constraint fk_produto__categoria_produto
    foreign key (id_categoria)
    references categoria_produto (id)
    on update cascade
    on delete no action,
  constraint fk_produto__arquivo 
    foreign key (id_foto) 
    references arquivo(id) 
    on update cascade 
    on delete no action
);

CREATE TABLE IF NOT EXISTS public.promocao_produto (
  id SERIAL NOT NULL,
  descricao VARCHAR(500) NOT NULL,
  id_produto INT NOT NULL,
  preco DECIMAL(19,2) NOT NULL,
  constraint pk_promocao_produto primary key (id),
  constraint fk_promocao_produto__produto
    foreign key (id_produto)
    references produto(id)
    on update cascade
    on delete no action
);

CREATE TABLE  IF NOT EXISTS public.horario_restaurante (
  id_horario INT NOT NULL,
  id_restaurante INT NOT NULL,
  ativo BOOLEAN,
  constraint fk_horario_restaurante__horario_funcionamento
    foreign key (id_horario)
    references public.horario_funcionamento(id)
    on update cascade
    on delete no action,
  constraint fk_horario_restaurante__restaurante
    foreign key (id_restaurante)
    references public.restaurante(id)
    on update cascade
    on delete no action
);

CREATE TABLE  IF NOT EXISTS public.horario_promocao_produto (
  id_horario INT NOT NULL,
  id_promocao_produto INT NOT NULL,
  ativo BOOLEAN,
  constraint fk_horario_promocao_produto__horario_funcionamento
    foreign key (id_horario)
    references public.horario_funcionamento(id)
    on update cascade
    on delete no action,
  constraint fk_horario_promocao_produto__promocao_produto
    foreign key (id_promocao_produto)
    references public.promocao_produto(id)
    on update cascade
    on delete no action
);
