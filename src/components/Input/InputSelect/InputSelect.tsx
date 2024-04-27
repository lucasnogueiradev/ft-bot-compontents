import React from "react";
import * as S from "./styles";
import { StyledSelect } from "./styles";
// Definindo as propriedades do componente
interface SelectProps {
  options: string[];
  onChange: (value: string) => void;
  name: string;
}

// Definindo o componente
const SelectInput: React.FC<SelectProps> = ({ options, onChange, name }) => {
  return (
    <S.Container>
      <S.ContainerInput>
        <StyledSelect name={name} onChange={(e) => onChange(e.target.value)}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </StyledSelect>
      </S.ContainerInput>
    </S.Container>
  );
};

export default SelectInput;
