import analizadorVisitor from './generated/AnalizadorVisitor.js';

class CustomAnalizadorVisitor extends analizadorVisitor {
  constructor() {
    super();
  }

visitCommand(ctx) {
  const prefix = ctx.prefix().getText();
  const commandName = ctx.name().getText();

  const args = [];
  const options = {};


  for (const argCtx of ctx.argument()) {
    const arg = this.visit(argCtx);
    if (arg?.type === 'positional') {
      args.push(arg.value);
    } else if (arg?.type === 'optional') {
      options[arg.name] = arg.value;
    }
  }

  console.log(`\nComando: ${commandName}`);
  console.log(`Prefijo: ${prefix}`);
  console.log(`Argumentos posicionales:`, args);
  console.log(`Opciones:`, options);

  if (commandName === 'saludar') {
    const nombre = args[0] || 'desconocido';
    if (options.modo === 'formal') {
      console.log(`Hola, ${nombre}.`);
    } else {
      console.log(`ey, ${nombre}!`);
    }
  }

  return null;
}

visitArgument(ctx) {
  if (ctx.positional()) return this.visit(ctx.positional());
  if (ctx.optional()) return this.visit(ctx.optional());
  return null;
}

  visitPositional(ctx) {
    if (ctx.AT()) {
      const contenido = ctx.text()
        ? ctx.text().getText().replace(/^["']|["']$/g, '')
        : ctx.WORD().getText();
      return { type: 'positional', value: contenido };
    } else if (ctx.WORD()) {
      return { type: 'positional', value: ctx.WORD().getText() };
    } else if (ctx.NUMBER()) {
      return { type: 'positional', value: parseFloat(ctx.NUMBER().getText()) };
    }
    return null;
  }

  visitOptional(ctx) {
    const name = ctx.WORD().getText();
    let value = true;
    if (ctx.value()) {
      value = this.visit(ctx.value());
    }
    return { type: 'optional', name, value };
  }

  visitValue(ctx) {
    if (ctx.text()) {
      return ctx.text().getText().replace(/^["']|["']$/g, '');
    } else if (ctx.NUMBER()) {
      return parseFloat(ctx.NUMBER().getText());
    } else if (ctx.WORD()) {
      return ctx.WORD().getText();
    }
    return null;
  }
}

export default CustomAnalizadorVisitor;