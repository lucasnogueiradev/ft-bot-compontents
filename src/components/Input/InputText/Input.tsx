import React, { useEffect } from "react";
import { useId, useState } from "react";
import * as S from "./styles";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  value?: string;
  label?: string;
  errorMessage?: React.ReactNode;
}

function InputText({
  label,
  name,
  type,
  startAdornment = false,
  endAdornment = false,
  errorMessage,
  ...rest
}: InputProps) {
  const labelId = useId();

  return (
    <S.Container>
      {label && <S.Label htmlFor={label}>{label}</S.Label>}
      <S.ContainerInput>
        {startAdornment && (
          <S.StartAdornment>{startAdornment}</S.StartAdornment>
        )}
        <S.Input id={labelId} name={name} type={type} {...rest} />
        {endAdornment && <S.StartAdornment>{endAdornment}</S.StartAdornment>}
      </S.ContainerInput>
      {errorMessage && <S.Error>{errorMessage}</S.Error>}
    </S.Container>
  );
}
export default InputText;
