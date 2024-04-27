import React, { useState } from "react";
import {
  AutocompleteContainer,
  Input,
  OptionsList,
  OptionItem,
} from "./styles";

// Definição de tipos para as sugestões
type Option = {
  label: string;
  value: any;
};

// Componente de autocompletar
const Autocomplete: React.FC<{
  options: Option[];
}> = ({ options }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    // Filtrar as opções com base no texto digitado
    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filteredOptions);
  };

  return (
    <AutocompleteContainer>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite algo..."
      />
      <OptionsList>
        {filteredOptions.map((option) => (
          <OptionItem key={option.value}>{option.label}</OptionItem>
        ))}
      </OptionsList>
    </AutocompleteContainer>
  );
};

export default Autocomplete;
