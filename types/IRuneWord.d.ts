// Interface representing the properties of a RuneWord
export interface IRuneWordProperties {
  runes: string[];
  items: string[];
  properties: string[];
  level: number;
  active_in: Record<string, boolean>;
}

// Interface representing a RuneWord, where the name is the key
export interface IRuneWord {
  word: string;
  properties: IRuneWordProperties;
}
