import { ApplicationCommandOptionType } from '../api/api';

type InputArgs = {
  type: ApplicationCommandOptionType;
  name: string;
  description: string;
  required?: boolean;
};

export class Input {
  constructor({ type, name, description, required = false }: InputArgs) {}
}

export class StringInput extends Input {
  constructor(args: Omit<InputArgs, 'type'>) {
    super({ type: ApplicationCommandOptionType.STRING, ...args });
  }
}

export class IntegerInput extends Input {
  constructor(args: Omit<InputArgs, 'type'>) {
    super({ type: ApplicationCommandOptionType.INTEGER, ...args });
  }
}

export class BooleanInput extends Input {
  constructor(args: Omit<InputArgs, 'type'>) {
    super({ type: ApplicationCommandOptionType.BOOLEAN, ...args });
  }
}

export class UserInput extends Input {
  constructor(args: Omit<InputArgs, 'type'>) {
    super({ type: ApplicationCommandOptionType.USER, ...args });
  }
}

export class ChannelInput extends Input {
  constructor(args: Omit<InputArgs, 'type'>) {
    super({ type: ApplicationCommandOptionType.CHANNEL, ...args });
  }
}

export class RoleInput extends Input {
  constructor(args: Omit<InputArgs, 'type'>) {
    super({ type: ApplicationCommandOptionType.ROLE, ...args });
  }
}

export class MentionableInput extends Input {
  constructor(args: Omit<InputArgs, 'type'>) {
    super({ type: ApplicationCommandOptionType.MENTIONABLE, ...args });
  }
}
