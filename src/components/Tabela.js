import React from 'react';

const Tabela = (props) => {
    const { dataset } = props;
    if (!dataset || dataset.length === 0) return <p>Carregando ...</p>;
    return (
        <TabelaComp listaCabecalhos={dataset.column_names} corpoTabela={dataset.data}/>
    );
};

class Coluna extends React.Component {
    render() {
        return (
            <td>{this.props.dado}</td>
        );
    }
}

class Cabecalho extends React.Component {
    render() {
        return (
            <th>{this.props.dado}</th>
        );
    }
}

class Linha extends React.Component {
    render() {
        const colunas = [];
        this.props.dado.forEach(
            (infos, index) => {
                colunas.push(
                    <Coluna key={index} dado={infos} />
                );
            }
        );

        return (
            <tr>{colunas}</tr>
        );
    }
}

class TabelaComp extends React.Component {
    render() {
        const linhas = [];
        this.props.corpoTabela.forEach(
            (dado, index) => {
                linhas.push(
                    <Linha key={index} dado={dado} />
                );
            }
        );

        const cabecalhos = [];
        this.props.listaCabecalhos.forEach(
            (dado, index) => {
                cabecalhos.push(
                    <Cabecalho key={index} dado={dado} />
                );
            }
        );

        return (
            <table className="table">
                <thead>
                    <tr>{cabecalhos}</tr>
                </thead>
                <tbody>{linhas}</tbody>
            </table>
        );
    }
}


export default Tabela;