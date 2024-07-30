import React from "react";
import * as S from "./styles";
import { StyledSelect } from "./styles";
// Definindo as propriedades do componente
interface SelectProps {
  options: string[];
  onChange: (value: string) => void;
  name: string;
  label: string;
}

// Definindo o componente
const SelectInput: React.FC<SelectProps> = ({
  options,
  label,
  onChange,
  name,
}) => {
  return (
    <S.Container>
      {label && <S.Label htmlFor={label}>{label}</S.Label>}
      <S.ContainerInput>
        <StyledSelect name={name} onChange={(e) => onChange(e.target.value)}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
              <p> {option}</p>
            </option>
          ))}
        </StyledSelect>
      </S.ContainerInput>
    </S.Container>
  );
};

export default SelectInput;
