import React from "react";
import { Container } from "./styles";

function Button({ title, loading = false, ...rest }: any) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? "Carregando..." : title}
    </Container>
  );
}

export { Button };
