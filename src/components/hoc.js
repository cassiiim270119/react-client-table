import React from 'react';

function hoc(Component) {
  return function CarregandoProdutos({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px', color: 'gray' }}>
        Carregando dados...
      </p>
    );
  };
}
export default hoc;