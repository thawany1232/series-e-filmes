import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.3',
    info: { title: "API de Filmes e Séries", version: '1.0.0', description: 'CRUD REST com persistência em JSON.' },
    servers: [{ url: "http://localhost:3002" }],
    components: { schemas: {
      Registro: { type: 'object', required: ['id', ...["titulo", "tipo", "genero", "ano"]], properties: { id: { type: 'integer', readOnly: true }, ...{"titulo": {"type": "string", "example": "Filme de exemplo"}, "tipo": {"type": "string", "enum": ["filme", "serie"]}, "genero": {"type": "string"}, "ano": {"type": "integer", "minimum": 1888}, "sinopse": {"type": "string"}, "diretor": {"type": "string"}, "temporadas": {"type": "integer", "minimum": 1, "nullable": true}, "nota": {"type": "number", "minimum": 0, "maximum": 10}, "imagem": {"type": "string"}} } },
      Entrada: { type: 'object', required: ["titulo", "tipo", "genero", "ano"], properties: {"titulo": {"type": "string", "example": "Filme de exemplo"}, "tipo": {"type": "string", "enum": ["filme", "serie"]}, "genero": {"type": "string"}, "ano": {"type": "integer", "minimum": 1888}, "sinopse": {"type": "string"}, "diretor": {"type": "string"}, "temporadas": {"type": "integer", "minimum": 1, "nullable": true}, "nota": {"type": "number", "minimum": 0, "maximum": 10}, "imagem": {"type": "string"}} }
    } },
    paths: {
      "/api/itens": {
        get: { summary: 'Listar registros', tags: ["Filmes e Séries"], responses: { 200: { description: 'Lista (pode estar vazia)' }, 500: { description: 'Erro interno' } } },
        post: { summary: 'Cadastrar registro', tags: ["Filmes e Séries"], requestBody: { required: true, content: { 'application/json': { schema: { $ref: '#/components/schemas/Entrada' } } } }, responses: { 201: { description: 'Criado' }, 400: { description: 'Dados inválidos' }, 500: { description: 'Erro interno' } } }
      },
      "/api/itens/{id}": {
        parameters: [{ in: 'path', name: 'id', required: true, schema: { type: 'integer', minimum: 1 } }],
        get: { summary: 'Buscar por ID', tags: ["Filmes e Séries"], responses: { 200: { description: 'Encontrado' }, 400: { description: 'ID inválido' }, 404: { description: 'Não encontrado' }, 500: { description: 'Erro interno' } } },
        put: { summary: 'Atualizar campos do registro', tags: ["Filmes e Séries"], requestBody: { required: true, content: { 'application/json': { schema: { type: 'object', properties: {"titulo": {"type": "string", "example": "Filme de exemplo"}, "tipo": {"type": "string", "enum": ["filme", "serie"]}, "genero": {"type": "string"}, "ano": {"type": "integer", "minimum": 1888}, "sinopse": {"type": "string"}, "diretor": {"type": "string"}, "temporadas": {"type": "integer", "minimum": 1, "nullable": true}, "nota": {"type": "number", "minimum": 0, "maximum": 10}, "imagem": {"type": "string"}} } } } }, responses: { 200: { description: 'Atualizado' }, 400: { description: 'Dados inválidos' }, 404: { description: 'Não encontrado' }, 500: { description: 'Erro interno' } } },
        delete: { summary: 'Excluir registro', tags: ["Filmes e Séries"], responses: { 200: { description: 'Excluído' }, 400: { description: 'ID inválido' }, 404: { description: 'Não encontrado' }, 500: { description: 'Erro interno' } } }
      }
    }
  },
  apis: []
});
export { swaggerUi, swaggerSpec };
