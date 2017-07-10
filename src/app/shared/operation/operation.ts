export class Operation {
  code:  string;
  label: string;

  parameters: Parameter[];

    constructor(code: string, label: string, parameters: Parameter[]) {

        this.code = code;
        this.label = label;
        this.parameters = parameters;
    }

}

export class Parameter {

        code: string;
        label: string;
        mandatory: boolean;

    constructor(code: string, label: string, mandatory: boolean) {
         this.code = code;
         this.label = label;
         this.mandatory = mandatory;
    }

}
