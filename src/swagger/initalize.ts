import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const initSwagger = (app) => {
  const options = new DocumentBuilder()
    .setTitle('API docs')
    .setDescription(' API')
    .setVersion('1.0')
    .addApiKey({ type: 'apiKey', name: 'id_token', in: 'header' })
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
}
