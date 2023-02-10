
# Projeto Indivudal 3 - Estão Servidos?

Este é um projeto do curso de WebDev da Resilia Educação, o objetivo tem como o desenvolvimento de um micro-servidor utilizando a lib JSON-Server para simular um banco de dados com modelagem CRUD (Create, Read, Update e Delete), inicialmente com 3 rotas e 4 métodos (GET, POST, PATCH e DELETE) em um arquivo JSON.

## Screenshots
<div align="center"> 
<a href="https://ibb.co/R6nM8CY"><img src="https://i.ibb.co/LgwqKCY/PI3-Vercel.png" alt="PI3-Vercel" border="0"></a>
</div>

## Documentação da API

#### Rotas disponíveis 

| Rotas   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `clients` | `string` |Rota para clientes |
| `orders` | `string` | Rota para pedidos |
| `sellers` | `string` | Rota para vendedores |


#### Retorna todos os itens da rota

```http
  GET /{router}/list
```

#### Criar um novo um item na rota

```http
  POST /{router}/create
```

#### Atualizar um item

```http
  PATCH /{router}/update/${id}
```

#### Deletar um item
```http
  DELETE /{router}/delete/${id}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `router`      | `string` | **[Obrigatório]** Refere-se à rota na qual voce quer acessar |
| `id`      | `number` | **[Obrigatório (PATCH e DELETE)]** O ID do item que você quer modificar/deletar |


## Demonstração

Link para demonstração: [![](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel)](https://resilia-pi-3.vercel.app/)


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/zViniicius/Resilia-PI3.git
```

Entre no diretório do projeto

```bash
  cd Resilia-PI3
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```

## Exemplos de uso

```javascript
const listSellers = () =>{
    fetch('http://localhost:9999/sellers/list')
    .then((res) => res.json())
    .then((data) => console.log(data))
}
```


