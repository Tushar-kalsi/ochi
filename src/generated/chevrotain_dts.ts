// This file is autogenerated using "npm run generate".
// Don't edit this file manually.

import type { CstNode, ICstVisitor, IToken } from 'chevrotain';

export interface QueryCstNode extends CstNode {
    name: 'query';
    children: QueryCstChildren;
}

export type QueryCstChildren = {
    booleanClause?: BooleanClauseCstNode[];
    booleanSuffixClause?: BooleanSuffixClauseCstNode[];
    NOT?: IToken[];
    query?: QueryCstNode[];
};

export interface BooleanSuffixClauseCstNode extends CstNode {
    name: 'booleanSuffixClause';
    children: BooleanSuffixClauseCstChildren;
}

export type BooleanSuffixClauseCstChildren = {
    OR?: IToken[];
    query?: QueryCstNode[];
    AND?: IToken[];
};

export interface BooleanClauseCstNode extends CstNode {
    name: 'booleanClause';
    children: BooleanClauseCstChildren;
}

export type BooleanClauseCstChildren = {
    binaryClause?: BinaryClauseCstNode[];
};

export interface PortItemClauseCstNode extends CstNode {
    name: 'portItemClause';
    children: PortItemClauseCstChildren;
}

export type PortItemClauseCstChildren = {
    TCP_PORT?: IToken[];
    UDP_PORT?: IToken[];
};

export interface IpItemClauseCstNode extends CstNode {
    name: 'ipItemClause';
    children: IpItemClauseCstChildren;
}

export type IpItemClauseCstChildren = {
    IP_SRC?: IToken[];
    IP_DST?: IToken[];
};

export interface BinaryClauseCstNode extends CstNode {
    name: 'binaryClause';
    children: BinaryClauseCstChildren;
}

export type BinaryClauseCstChildren = {
    portItemClause?: PortItemClauseCstNode[];
    binaryOperator?: BinaryOperatorCstNode[];
    PORT?: IToken[];
    ipItemClause?: IpItemClauseCstNode[];
    IPV4?: IToken[];
};

export interface BinaryOperatorCstNode extends CstNode {
    name: 'binaryOperator';
    children: BinaryOperatorCstChildren;
}

export type BinaryOperatorCstChildren = {
    EQUAL?: IToken[];
    NOT_EQUAL?: IToken[];
    EQUAL_SMB?: IToken[];
    NOT_EQUAL_SMB?: IToken[];
};

export interface ICstNodeVisitor<IN, OUT> extends ICstVisitor<IN, OUT> {
    query(children: QueryCstChildren, param?: IN): OUT;
    booleanSuffixClause(children: BooleanSuffixClauseCstChildren, param?: IN): OUT;
    booleanClause(children: BooleanClauseCstChildren, param?: IN): OUT;
    portItemClause(children: PortItemClauseCstChildren, param?: IN): OUT;
    ipItemClause(children: IpItemClauseCstChildren, param?: IN): OUT;
    binaryClause(children: BinaryClauseCstChildren, param?: IN): OUT;
    binaryOperator(children: BinaryOperatorCstChildren, param?: IN): OUT;
}
